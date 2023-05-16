import { AddPhotoAlternate, AttachFile, SendSharp } from '@mui/icons-material'
import styled from "styled-components"
import React, { useContext, useState } from "react";
import { AuthContext } from '../context/AuthContextProvider';
import { ChatContext } from '../context/ChatContext';
import {
    arrayUnion,
    doc,
    serverTimestamp,
    Timestamp,
    updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";


const ChatBox = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, v4());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                    //TODO:Handle Error
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: v4(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL,
                            }),
                        });
                    });
                }
            );
        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setText("");
        setImg(null);
    };
    return (
        <Wrapper>
            <form>
                <textarea name="message" id="message" placeholder='Type your message' cols="1" onChange={(e) => setText(e.target.value)}
                    value={text} />
                <div className="icons">
                    <AttachFile sx={{ cursor: "pointer" }} />
                    <input type="file" id="file" style={{ display: "none" }} onChange={(e) => setImg(e.target.files[0])} />
                    <label htmlFor='file'><AddPhotoAlternate sx={{ cursor: "pointer" }} /></label>
                    <SendSharp sx={{ cursor: "pointer" }} onClick={handleSend} />
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-color:white;
width:100%;
form{
    display:flex;
    justify-content:space-between;
    padding:1rem;
    textarea{
        font-size:0.75rem;
        padding:0.5rem;
        width:100%;
        max-height:6rem;
        outline:none;
        border:none;
        resize:none;
    }
    .icons{
        color:#19A7CE;
        display:flex;
        gap:1rem;
        align-items:center;
    }
}

`

export default ChatBox
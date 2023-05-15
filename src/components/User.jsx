import { Avatar } from '@mui/material';
import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components";
import { AuthContext } from '../context/AuthContextProvider';
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase';

const User = () => {
    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            };
        };

        currentUser.uid && getChats();
    }, [currentUser.uid]);

    const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u });
    };
    console.log(chats)

    return (
        <>
            {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
                <Wrapper onClick={() => handleSelect(chat[1].userInfo)}>
                    <Avatar src={!chat[1].userInfo?.photoURL && 'https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg'} />
                    <div className="wrapper">
                        <h5>{chat[1].userInfo?.displayName}</h5>
                        <span>{chat[1].lastMessage.text}</span>
                    </div>
                </Wrapper>
            ))}
        </>
    )
}

const Wrapper = styled.div`
cursor:pointer;
    color:#146C94;
    padding:0.75rem;
    display:flex;
    align-items:center;
    border-bottom:1px solid #F6F1F1;
    &:hover{
        background-color:#146C94;
        color:#F6F1F1;
    }
    .wrapper{
        display:flex;
        flex-direction:column;
        padding:0px 0.75rem;
        span{
            font-weight:600;
            font-size:0.75rem;
        }
    }
`;

export default User
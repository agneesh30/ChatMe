import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import styled from "styled-components"
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase';
import ChatBox from './ChatBox';
import ChatHeader from './ChatHeader';
import Message from './message';


const Chats = () => {
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });

        return () => {
            unSub();
        };
    }, [data.chatId]);

    return (
        <Wrapper>
            <ChatHeader />
            <div className="messages">
                {messages.map((m) => (
                    <Message message={m} key={m.id} />
                ))}
            </div>
            <ChatBox />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    flex:3; 
    .messages{
        height: calc(100vh - 148px);
        scrollbar-width: thin;
        overflow-y:scroll;
    }
`;

export default Chats
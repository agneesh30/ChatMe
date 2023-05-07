import React from 'react'
import styled from "styled-components"
import ChatHeader from './ChatHeader';
import Input from './input';
import Message from './message';


const Chat = () => {
    return (
        <Wrapper>
            <ChatHeader />
            <div className="messages">
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
            <Input />
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

export default Chat
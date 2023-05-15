import React from 'react'
import Chats from '../components/Chats'
import Sidebar from "../components/Sidebar"
import styled from "styled-components"

const Home = () => {
    return (
        <Wrapper>
            <Sidebar />
            <Chats />
        </Wrapper>
    )
}

const Wrapper = styled.section`
height:100vh;
background-color: #F6F1F1;
display:flex;
`;


export default Home
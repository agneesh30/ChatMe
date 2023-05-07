import React from 'react'
import Chat from '../components/Chat'
import Sidebar from "../components/Sidebar"
import styled from "styled-components"

const Home = () => {
    return (
        <Wrapper>
            <Sidebar />
            <Chat />
        </Wrapper>
    )
}

const Wrapper = styled.section`
height:100vh;
background-color: #F6F1F1;
display:flex;
`;


export default Home
import { MoreHoriz, PersonAdd, VideoCall } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react'
import styled from "styled-components"
import { useAuthContext } from '../context/AuthContextProvider';

const ChatHeader = () => {
    const { currentUser } = useAuthContext();

    return (
        <Wrapper>
            <div className="profile">
                <Avatar />
                <h5>{currentUser.displayName}</h5>
            </div>
            <div className="icons">
                <PersonAdd sx={{ cursor: "pointer" }} />
                <VideoCall sx={{ cursor: "pointer" }} />
                <MoreHoriz sx={{ cursor: "pointer" }} />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
   color:#F6F1F1;
   height:3rem;
   padding:0.5rem 1rem;
   border-left: 1px solid #F6F1F1;
   background-color:#146C94;
   display:flex;
   justify-content:space-between;
   align-items:center;
   .profile{
    display:flex;
    justify-content:center;
    align-items:center;
    h5{
        padding-left:10px;
    }
   }
   .icons{
    display:flex;
    gap:1.5rem;
   }
`;

export default ChatHeader
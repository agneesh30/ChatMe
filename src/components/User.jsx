import { Avatar } from '@mui/material';
import React from 'react'
import styled from "styled-components"

const User = () => {
    return (
        <Wrapper>
            <Avatar src='https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg' />
            <div className="wrapper">
                <h5>Agneesh</h5>
                <span>This is my recent msg</span>
            </div>
        </Wrapper>
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
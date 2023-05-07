import { Avatar } from '@mui/material'
import React from 'react'
import styled from "styled-components"

const Message = () => {
    return (
        <Wrapper>
            <div className="messageContainer owner">
                <div className="messageInfo">
                    <Avatar sx={{ width: "30px", height: "30px" }} />
                    <span>Just Now</span>
                </div>
                <div className="content">
                    <span className="message">
                        This is my recent message
                    </span>
                    <img src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg" alt="image1" />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding:1rem;
    .messageContainer{
        display:flex;
        gap:1rem;
        .messageInfo{
            display:flex;
            flex-direction:column;
            font-size:0.75rem;
            max-width:10%;
        }
        .content{
            display:flex;
            flex-direction:column;
            .message{
                max-width:70%;
                width:fit-content;
                font-size:0.9rem;
                background-color:#FFF;
                color:#146C94;
                font-weight:600;
                padding:0.5rem;
                border-radius:0px 12px 12px 12px;
                height:fit-content;
            }
            img{
                padding:1rem 0px;
                max-width:40%;
                object-position:cover;
            }
        }
        &.owner{
            flex-direction:row-reverse;
            .content{
            display:flex;
            flex-direction:column;
            align-items:flex-end;
            .message{
                max-width:80%;
                background-color:#146C94;
                width:fit-content;
                font-size:0.9rem;
                color:#fff;
                font-weight:500;
                padding:0.5rem;
                border-radius:12px 0px 12px 12px;
                height:fit-content;
            }
            img{
                padding:1rem 0px;
                max-width:40%;
                object-position:cover;
            }
        }
        }
    }
   
`

export default Message
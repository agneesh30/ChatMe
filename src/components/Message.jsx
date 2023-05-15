import { Avatar } from '@mui/material'
import React, { useContext, useEffect, useRef } from 'react'
import styled from "styled-components"
import { AuthContext } from '../context/AuthContextProvider';

const Message = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <Wrapper>
            <div className={`messageContainer ${message.senderId === currentUser.uid && "owner"}`} ref={ref} >
                <div className="messageInfo">
                    <Avatar sx={{ width: "30px", height: "30px" }} />
                    <span>Just Now</span>
                </div>
                <div className="content">
                    <span className="message">
                        {message.text}
                    </span>
                    {message.img && <img src={message.img} alt="" />}
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
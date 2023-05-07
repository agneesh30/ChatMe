import { AddPhotoAlternate, AttachFile, SendSharp } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"

const Input = () => {
    return (
        <Wrapper>
            <form>
                <textarea name="message" id="message" placeholder='Type your message' cols="1" />
                <div className="icons">
                    <AttachFile sx={{ cursor: "pointer" }} />
                    <input type="file" id="file" style={{ display: "none" }} />
                    <label htmlFor='file'><AddPhotoAlternate sx={{ cursor: "pointer" }} /></label>
                    <SendSharp sx={{ cursor: "pointer" }} />
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

export default Input
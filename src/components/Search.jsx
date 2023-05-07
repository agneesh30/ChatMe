import React from 'react'
import styled from 'styled-components'


const Search = () => {
    return (
        <Wrapper>
            <input type="text" name="search" id="search" placeholder='Find a user' />
        </Wrapper>
    )
}

const Wrapper = styled.form`
overflow:hidden;
input{
    background-color:#fff;
    border:none;
    border-bottom:1px solid #F6F1F1;
    color:#146C94;
    font-weight:600;
    outline:none;
    height:3rem;
    width:100%;
    margin:0px;
    padding:0px;
    padding:0px 0.5rem;
    ::placeholder{
        color:#146C94
    }
}
`

export default Search
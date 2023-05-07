import React from 'react'
import styled from "styled-components"
import { Logout, Person } from '@mui/icons-material';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

import "../index.scss"
import { useAuthContext } from '../context/AuthContextProvider';

const SidebarHeader = () => {

    const { currentUser } = useAuthContext();

    return (
        <Wrapper>
            <h4 className='logo'>Chat Me</h4>
            <div className="icons">
                <span class="person"><Person /> {currentUser.displayName}</span><Logout onClick={() => signOut(auth)} />
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color:#146C94;
    padding:0.5rem 1rem;
    display:flex;
    justify-content: space-between;
    align-items:center;
    height:3rem;
    color:#F6F1F1;
    .icons{
        display:flex;
        align-items:center;
        cursor:pointer;
    }
    .person{
        display:flex;
        align-items:center;
        cursor:pointer;
        margin-right:15px;
    }
`;

export default SidebarHeader

import React from 'react'
import styled from "styled-components"
import Search from './Search';
import SidebarHeader from './SidebarHeader';
import User from './User';

const Sidebar = () => {
    return (
        <Wrapper>
            <SidebarHeader />
            <Search />
            <div className="users">
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
flex:1;
background-color:#AFD3E2;
.users{
    height:calc(100% - 113px);
    overflow-y:auto;
    scrollbar-width:5px;
}
`;

export default Sidebar
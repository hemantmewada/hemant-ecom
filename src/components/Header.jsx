import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {Nav} from "./index";

const Header = () => {
    // return <header></header>;
    return (
        <MainHeader>
            <NavLink to="/">
                <img src="./images/logo2.1.png" alt="" />
            </NavLink>
            <Nav />
        </MainHeader>
    )
}
const MainHeader = styled.header`
    // padding: 0 4.8rem;
    padding: 0 1.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .logo {
        height: 5rem;
    }
`;
export default Header

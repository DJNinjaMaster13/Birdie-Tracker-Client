
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    font-size: 22px;
    top: 0;
    justify-content: space-between;
    padding: 0px 0px;
    z-index: 10;
`;

//might not actually need this
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    width: 2100px;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: inline-block;
    text-align: center; 
    vertical-align: middle;
    line-height: 80px;

    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    width: fit-content;

    &.active{
        color: #15cdfc;
    }
`;

export const Bars = styled.div`
    display: none;
    color: #fff;

    @media screen and (max-width: 1250px) {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;

    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: space-between;
    margin-right: -24px;
    height: 100%;

    @media screen and (max-width: 1250px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 34px;
    margin-left: 34px;

    @media screen and (max-width: 1250px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;


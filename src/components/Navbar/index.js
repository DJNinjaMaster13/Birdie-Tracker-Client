import React from 'react'
import {FaBars} from 'react-icons/fa';
import { Nav, NavLink, NavbarContainer, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElements'
import AuthenticationButton from "../authentication-button";

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLink  to="/">
                        BirdieTracker
                    </NavLink>
                    <Bars onClick={toggle}>
                        <FaBars/>
                    </Bars>
                    <NavMenu>
                        <NavLink to="/scorecardlist" activeStyle>
                            Scorecards
                        </NavLink>
                        <NavLink to="/createscorecard" activeStyle>
                            Create Scorecard
                        </NavLink>
                        <NavLink to="/createcourse" activeStyle>
                            Create Course
                        </NavLink>
                        <NavLink to="/courselist" activeStyle>
                            Courses
                        </NavLink>
                        <NavLink to="/profile" activeStyle>
                            Profile
                        </NavLink>
                    </NavMenu>
                    <NavBtn>
                        <AuthenticationButton/>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
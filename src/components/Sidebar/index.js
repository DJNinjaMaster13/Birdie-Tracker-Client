import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import AuthenticationButton from '../authentication-button';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarLink, 
    SideBtn, 
    SidebarMenu,
    SidebarWrapper,
    SideBtnLink } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>

            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>

                <SidebarMenu>

                    <SidebarLink to="/scorecardlist" activeStyle>
                        Scorecards
                    </SidebarLink>

                    <SidebarLink to="/createscorecard" activeStyle>
                        Create Scorecard
                    </SidebarLink>

                    <SidebarLink to="/createcourse" activeStyle>
                        Create Course
                    </SidebarLink>

                    <SidebarLink to="/courselist" activeStyle>
                        Courses
                    </SidebarLink>

                    <SidebarLink to="/profile" activeStyle>
                        Profile
                    </SidebarLink>

                    <SideBtn>
                        <AuthenticationButton/>
                    </SideBtn>
                    
                </SidebarMenu>

            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar

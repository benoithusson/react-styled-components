import React from 'react';
import { Nav, NavBarContainer, NavLogo, NavIcon } from './NavBar.elements';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                    </NavLogo>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar;

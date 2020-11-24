import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// IconContext : Utiliser l'api react Context pour styliser les react icons
import { IconContext } from 'react-icons/lib';
import {
    Nav,
    NavBarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavBar.elements';

const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            {/* value={{ color: '#fff' }} va permettre de styliser les react icons FaTimes et FaBar  */}
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavBarContainer>

                        <NavLogo to="/">
                            <NavIcon />
                            ULTRA
                        </NavLogo>

                        {/* Icône Menu
                            > Change l'icône du menu aprés un clic
                            > Seulement visible en max-width: 960px
                            > click = false via useState
                            > Si click = true, affiche <FaTimes />. Sinon, affiche <FaBars />
                        */}
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>

                        {/* > Trigger Animation on Props with styled components
                            > Dans Navbar.element.js, ligne 71, on trouve = left: ${({ click }) => (click ? 0 : '-100%')};
                            > Cette propriété se trouve dans le styled component NavMenu (créé pour le menu, seulement en max-width: 960px) 
                            > Cette propriété permet de déplacer de gauche á droite un bloc
                            > click={click} = on envoit click en argument á left: ${({ click }) => (click ? 0 : '-100%')};
                            > Click sera soit true, soit false. Si true, le menu est affiché. Si false, le menu disparaît.
                            > click est modifié via la méthode handleClick()
                            > Fonctionne sur le même principe que {props && <div>Hello</div>}
                        */}
                        <NavMenu onClick={handleClick} click={click}>
                            {/* Home */}
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>

                            {/* Services */}
                            <NavItem>
                                <NavLinks to="/services">Services</NavLinks>
                            </NavItem>

                            {/* Products */}
                            <NavItem>
                                <NavLinks to="/products">Products</NavLinks>
                            </NavItem>
                        </NavMenu>

                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar;

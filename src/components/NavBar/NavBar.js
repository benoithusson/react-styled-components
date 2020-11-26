import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../globalStyles';
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
    NavLinks,
    NavItemButton,
    NavBtnLink
} from './NavBar.elements';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    // useEffect seulement appelé si la valeur de button change
    // On évite ainsi á useEffect d'être appelé á chaque re-rendered
    useEffect(() => {
        showButton();
    }, [button])

    // On attache un addEventListener á window
    // La méthode showButton est appelée si on modifie la taille de window
    // 1) Si taille de window change
    // 2) showButton() est appelée et modifie la valeur de button (true ou false)
    // 3) En fonction de la taille de l'écran (desktop ou mobile), le bouton pour desktop ou mobile sera affiché
    window.addEventListener('resize', showButton);

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
                            > Fonctionne seulement pour max-width: 960px
                            > click = false via useState
                            > Si click = true, affiche <FaTimes />. Sinon, affiche <FaBars />
                        */}
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>

                        {/* > How to trigger Animation on Props with styled components
                            > left: ${({ click }) => (click ? 0 : '-100%')};
                            > Dans Navbar.element.js, ligne 71, on trouve = left: ${({ click }) => (click ? 0 : '-100%')};
                            > Cette propriété se trouve dans le styled component NavMenu (créé pour le menu, seulement en max-width: 960px) 
                            > Cette propriété permet de déplacer de gauche á droite un bloc
                            > click={click} = on envoit click en argument au stxled-component NavMenu
                            > Dans <NavMenu />, click={click} est ensuite utilisé pour la propriéé left: ${({ click }) => (click ? 0 : '-100%')};
                            > Click sera soit true, soit false. Si true, le menu est affiché. Si false, le menu disparaît.
                            > click est modifié via la méthode handleClick()
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

                            {/* Afficher le bouton sign-up dans le composant NavMenu (sur desktop et mobile) */}
                            <NavItemButton>
                                {/* 
                                    > Si button true = signifie que window.innerWidth supérieur á 960px = on est sur desktop
                                    > Si button false = signifie que window.innerWidth inférieur á 960px = on est sur mobile 
                                    > Voir fonction showButton() ligne 25
                                */}
                                {button ? (
                                    // Bouton pour desktop
                                    // primary est passé en argument au styled component Button
                                    <NavBtnLink to="/sign-up">
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                        // Bouton pour mobile
                                        // fontBig et primary sont passé en argument au styled component Button
                                        <NavBtnLink to="/sign-up">
                                            <Button fontBig primary>SIGN UP</Button>
                                        </NavBtnLink>
                                    )}
                            </NavItemButton>
                        </NavMenu>

                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar;

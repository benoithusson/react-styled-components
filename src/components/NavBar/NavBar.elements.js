import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

// Je créé un styled-component 'NavBarContainer' á partir du styled-component générique 'Container'
// Ce styled-component générique est créé dans le fichier globalStyled.js
export const NavBarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container};
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        /* déplacer un élément sur les axes horizontales (-100%) et vertical (-60%) */
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer; 
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 90vh;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 80px;
        /* Á revoir */
        left: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #101522;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    
    /* Changement de la couleur border-bottom quand je passe ma souris sur un NavItem en mode desktop */
    &:hover {
        border-bottom: 2px solid #4b59f7;
    }

    /* max-width: 960px = Dés que l'écran est inférieur á 960px, le style s'applique */
    @media screen and (max-width: 960px) {
        width: 100%;

        /* Suppression de la border quand je passe ma souris en max-width: 960px */
        &:hover {
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and(max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table; 
    }

    &:hover {
        color: #4b59f7;
        transition: all 0.3s ease;
    }
`;
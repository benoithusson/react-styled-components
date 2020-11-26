import styled, { createGlobalStyle } from 'styled-components';

// GlobalStyle qui sera ensuite disponible partout
// C'est un styled component
const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source sans Pro', sans-serif;
}
`;

// Container générique qui pourra être utilisé n'importe oú et même dans un autre styled-component
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 50px;
    padding-left: 50px;
`;

// Bouton générique qui pourra être utilisé n'importe oú et même dans un autre styled-component
export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '15px')};
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;


export default GlobalStyle;
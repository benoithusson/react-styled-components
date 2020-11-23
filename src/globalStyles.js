import styled, { createGlobalStyle } from 'styled-components';

// GlobalStyle qui sera ensuite disponible partout
const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source sans Pro', sans-serif;
}
`;

// Container générique qui pourra être utilisé dans un autre styled-component
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 50px;
    padding-left: 50px;
`;


export default GlobalStyle;
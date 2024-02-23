import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    padding: 0;
    background-image: ${(props) => `url(${props.backgroundImage})`};
    background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


  font-family: 'Unbounded', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`

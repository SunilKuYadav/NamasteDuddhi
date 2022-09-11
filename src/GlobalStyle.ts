import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, ::after, ::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Nunito', sans-serif;
}
`;

export default GlobalStyles;

export const ScreenWrapper = styled.section`
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 0rem 0.7rem;
    font-size: 0.9rem;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    padding: 0rem 0.9rem;
    font-size: 1rem;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    padding: 0rem 1rem;
    font-size: 1rem;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    padding: 0rem 1.5rem;
    font-size: 1.2rem;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    padding: 0rem 2rem;
    font-size: 1.3rem;
  }
`;

import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Wrapper from "../components/wrapper";
import { ToastContainer } from "react-toastify";
import "nprogress/nprogress.css";
import "react-toastify/dist/ReactToastify.css";
import { Steps } from 'chakra-ui-steps';
const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  components: {
    Steps,
  },
});

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    color: #707070;
    font-size: 16px;
    line-height: 1.45;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
  }

  .title-color {
    color: #fff !important;
    font-size: 30px !important;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .dashboard-logo {
    width: 150px;
  }

  .active > .chakra-link > div {
    background-color: #ffa200 !important;
    color: #fff;
  }
  
  #nprogress .bar {
    height: 4px !important;
    z-index: 99999 !important;
  }

  .horizontal-scroll {
    overflow-x: auto;
    white-space: nowrap;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #F5F5F5;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #FFA200;
    border-radius: 6px;
  }

  ::-moz-selection {
    background: #FFB70075;
    text-shadow: none;
  }

  ::selection {
    background: #FFB70075;
    text-shadow: none;
  }
`;
const Theme = ({ children }) => {

  return (
    <ThemeProvider theme={{}}>
      <ChakraProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>{children}</Wrapper>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default Theme;

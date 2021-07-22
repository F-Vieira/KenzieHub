import { createGlobalStyle } from "styled-components";
import KenzieBackground from "../assets/kenzieHubBackground.webp";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  :root{
    --light-blue: #007FF6;
    --dark-blue: #05033A;
    --snow-blue: #E3F3FD;
    --red: #FF0000;
  }
  body{
    background: url(${KenzieBackground});
    
  }
  body, input, button{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem; 
  }
  
  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`;

import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  background-color: var(--dark_green);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.p`
  color: var(--light_green);
  margin: 10px 0;

  a {
    color: var(--white);
    text-shadow: 0 0 5px #f9f9f9, 0 0 10px #f9f9f9, 0 0 15px #f9f9f9,
      0 0 20px #8ede86, 0 0 30px #8ede86, 0 0 40px #8ede86, 0 0 55px #8ede86,
      0 0 75px #8ede86;

    transition: 1.5s;

    :hover {
      text-shadow: none;
      text-decoration: underline;
    }

    :focus {
      text-shadow: none;
      text-decoration: underline;
    }
  }
`;

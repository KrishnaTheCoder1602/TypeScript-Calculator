import React from "react";
import styled from "styled-components";
import Display from "./Display";
import Buttons from "./Buttons";
import Calculator from "./styles/Calculator";

const Footer = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 2rem;
  text-align: center;
  > * {
    margin-bottom: 0.5rem;
  }
`;

const App = () => {
  return (
    <>
      <Calculator>
        <header>TypeScript Calculator</header>
        <Display />
        <Buttons />
      </Calculator>
      <Footer>
        <span>
          Built with{" "}
          <span role="img" aria-label="Love">
            ❤️
          </span>{" "}
          by <a href="">Krishna Shah</a>.
        </span>
      </Footer>
    </>
  );
};

export default App;

import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
    color: black;
  }
`;

const App = () => {
  // Write your code here

  return <StyledButton>Click me!</StyledButton>;
};

export default App;
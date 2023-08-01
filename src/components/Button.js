//UWAGA!
//Plik do zmiany atrybuty pozostawione jako wzór. Po zmianie usunąć komentarz.

import { styled } from "styled-components";

export const Button = styled.button`
  border-radius: ;
  border-color: ;
  background-color: ${({ isSecondary }) =>
    isSecondary ? "transparent" : "blueviolet"};
  border: ;
  color: ${(props) => (props.isSecondary ? "blueviolet" : "white")};
  transition: ;
  &:hover {
    background-color: transparent;
    color: blueviolet;
  }
  &:active {
    opacity: 0.7;
    color: red;
  }
  @media (mex-width: 768px) {
    background-color: gold;
    color: black;
  }
`;

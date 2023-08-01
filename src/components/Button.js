import { styled } from "styled-components";

export const Button = styled.button`
  font-size: 16px;
  border-radius: 100px;
  background-color: #0a66c2;
  border: none;
  color: white;
  cursor: pointer;
  padding: 7px 20px;
  &:hover {
    background-color: #16437e;
    color: white;
  }
  &:active {
    opacity: 0.7;
    color: white;
  }
`;

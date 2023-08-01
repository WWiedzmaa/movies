//UWAGA!
//Plik do zmiany atrybuty pozostawione jako wzór. Po zmianie usunąć komentarz.
//ostylowanie paragrafów na stronie

import { styled, css } from "styled-components";

const COLOR = {
  success: css`
    background-color: green;
    color: white;
  `,
  warning: css`
    background-color: orange;
    color: white;
  `,
  error: css`
    background-color: red;
    color: white;
  `,
};

const SIZE = {
  big: css`
    font-size: 35px;
    padding: 45px;
    font-weight: 800;
  `,
  medium: css`
    font-size: 25px;
    padding: 30px;
    font-weight: 500;
  `,
  small: css`
    font-size: 15px;
    padding: 15px;
    font-weight: 200;
  `,
};

export const Paragraph = styled.p`
  cursor: pointer;
  font-weight: 600;
  border-radius: 16px;
  outline: none;
  ${({ variant }) =>
    variant &&
    COLOR[variant]} //jako variant wpada podany wyżej wariant z COLOR np. error
${({ version }) => version && SIZE[version]}
`;

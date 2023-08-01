import { styled, css } from "styled-components";

const COLOR = {
  normal: css`
    color: black;
  `,
  dark: css`
    color: darkgray;
  `,
  light: css`
    color: lightgray;
  `,
};

const SIZE = {
  big: css`
    font-size: 20px;
    padding: 45px;
    font-weight: 800;
  `,
  medium: css`
    font-size: 12px;
    padding: 30px;
    font-weight: 500;
  `,
  small: css`
    font-size: 6px;
    padding: 15px;
    font-weight: 200;
  `,
};

export const Paragraph = styled.p`
  ${({ variant }) =>
    variant &&
    COLOR[variant]} //jako variant wpada podany wyżej wariant z COLOR np. error
${({ version }) => version && SIZE[version]}
`;

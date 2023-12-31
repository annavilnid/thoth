import styled from "styled-components";
import { FC, ReactNode } from "react";
import {
  fontFamily,
  resetMarginsAndPaddings,
} from "@/assets/styles/commonStyles.ts";

//Types
type LinkProps = {
  children: ReactNode;
  color: string;
  href: string;
  target?: string;
  rel?: string;
};

//Styles
const StyledLink = styled.a<LinkProps>`
  ${resetMarginsAndPaddings};
  ${fontFamily};
  color: ${(props) => props.color};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }
`;

//Component
export const Link: FC<LinkProps> = ({
  href,
  target,
  rel,
  children,
  ...style
}) => (
  <StyledLink href={href} target={target} rel={rel} {...style}>
    {children}
  </StyledLink>
);

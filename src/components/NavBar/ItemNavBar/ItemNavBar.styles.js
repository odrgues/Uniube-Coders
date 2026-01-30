import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../../assets/styles/theme";

export const NavItem = styled(Link)`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.medium};
  text-decoration: none;

  color: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.primary : theme.colors.text.primary};

  position: relative;
  transition: color ${theme.transitions.fast};

  &:hover {
    color: ${theme.colors.brand.action};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: ${({ $active }) => ($active ? "100%" : "0%")};
    height: 2px;
    background: ${theme.colors.brand.action};
    text-decoration: none;
    transition: width ${theme.transitions.fast};
  }

  &:hover::after {
    width: 100%;
  }
`;

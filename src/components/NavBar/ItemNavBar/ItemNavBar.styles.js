import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavItem = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;

  color: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.primary : theme.colors.text.primary};

  position: relative;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.brand.action};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: ${({ $active }) => ($active ? "100%" : "0%")};
    height: 2px;
    background: ${({ theme }) => theme.colors.brand.action};
    transition: width ${({ theme }) => theme.transitions.fast};
  }

  &:hover::after {
    width: 100%;
  }
`;

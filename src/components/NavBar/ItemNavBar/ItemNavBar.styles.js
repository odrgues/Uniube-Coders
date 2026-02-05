import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavItem = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.nav};

  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;

  color: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.text.primary : theme.colors.text.primary};

  position: relative;
  display: flex;
  align-items: center;
  height: 2%;

  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.brand.action};
  }

  &::after {
    content: "";
    position: absolute;

    bottom: -10%;
    left: 0;
    width: ${({ $active }) => ($active ? "100%" : "0%")};
    height: 2px;
    background: ${({ theme }) => theme.colors.brand.action};
    transition: width ${({ theme }) => theme.transitions.normal};
    border-radius: 2px;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    color: ${({ theme }) => theme.colors.text.inverse};
    font-size: ${({ theme }) => theme.fontSizes.mobileNav};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    padding: 10px 0;
    width: 100%;

    &::after {
      display: none;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.brand.highlight};
      padding-left: 10px;
    }
  }
`;

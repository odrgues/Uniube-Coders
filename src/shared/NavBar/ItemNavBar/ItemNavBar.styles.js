import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavItem = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-decoration: none;

  color: ${({ theme }) => theme.colors.text.primary};

  position: relative;
  display: inline-flex;
  align-items: center;

  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.palette.blue.primary};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10%;
    left: 0;
    width: ${({ $active }) => ($active ? "100%" : "0%")};
    height: 2px;
    background: ${({ theme }) => theme.colors.brand.primary};
    transition: width ${({ theme }) => theme.transitions.normal};
    border-radius: 2px;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    color: ${({ theme }) => theme.colors.text.inverse};
    font-size: ${({ theme }) => theme.fontSizes.mobileNav};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
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

import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavbarWrapper = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({ theme }) => theme.zIndex.navbar};
  height: ${({ theme }) => theme.layout.navbar.height};
  transition: ${({ theme }) => theme.transitions.normal};
  background: white;

  ${({ $scrolled, theme }) =>
    $scrolled &&
    css`
      background: ${theme.palette.white};
    `};
`;

export const NavInner = styled.div`
  min-height: ${({ theme }) => theme.layout.navbar.height};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(12px, 2vw, 16px);
`;

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  img {
    height: clamp(36px, 4vw, 42px);
    width: auto;
    object-fit: contain;
    transition: ${({ theme }) => theme.transitions.fast};
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.4vw, 18px);

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 0.02px)) {
    display: none;
  }
`;

export const NavLinkItem = styled(NavLink)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: clamp(38px, 4vw, 42px);
  padding: 0 clamp(12px, 1.8vw, 18px);
  border-radius: ${({ theme }) => theme.radius.full};

  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.primary};

  background: transparent;

  transition:
    transform ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: clamp(5px, 0.8vw, 8px);
    transform: translateX(-50%);
    width: 0%;
    height: 2px;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.colors.brand.secondary};
    transition: ${({ theme }) => theme.transitions.fast};
  }

  &.active {
    // background: ${({ theme }) => theme.palette.cyan.soft};
  }

  &.active::after {
    width: calc(100% - clamp(20px, 3vw, 28px));
  }

  &:hover {
    //background: ${({ theme }) => theme.palette.cyan.soft};
    transform: scale(1.04);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  &:hover::after {
    width: calc(100% - clamp(20px, 3vw, 28px));
  }
`;

export const MenuButton = styled.button`
  width: clamp(40px, 5vw, 44px);
  height: clamp(40px, 5vw, 44px);
  display: none;
  border-radius: ${({ theme }) => theme.radius.full};

  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  transition:
    transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};

  span {
    width: 18px;
    height: 2px;
    background: ${({ theme }) => theme.colors.text.primary};
    border-radius: ${({ theme }) => theme.radius.full};
    transition: ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    transform: scale(1.04);
    box-shadow: ${({ theme }) => theme.shadows.sm};
    background: ${({ theme }) => theme.palette.cyan.soft};
  }

  &:hover span {
    background: ${({ theme }) => theme.colors.brand.secondary};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 0.02px)) {
    display: flex;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  background: rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(4px);

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};

  transition: ${({ theme }) => theme.transitions.normal};
`;

export const MobilePanel = styled.aside`
  position: fixed;
  top: calc(
    ${({ theme }) => theme.layout.navbar.height} + clamp(8px, 1vw, 12px)
  );
  right: clamp(12px, 2vw, 16px);
  left: clamp(12px, 2vw, 16px);

  z-index: ${({ theme }) => theme.zIndex.mobileMenu};

  display: none;
  flex-direction: column;
  gap: clamp(10px, 1.4vw, 16px);

  padding: clamp(18px, 2vw, 24px);
  border-radius: ${({ theme }) => theme.radius.lg};

  background: ${({ theme }) => theme.colors.navbar.mobile};
  border: 1px solid ${({ theme }) => theme.colors.navbar.border};
  box-shadow: ${({ theme }) => theme.shadows.md};
  backdrop-filter: blur(18px);

  transform: ${({ $open }) =>
    $open ? "translateY(0) scale(1)" : "translateY(-16px) scale(0.98)"};

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};

  transition: ${({ theme }) => theme.transitions.normal};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 0.02px)) {
    display: flex;
  }
`;

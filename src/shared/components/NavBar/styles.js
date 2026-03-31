import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavbarWrapper = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({ theme }) => theme.zIndex.navbar};
  height: ${({ theme }) => theme.layout.navbar.height};

  transition:
    background ${({ theme }) => theme.transitions.normal},
    backdrop-filter ${({ theme }) => theme.transitions.normal};

  ${({ $solid, theme }) =>
    $solid &&
    css`
      background: rgba(255, 255, 255, 0.82);
      border-bottom: 1px solid ${theme.colors.border.soft};

      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    `};

  @media ${({ theme }) => theme.media.down.md} {
    height: ${({ theme }) => theme.layout.navbar.heightMobile};
  }
`;

export const NavInner = styled.div`
  min-height: ${({ theme }) => theme.layout.navbar.height};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(12px, 2vw, 20px);

  @media ${({ theme }) => theme.media.down.md} {
    min-height: ${({ theme }) => theme.layout.navbar.heightMobile};
  }
`;

export const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: transform ${({ theme }) => theme.transitions.fast};

  img {
    width: auto;
    height: clamp(32px, 4vw, 40px);
    object-fit: contain;
    transition:
      transform ${({ theme }) => theme.transitions.fast},
      filter ${({ theme }) => theme.transitions.fast};
    filter: ${({ $solid }) => ($solid ? "none" : "brightness(0) invert(1)")};
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    img {
      height: 32px;
    }
  }

  @media ${({ theme }) => theme.media.down.sm} {
    img {
      height: 30px;
    }
  }
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 18px);

  @media ${({ theme }) => theme.media.down.md} {
    display: none;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    gap: 10px;
  }
`;

export const NavLinkItem = styled(NavLink)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding-inline: clamp(12px, 1.6vw, 18px);
  border-radius: ${({ theme }) => theme.radius.full};
  color: ${({ theme, $solid }) =>
    $solid ? theme.colors.text.secondary : theme.colors.text.heroSubtle};
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1;
  white-space: nowrap;

  background: ${({ $solid }) =>
    $solid ? "rgba(255, 255, 255, 0.42)" : "rgba(255, 255, 255, 0.08)"};
  //border: 1px solid
  ${({ $solid }) =>
    $solid ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.14)"};

  transition:
    color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 7px;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.colors.brand.secondary};
    transition: width ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    transform: translateY(-1px);
    background: ${({ $solid }) =>
      $solid ? "rgba(255, 255, 255, 0.74)" : "rgba(255, 255, 255, 0.16)"};
    border-color: rgba(255, 255, 255, 0.38);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
  }

  &:hover::after,
  &.active::after {
    width: calc(100% - 24px);
  }

  &.active {
    color: ${({ theme, $solid }) =>
      $solid ? theme.colors.brand.primary : theme.colors.text.inverse};
    background: ${({ $solid }) =>
      $solid ? "rgba(255, 255, 255, 0.86)" : "rgba(255, 255, 255, 0.18)"};
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    min-height: 40px;
    padding-inline: 14px;
    font-size: 0.9rem;
  }

  @media ${({ theme }) => theme.media.down.md} {
    width: 100%;
    min-height: 48px;
    justify-content: flex-start;
    padding-inline: 16px;
    border-radius: ${({ theme }) => theme.radius.md};
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.text.primary};
    background: rgba(255, 255, 255, 0.58);
    border: 1px solid rgba(255, 255, 255, 0.52);

    &::after {
      left: 16px;
      transform: none;
      bottom: 8px;
    }

    &:hover {
      transform: none;
      background: rgba(255, 255, 255, 0.86);
      box-shadow: none;
    }

    &.active {
      color: ${({ theme }) => theme.colors.brand.primary};
      background: rgba(255, 255, 255, 0.92);
    }

    &:hover::after,
    &.active::after {
      width: 32px;
    }
  }
`;

export const MenuButton = styled.button`
  width: 42px;
  height: 42px;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: transparent;
  gap: 5px;
  border: none;
  transition:
    background ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  span {
    width: 18px;
    height: 2px;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme, $solid }) =>
      $solid ? theme.colors.text.primary : theme.colors.text.inverse};
    transition:
      transform ${({ theme }) => theme.transitions.fast},
      opacity ${({ theme }) => theme.transitions.fast},
      background ${({ theme }) => theme.transitions.fast};
    transform-origin: center;
  }

  ${({ $open }) =>
    $open &&
    css`
      span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    `}

  &:hover {
    transform: translateY(-1px);
    background: ${({ $solid }) =>
      $solid ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.16)"};
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
    border-color: rgba(255, 255, 255, 0.4);
  }

  &:hover span {
    background: ${({ theme, $solid }) =>
      $solid ? theme.colors.brand.secondary : theme.colors.text.inverse};
  }

  @media ${({ theme }) => theme.media.down.md} {
    display: inline-flex;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  background: rgba(11, 18, 32, 0.26);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};

  transition:
    opacity ${({ theme }) => theme.transitions.normal},
    visibility ${({ theme }) => theme.transitions.normal};
`;

export const MobilePanel = styled.aside`
  position: fixed;
  top: calc(${({ theme }) => theme.layout.navbar.heightMobile} + 8px);
  left: ${({ theme }) => theme.layout.container.gutter};
  right: ${({ theme }) => theme.layout.container.gutter};
  z-index: ${({ theme }) => theme.zIndex.mobileMenu};

  display: none;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.lg};

  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.54);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  transform: ${({ $open }) =>
    $open ? "translateY(0) scale(1)" : "translateY(-12px) scale(0.98)"};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};

  transition:
    transform ${({ theme }) => theme.transitions.normal},
    opacity ${({ theme }) => theme.transitions.normal},
    visibility ${({ theme }) => theme.transitions.normal};

  @media ${({ theme }) => theme.media.down.md} {
    display: flex;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: 14px;
    gap: 6px;
  }
`;

import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.layout.navbar.height};

  z-index: ${({ theme }) => theme.zIndex.navbar};

  background: ${({ $scrolled, $menuOpen, theme }) =>
    $scrolled || $menuOpen
      ? theme.colors.background.surface
      : theme.colors.background.surface};

  box-shadow: ${({ $scrolled, theme }) =>
    $scrolled ? theme.shadows.sm : "none"};

  transition: all ${({ theme }) => theme.transitions.normal};
`;

export const NavContent = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.media.lg} {
    padding: 0 clamp(32px, 5vw, 80px);

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-items: center;
  }
`;

export const Logo = styled(Link)`
  height: clamp(26px, 4vw, 50px);
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 10;

  @media ${({ theme }) => theme.media.lg} {
    justify-self: start;
  }

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
`;

export const Menu = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.lg} {
    display: flex;
    align-items: center;
    gap: clamp(24px, 4vw, 48px);
    justify-self: center;
  }
`;

export const MobileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.background.muted};
  font-size: clamp(1.5rem, 3vw, 2rem);
  padding: 0;
  width: clamp(40px, 4vw, 48px);
  height: clamp(40px, 4vw, 48px);

  @media ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;

  height: calc(100vh - ${({ theme }) => theme.layout.navbar.height});

  background: ${({ theme }) => theme.colors.background.overlay};
  backdrop-filter: blur(4px);

  z-index: 98;

  animation: ${fadeIn} 0.3s ease;

  @media ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;

export const MobileMenu = styled.nav`
  position: fixed;
  top: ${({ theme }) => theme.layout.navbar.height};
  border-radius: ${({ theme }) => theme.radius.lg};
  left: 0;
  width: 100%;

  height: calc(100vh - ${({ theme }) => theme.layout.navbar.height});

  background: ${({ theme }) => theme.colors.background.muted};

  z-index: 99;

  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 10px;

  transition:
    transform 0.5s cubic-bezier(0.32, 1, 0.23, 1),
    opacity 0.3s ease;

  transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(100%)")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};

  @media ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;

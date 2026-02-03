import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Nav = styled.nav`
  position: fixed;
  top: ${({ theme }) => theme.spacing.md};
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.layout.navbar.height};
  z-index: ${({ theme }) => theme.zIndex.navbar};
  background: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.background.surface : "transparent"};
  box-shadow: ${({ $scrolled, theme }) =>
    $scrolled ? theme.shadows.sm : "none"};
  transition: all ${({ theme }) => theme.transitions.normal};
`;

export const NavContent = styled.div`
  position: relative;
  height: 100%;

  width: 100%;
  margin: 0;

  padding: 0 ${({ theme }) => theme.spacing.lg};

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: flex-start;

    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`;

export const Logo = styled.div`
  height: 35px;
  grid-column: 2;
  justify-self: center;
  display: flex;
  align-items: center;

  img {
    height: 100%;
    display: block;
    margin-left: -60px; //ajuste fino no layout (caso o logo mude, aqui deve ser ajustado tbm)
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 45px;
    grid-column: auto;
    margin-left: 60px; //ajuste fino no layout (caso o logo mude, aqui deve ser ajustado tbm)
    justify-self: center;
  }
`;

export const MobileButton = styled.button`
  grid-column: 1;
  grid-row: 1;
  justify-self: start;

  appearance: none;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background.surface};
  color: ${({ theme }) => theme.colors.text.primary};
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 1001;
  transition: all ${({ theme }) => theme.transitions.fast};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }

  &:active {
    transform: scale(0.92);
  }
`;

export const Menu = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    gap: ${({ theme }) => theme.spacing.lg};
    align-items: center;

    position: absolute;
    left: 48%;
    top: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
`;

export const MobileMenu = styled.nav`
  position: fixed;
  top: calc(
    ${({ theme }) => theme.spacing.md} +
      ${({ theme }) => theme.layout.navbar.height}
  );
  left: 0;
  width: 100%;
  gap: 10px;
  height: calc(
    100vh -
      (
        ${({ theme }) => theme.spacing.md} +
          ${({ theme }) => theme.layout.navbar.height}
      )
  );
  background: ${({ theme }) => theme.colors.background.muted};

  a {
    color: ${({ theme }) => theme.colors.text.inverse};
  }

  z-index: 999;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xl};

  transition:
    transform 0.5s cubic-bezier(0.32, 1, 0.23, 1),
    opacity 0.3s ease;
  transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(100%)")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 998;
  animation: ${fadeIn} 0.3s ease;
`;

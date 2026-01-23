import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 ${({ theme }) => theme.spacing.md};

  background: ${({ theme, $scrolled }) =>
    $scrolled ? theme.colors.surface : "transparent"};

  box-shadow: ${({ theme, $scrolled }) =>
    $scrolled ? theme.shadows.sm : "none"};

  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;

  z-index: ${({ theme }) => theme.zIndex.header};
`;

export const Logo = styled.div`
  position: absolute;
  left: 45%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  pointer-events: none;

  img {
    height: 46px;
    width: auto;
    //filter: invert(1); //essa linha está deixando o logo com as cores invertidas
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: ${({ theme }) => theme.spacing.lg};
    transform: none;
    pointer-events: auto;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const MobileButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing.lg};
  background: none;
  border: none;
  font-size: 1.9rem;
  cursor: pointer;

  color: ${({ theme, $scrolled }) =>
    $scrolled ? theme.colors.primary : "#ffffff"};

  display: none;
  right: max(${({ theme }) => theme.spacing.lg}, 58px);
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: ${({ theme }) => theme.spacing.lg};

  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.md};

  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;

  ${({ $open }) =>
    $open &&
    `
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
  `}

  transition:
    opacity 0.25s ease,
    transform 0.25s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

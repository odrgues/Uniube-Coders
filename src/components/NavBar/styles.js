import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;

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
  left: ${({ theme }) => theme.spacing.lg};

  display: flex;
  align-items: center;
  height: 100%;

  img {
    height: 46px;
    width: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    img {
      height: 42px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const MobileButton = styled.button`
  display: none;
  position: absolute;
  right: ${({ theme }) => theme.spacing.lg};
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;

  color: ${({ theme, $scrolled }) =>
    $scrolled ? theme.colors.primary : "#ffffff"};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 77px;
  right: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.md};
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

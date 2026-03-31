import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: clamp(20px, 2.5vw, 28px) 0 clamp(10px, 1.2vw, 14px);
  color: ${({ theme }) => theme.colors.text.inverse};
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;

  background: ${({ theme }) => theme.colors.brand.banner};
`;

export const Grid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr));
  gap: clamp(14px, 1.8vw, 22px);

  @media ${({ theme }) => theme.media.down.md} {
    justify-items: center;
    text-align: center;
    gap: 16px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(5px, 0.8vw, 8px);

  @media ${({ theme }) => theme.media.down.md} {
    align-items: center;
  }

  ${({ $hideOnMobile, theme }) =>
    $hideOnMobile &&
    `
      @media ${theme.media.down.sm} {
        display: none;
      }
    `}

  h4 {
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 0.82rem;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    letter-spacing: -0.01em;
  }

  p {
    margin: 0;
    max-width: 26ch;
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.78rem;
    line-height: 1.55;
  }

  a {
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.78rem;
    transition:
      color ${({ theme }) => theme.transitions.fast},
      transform ${({ theme }) => theme.transitions.fast},
      opacity ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.text.muted};
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 6px;
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.78rem;
    line-height: 1.5;

    @media ${({ theme }) => theme.media.down.md} {
      justify-content: center;
    }

    svg {
      flex-shrink: 0;
      opacity: 0.9;
    }
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  filter: brightness(0) invert(1);

  @media ${({ theme }) => theme.media.down.md} {
    display: none;
  }
`;

export const Logo = styled.img`
  height: clamp(22px, 2.2vw, 26px);
`;

export const Social = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 6px;

  @media ${({ theme }) => theme.media.down.md} {
    justify-content: center;
  }

  a {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 9999px;
    font-size: 0.92rem;

    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.78);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);

    transition:
      background ${({ theme }) => theme.transitions.fast},
      color ${({ theme }) => theme.transitions.fast},
      transform ${({ theme }) => theme.transitions.fast},
      border-color ${({ theme }) => theme.transitions.fast};

    &:hover {
      background: rgba(6, 182, 212, 0.14);
      border-color: rgba(6, 182, 212, 0.28);
      color: ${({ theme }) => theme.colors.brand.highlight};
      transform: translateY(-1px);
    }
  }
`;

export const Bottom = styled.div`
  position: relative;
  z-index: 1;
  margin-top: clamp(14px, 1.8vw, 18px);
  padding-top: clamp(8px, 1vw, 10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  color: rgba(255, 255, 255, 0.5);
  font-size: 0.72rem;
  text-align: center;
`;

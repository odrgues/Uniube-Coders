import styled from "styled-components";

export const FooterWrapper = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: clamp(14px, 2vw, 20px) 0 clamp(8px, 1vw, 10px);
  background: ${({ theme }) => theme.colors.brand.banner};
  color: ${({ theme }) => theme.colors.text.inverse};
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr));
  gap: clamp(10px, 1.4vw, 16px);

  @media ${({ theme }) => theme.media.down.md} {
    justify-items: center;
    text-align: center;
    gap: 12px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(4px, 0.6vw, 6px);

  @media ${({ theme }) => theme.media.down.md} {
    align-items: center;
  }

  h4 {
    margin: 0;
    color: rgba(255, 255, 255, 0.85);
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 12px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    letter-spacing: -0.01em;
  }

  p {
    margin: 0;
    max-width: 24ch;
    color: rgba(255, 255, 255, 0.6);
    font-size: 11px;
    line-height: 1.5;
  }

  a {
    color: rgba(255, 255, 255, 0.6);
    font-size: 11px;
    transition:
      color ${({ theme }) => theme.transitions.fast},
      transform ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.brand.secondary};
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 4px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 11px;

    @media ${({ theme }) => theme.media.down.md} {
      justify-content: center;
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
  gap: 6px;
  margin-top: 4px;

  @media ${({ theme }) => theme.media.down.md} {
    justify-content: center;
  }

  a {
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    border-radius: 9999px;

    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.7);

    transition:
      background ${({ theme }) => theme.transitions.fast},
      color ${({ theme }) => theme.transitions.fast},
      transform ${({ theme }) => theme.transitions.fast};

    &:hover {
      background: rgba(6, 182, 212, 0.12);
      color: ${({ theme }) => theme.colors.brand.highlight};
      transform: translateY(-1px);
    }
  }
`;

export const Bottom = styled.div`
  margin-top: clamp(10px, 1.5vw, 14px);
  padding-top: clamp(6px, 0.8vw, 8px);
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  color: rgba(255, 255, 255, 0.45);
  font-size: 10px;
  text-align: center;
`;

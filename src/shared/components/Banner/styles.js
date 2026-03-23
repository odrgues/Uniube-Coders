import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-48px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Background = styled.section`
  width: 100%;
  min-height: 82vh;
  padding-top: ${({ theme }) => theme.layout.navbar.height};
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  isolation: isolate;
  background: ${({ theme }) => theme.colors.background.heroOverlay};

  & > div:first-child {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 72vh;
  }
`;

export const Content = styled.div`
  width: ${({ theme }) => theme.layout.container.width};
  padding: ${({ theme }) => theme.spacing.section}
    ${({ theme }) => theme.spacing.container};
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
`;

export const Title = styled.h1`
  max-width: 12ch;
  font-size: ${({ theme }) => theme.fontSizes.hero};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  color: ${({ theme }) => theme.colors.text.inverse};
  opacity: 0;
  animation: ${slideInLeft} 0.95s cubic-bezier(0.25, 1, 0.5, 1) forwards;

  span {
    color: ${({ theme }) => theme.colors.brand.secondary};
    text-shadow: ${({ theme }) => theme.shadows.glow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const Subtitle = styled.p`
  max-width: 62ch;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: rgba(255, 255, 255, 0.88);
  opacity: 0;
  animation: ${slideInLeft} 0.95s cubic-bezier(0.2, 0.5, 0.5, 1) forwards;
  animation-delay: 0.2s;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

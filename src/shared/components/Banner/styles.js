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
  min-height: clamp(72vh, 82vh, 82vh);
  padding-top: ${({ theme }) => theme.layout.navbar.height};
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    top: clamp(-60px, -4vw, -24px);
    right: clamp(-60px, -4vw, -24px);
    width: clamp(180px, 18vw, 260px);
    height: clamp(180px, 18vw, 260px);
    border-radius: 50%;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    left: clamp(-80px, -5vw, -32px);
    bottom: clamp(-80px, -5vw, -32px);
    width: clamp(200px, 20vw, 280px);
    height: clamp(200px, 20vw, 280px);
    border-radius: 50%;
    z-index: 0;
  }
`;

export const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  width: 100%;
  height: 100%;

  > * {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  width: ${({ theme }) => theme.layout.container.width};
  padding: ${({ theme }) => theme.spacing.xxs}
    ${({ theme }) => theme.spacing.container};
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  align-items: flex-start;
`;

export const Title = styled.h1`
  width: min(90%, 12.5ch);
  font-size: ${({ theme }) => theme.fontSizes.hero};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.surface};
  opacity: 0;
  animation: ${slideInLeft} 0.95s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  animation-delay: 0.08s;

  span {
    color: ${({ theme }) => theme.colors.brand.secondary};
  }
`;

export const Subtitle = styled.p`
  width: min(100%, 62ch);
  margin-top: -30px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  background: ${({ theme }) => theme.colors.background.surface};
  opacity: 0;
  animation: ${slideInLeft} 0.95s cubic-bezier(0.2, 0.5, 0.5, 1) forwards;
  animation-delay: 0.2s;
`;

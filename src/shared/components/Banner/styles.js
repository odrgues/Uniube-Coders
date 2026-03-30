import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const blinkCursor = keyframes`
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
`;

export const Background = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.brand.banner};
  min-height: clamp(500px, 70vh, 760px);
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
    width: clamp(160px, 16vw, 220px);
    height: clamp(160px, 16vw, 220px);
    border-radius: 50%;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    left: clamp(-70px, -4vw, -28px);
    bottom: clamp(-70px, -4vw, -28px);
    width: clamp(180px, 18vw, 240px);
    height: clamp(180px, 18vw, 240px);
    border-radius: 50%;
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    min-height: clamp(480px, 64vh, 680px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: clamp(460px, 60vh, 620px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: clamp(440px, 58vh, 560px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: clamp(420px, 54vh, 520px);
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
  padding: clamp(8px, 1vw, 12px) ${({ theme }) => theme.spacing.container};
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(8px, 1vw, 12px);

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xxs} clamp(14px, 5vw, 22px);
  }
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 11.5ch;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.hero};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  color: ${({ theme }) => theme.colors.text.hero};
  background: ${({ theme }) => theme.colors.brand.banner};
  opacity: 0;
  animation: ${slideInLeft} 0.45s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  animation-delay: 0.08s;
  text-wrap: balance;

  span {
    color: ${({ theme }) => theme.colors.text.muted};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 11ch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 10.5ch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 10ch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 9.5ch;
  }
`;

export const TypedWrap = styled.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`;

export const TypedText = styled.span`
  display: inline-block;
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 0.08em;
  height: 0.9em;
  margin-left: 0.08em;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.text.muted};
  vertical-align: middle;
  animation: ${blinkCursor} 1s step-end infinite;
`;

export const Subtitle = styled.p`
  width: 100%;
  max-width: 56ch;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.heroSubtle};
  background: ${({ theme }) => theme.colors.brand.banner};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  opacity: 0;
  animation: ${slideInLeft} 0.75s cubic-bezier(0.2, 0.5, 0.5, 1) forwards;
  animation-delay: 0.2s;
  text-wrap: pretty;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 52ch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 48ch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 42ch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 34ch;
  }
`;

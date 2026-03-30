import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  position: relative;
  padding: clamp(64px, 7vw, 112px) 0;
  overflow-x: hidden;
  overflow-y: visible;
  background: ${({ theme, $light }) =>
    $light ? theme.colors.brand.banner : theme.colors.background.main};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: clamp(56px, 6vw, 88px) 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: clamp(48px, 5.5vw, 76px) 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: clamp(42px, 6vw, 64px) 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: clamp(36px, 8vw, 56px) 0;
  }
`;

export const WaveDividerBottom = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  line-height: 0;
  z-index: 2;
  pointer-events: none;
  transform: rotate(180deg);

  svg {
    display: block;
    width: 100%;
    height: clamp(40px, 5vw, 72px);
  }

  path {
    fill: ${({ theme }) => theme.colors.background.main};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    svg {
      height: clamp(32px, 7vw, 56px);
    }
  }
`;

export const SectionBody = styled.div`
  position: relative;
  z-index: 2;
`;

export const ContentBlock = styled.div`
  max-width: 620px;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: end;
  align-self: center;

  img {
    width: clamp(132px, 14vw, 210px);
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 12px 30px rgba(9, 63, 180, 0.28));
    transition:
      transform 0.3s ease,
      filter 0.3s ease;
  }

  &:hover img {
    transform: scale(1.04);
    filter: drop-shadow(0 18px 40px rgba(9, 63, 180, 0.38));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    img {
      width: clamp(118px, 13vw, 172px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    img {
      width: clamp(106px, 12vw, 150px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const IntroWrapper = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: clamp(20px, 2.6vw, 36px);
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: clamp(18px, 2.2vw, 28px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: auto minmax(0, 1fr);
    align-items: start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 12px;
  }
`;

export const GraphicLine = styled.div`
  position: relative;
  width: 3px;
  min-width: 3px;
  height: clamp(112px, 12vw, 220px);
  margin-top: clamp(8px, 1vw, 14px);
  border-radius: 999px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.brand.primary},
    ${({ theme }) => theme.palette.purple.deep}
  );

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.brand.eyebrow};
    box-shadow: 0 0 0 6px rgba(250, 204, 21, 0.14);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: clamp(94px, 11vw, 170px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: clamp(78px, 14vw, 108px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 2px;
    min-width: 2px;
    height: 72px;
    margin-top: 6px;

    &::before {
      width: 10px;
      height: 10px;
      top: -7px;
    }
  }
`;

export const SectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 0 clamp(14px, 2vw, 18px);
  padding: clamp(0.42rem, 0.8vw, 0.5rem) clamp(0.9rem, 1.6vw, 1rem);
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.brand.eyebrow};
  color: ${({ theme }) => theme.colors.text.eyebrow};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1;
  box-shadow: 0 10px 24px rgba(250, 204, 21, 0.16);
`;

export const SectionTitle = styled.h2`
  width: min(100%, 16ch);
  margin: 0 0 clamp(18px, 2.4vw, 24px);
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: 1.02;
  letter-spacing: -0.035em;
  color: ${({ theme }) => theme.colors.text.titleSection};
  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: min(100%, 17ch);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: min(100%, 18ch);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const SectionDescription = styled.p`
  width: min(100%, 62ch);
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 56ch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    max-width: 36ch;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(16px, 2vw, 24px);
  margin-top: clamp(24px, 4vw, 36px);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    & > article:nth-child(2) {
      transform: translateY(14px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: clamp(14px, 1.8vw, 20px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;

    & > article:nth-child(2) {
      transform: none;
    }
  }
`;

export const HighlightCard = styled.article`
  position: relative;
  padding: clamp(22px, 3vw, 30px);
  border-radius: clamp(18px, 2vw, 24px);
  background: ${({ theme }) => theme.colors.card.background};
  border: 1px solid ${({ theme }) => theme.colors.card.border};
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.07);
  backdrop-filter: blur(10px);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: clamp(22px, 3vw, 30px);
    width: clamp(40px, 8vw, 56px);
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.brand.primary},
      ${({ theme }) => theme.colors.brand.highlight}
    );
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 22px 46px rgba(15, 23, 42, 0.12);
    border-color: rgba(9, 63, 180, 0.14);
  }

  .icon {
    width: 46px;
    height: 46px;
    margin: 12px 0 14px;
    border-radius: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.card.highlight};
    color: ${({ theme }) => theme.colors.brand.primary};
    transition:
      transform 0.3s ease,
      background 0.3s ease;
  }

  &:hover .icon {
    transform: scale(1.06);
    background: rgba(9, 63, 180, 0.12);
  }

  h3 {
    margin: 0 0 10px;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.22;
    color: ${({ theme }) => theme.colors.text.cardTitle};
    text-wrap: balance;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.75;
  }
`;

export const ImageBlock = styled.div`
  top: -40px;
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: clamp(28px, 3vw, 40px);
  aspect-ratio: 16 / 9;
  min-height: clamp(320px, 42vw, 560px);
  box-shadow: 0 28px 64px rgba(15, 23, 42, 0.14);
  isolation: isolate;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transform: scale(1);
    transition: transform 0.8s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    min-height: clamp(300px, 38vw, 480px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: clamp(280px, 54vw, 420px);
    aspect-ratio: 16 / 10;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: clamp(240px, 62vw, 340px);
    border-radius: clamp(22px, 5vw, 28px);
    aspect-ratio: 4 / 3;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: auto 0 0 0;
  z-index: 1;
  padding: clamp(22px, 3vw, 34px);
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.78) 0%,
    rgba(0, 0, 0, 0.36) 42%,
    rgba(0, 0, 0, 0) 100%
  );

  h3 {
    margin: 0 0 8px;
    color: ${({ theme }) => theme.colors.text.inverse};
    font-size: clamp(1.5rem, 2.4vw, 2.15rem);
    line-height: 1.05;
    letter-spacing: -0.025em;
    text-wrap: balance;
  }

  p {
    margin: 0;
    max-width: 44ch;
    color: rgba(255, 255, 255, 0.88);
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.65;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: clamp(18px, 5vw, 24px);

    p {
      max-width: 32ch;
    }
  }
`;

export const CTABox = styled.div`
  position: relative;
  overflow: hidden;
  padding: clamp(30px, 4vw, 52px);
  border-radius: clamp(24px, 3vw, 34px);
  background:
    radial-gradient(
      circle at top right,
      rgba(9, 63, 180, 0.08),
      transparent 22%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(34, 211, 238, 0.08),
      transparent 24%
    ),
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.background.surface} 0%,
      ${({ theme }) => theme.colors.background.muted} 100%
    );
  border: 1px solid ${({ theme }) => theme.colors.card.border};
  box-shadow: 0 20px 54px rgba(15, 23, 42, 0.08);

  display: grid;
  grid-template-columns: minmax(0, 1.3fr) auto;
  align-items: center;
  gap: clamp(24px, 3vw, 36px);

  &::before {
    content: "";
    position: absolute;
    top: -42px;
    right: -42px;
    width: clamp(110px, 16vw, 170px);
    height: clamp(110px, 16vw, 170px);
    border-radius: 50%;
    background: rgba(250, 204, 21, 0.2);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    left: -52px;
    bottom: -52px;
    width: clamp(130px, 18vw, 190px);
    height: clamp(130px, 18vw, 190px);
    border-radius: 50%;
    background: rgba(9, 63, 180, 0.07);
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: clamp(28px, 3.5vw, 42px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    align-items: start;
    gap: 22px;
  }
`;

export const CTATitle = styled.h3`
  width: min(100%, 14ch);
  margin: 0 0 clamp(14px, 2vw, 18px);
  font-size: clamp(2rem, 1.4rem + 2.4vw, 3.2rem);
  line-height: 0.96;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.text.titleCTA};
  text-wrap: balance;

  span {
    color: ${({ theme }) => theme.colors.brand.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const CTADescription = styled.p`
  width: min(100%, 46ch);
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  min-height: clamp(48px, 5vw, 56px);
  padding: 0 clamp(1.25rem, 2vw, 1.6rem);
  border-radius: ${({ theme }) => theme.radius.full};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.brand.primary},
    ${({ theme }) => theme.colors.brand.secondary}
  );
  color: ${({ theme }) => theme.colors.text.inverse};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  white-space: nowrap;
  text-decoration: none;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;
  box-shadow: 0 20px 45px rgba(9, 63, 180, 0.28);
  flex-shrink: 0;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 24px 48px rgba(9, 63, 180, 0.32);
    filter: brightness(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-self: start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

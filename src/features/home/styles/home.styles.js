import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  position: relative;
  padding: clamp(56px, 7vw, 96px) 0;
  background: ${({ theme, $light }) =>
    $light ? theme.colors.brand.primary : theme.colors.bg.page};
  overflow-x: hidden;

  @media ${({ theme }) => theme.media.between.mdLg} {
    padding: clamp(44px, 5.5vw, 72px) 0;
  }

  @media ${({ theme }) => theme.media.down.md} {
    padding: clamp(34px, 6vw, 54px) 0;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: clamp(28px, 7vw, 42px) 0;
  }
`;

export const SectionBody = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  min-width: 0;
`;

export const ContentBlock = styled.div`
  width: 100%;
  min-width: 0;
  max-width: 100%;
`;

export const IntroWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 720px);
  justify-content: start;
  gap: clamp(18px, 2.4vw, 28px);
  align-items: start;

  @media ${({ theme }) => theme.media.between.lgXl} {
    grid-template-columns: minmax(0, 660px);
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    grid-template-columns: minmax(0, 560px);
    gap: 16px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const IntroContent = styled.div`
  display: grid;
  grid-template-columns: 3px minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  min-width: 0;
  width: 100%;
  max-width: 760px;

  @media ${({ theme }) => theme.media.between.lgXl} {
    max-width: 680px;
    gap: 13px;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 100%;
    gap: 12px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    gap: 12px;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    gap: 10px;
  }
`;

export const GraphicLine = styled.div`
  position: relative;
  width: 3px;
  min-width: 3px;
  height: 92px;
  margin-top: 4px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.brand.primary},
    ${({ theme }) => theme.palette.purple[900]}
  );

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.brand.eyebrow};
    box-shadow: 0 0 0 4px rgba(250, 204, 21, 0.12);
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    height: 72px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    height: 60px;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    height: 52px;
  }
`;

export const SectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 0 12px;
  padding: 0.4rem 0.82rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.brand.eyebrow};
  color: ${({ theme }) => theme.colors.text.eyebrow};
  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1;
  box-shadow: 0 8px 18px rgba(250, 204, 21, 0.14);

  @media ${({ theme }) => theme.media.down.sm} {
    font-size: 0.75rem;
    padding: 0.32rem 0.66rem;
    margin-bottom: 8px;
  }
`;

export const SectionTitle = styled.h2`
  width: 100%;
  margin: 0 0 12px;
  max-width: 16ch;
  font-size: clamp(2rem, 1.45rem + 2vw, 3.2rem);
  line-height: 1.02;
  letter-spacing: -0.035em;
  color: ${({ theme }) => theme.colors.text.heading};
  text-wrap: balance;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 24ch;
    font-size: clamp(1.6rem, 1.25rem + 1vw, 2.1rem);
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    font-size: clamp(1.42rem, 1.14rem + 1.1vw, 1.9rem);
    line-height: 1.06;
  }
`;

export const SectionDescription = styled.p`
  width: 100%;
  margin: 0;
  max-width: 78ch;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.68;
  text-align: justify;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 66ch;
    font-size: 0.94rem;
    line-height: 1.6;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    font-size: 0.94rem;
    line-height: 1.6;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    font-size: 0.9rem;
  }
`;

export const ImageBlock = styled.div`
  position: relative;
  overflow: hidden;
  width: min(100%, 860px);
  margin: 0 auto;
  border-radius: clamp(22px, 2.4vw, 30px);
  aspect-ratio: 16 / 9;
  min-height: clamp(220px, 28vw, 360px);
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.12);
  isolation: isolate;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transform: scale(1);
    transition: transform 0.8s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media ${({ theme }) => theme.media.between.lgXl} {
    width: min(100%, 800px);
    min-height: clamp(220px, 26vw, 320px);
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    width: 100%;
    min-height: clamp(220px, 30vw, 280px);
  }

  @media ${({ theme }) => theme.media.down.md} {
    width: 100%;
    min-height: clamp(220px, 46vw, 320px);
    aspect-ratio: 16 / 10;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    min-height: clamp(200px, 56vw, 280px);
    border-radius: 20px;
    aspect-ratio: 4 / 3;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: auto 0 0 0;
  z-index: 1;
  padding: clamp(16px, 2vw, 24px);
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.76) 0%,
    rgba(0, 0, 0, 0.34) 42%,
    rgba(0, 0, 0, 0) 100%
  );

  h3 {
    margin: 0 0 6px;
    color: ${({ theme }) => theme.colors.text.inverse};
    font-size: clamp(1.18rem, 1rem + 1vw, 1.6rem);
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-wrap: balance;
  }

  p {
    margin: 0;
    max-width: 40ch;
    color: rgba(255, 255, 255, 0.86);
    font-size: 0.88rem;
    line-height: 1.5;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    padding: 16px;

    h3 {
      font-size: clamp(1.06rem, 0.96rem + 0.5vw, 1.26rem);
    }

    p {
      max-width: 34ch;
      font-size: 0.82rem;
      line-height: 1.42;
    }
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: 14px;

    h3 {
      font-size: 1rem;
    }

    p {
      max-width: 100%;
      font-size: 0.8rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(14px, 1.8vw, 20px);
  margin-top: clamp(18px, 2.5vw, 26px);

  @media ${({ theme }) => theme.media.between.mdLg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const HighlightCard = styled.article`
  position: relative;
  padding: clamp(18px, 2vw, 22px);
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.surface.base};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 18px;
    width: 42px;
    height: 3px;
    border-radius: ${({ theme }) => theme.radius.full};
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.brand.primary},
      ${({ theme }) => theme.colors.brand.highlight}
    );
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08);
    border-color: rgba(9, 63, 180, 0.14);
  }

  .icon {
    width: 40px;
    height: 40px;
    margin: 10px 0 12px;
    border-radius: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.surface.highlight};
    color: ${({ theme }) => theme.colors.brand.primary};
    transition:
      transform 0.28s ease,
      background 0.28s ease;
  }

  &:hover .icon {
    transform: scale(1.03);
    background: rgba(9, 63, 180, 0.12);
  }

  h3 {
    margin: 0 0 8px;
    font-size: 1rem;
    line-height: 1.24;
    color: ${({ theme }) => theme.colors.text.primary};
    text-wrap: balance;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.92rem;
    line-height: 1.58;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    padding: 16px;
    border-radius: 16px;

    .icon {
      width: 36px;
      height: 36px;
      margin: 8px 0 10px;
    }

    h3 {
      font-size: 0.96rem;
      margin-bottom: 6px;
    }

    p {
      font-size: 0.88rem;
      line-height: 1.5;
    }
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: 16px;

    h3 {
      font-size: 0.95rem;
    }

    p {
      font-size: 0.86rem;
    }
  }
`;

export const WaveDivider = styled.div`
  position: relative;
  width: 100%;
  line-height: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.brand.primary};

  svg {
    display: block;
    width: 100%;
    height: 74px;
  }

  path {
    fill: ${({ theme }) => theme.colors.bg.page};
  }

  @media ${({ theme }) => theme.media.down.sm} {
    svg {
      height: 54px;
    }
  }
`;

export const CTASection = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.bg.page};
  padding: clamp(18px, 3vw, 28px) 0 clamp(42px, 6vw, 72px);
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.colors.bg.page};
    pointer-events: none;
    z-index: 3;
  }
`;

export const CTABox = styled.div`
  position: relative;
  overflow: hidden;
  width: min(100%, 760px);
  margin: 0 auto;
  padding: clamp(24px, 3vw, 30px);
  border-radius: 24px;

  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 18px;

  background:
    radial-gradient(
      circle at top right,
      rgba(147, 51, 234, 0.14),
      transparent 18%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(99, 102, 241, 0.08),
      transparent 20%
    ),
    linear-gradient(135deg, #f7f9ff 0%, #eef2ff 48%, #f1edff 100%);

  @media ${({ theme }) => theme.media.between.mdLg} {
    width: min(100%, 700px);
    padding: 22px 24px;
    gap: 16px;
    border-radius: 22px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    width: 100%;
    padding: 20px 16px;
    grid-template-columns: 1fr;
    align-items: start;
    gap: 14px;
    border-radius: 18px;
  }
`;

export const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 430px;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 690px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
  }
`;

export const CTATitle = styled.h3`
  margin: 0 0 10px;
  max-width: 21ch;
  font-size: clamp(1.55rem, 1.2rem + 1vw, 2.2rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
  color: #111827;
  text-wrap: balance;

  span {
    color: #2563eb;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    font-size: clamp(1.35rem, 1.12rem + 0.6vw, 1.7rem);
    max-width: 27ch;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    font-size: clamp(1.3rem, 1.08rem + 0.9vw, 1.68rem);
    line-height: 1.04;
  }
`;

export const CTADescription = styled.p`
  margin: 0;
  max-width: 52ch;
  font-size: 0.94rem;
  line-height: 1.62;
  color: #475569;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 55ch;
    font-size: 0.88rem;
    line-height: 1.56;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    font-size: 0.9rem;
    line-height: 1.56;
  }
`;

export const CTAButton = styled(Link)`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  justify-self: start;

  min-height: 44px;
  padding: 0 1.2rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #1d4ed8, #2563eb);
  color: #ffffff;
  text-decoration: none;
  font-size: 0.84rem;
  font-weight: 600;
  white-space: nowrap;

  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.2);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 28px rgba(37, 99, 235, 0.24);
    filter: brightness(1.03);
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    min-height: 40px;
    padding: 0 1rem;
    font-size: 0.8rem;
  }

  @media ${({ theme }) => theme.media.down.md} {
    justify-self: start;
    min-height: 40px;
    padding: 0 1rem;
    font-size: 0.8rem;
    margin-top: 2px;
  }
`;

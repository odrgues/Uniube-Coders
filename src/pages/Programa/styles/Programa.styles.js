import styled from "styled-components";
import { Link } from "react-router-dom";

const bp = (theme, key, fallback) => theme?.breakpoints?.[key] || fallback;

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100%;
`;

export const HeroSection = styled.section`
  padding-top: ${({ theme }) => theme.layout?.navbar?.height || "72px"};
  background: ${({ theme }) => theme.colors?.background?.main};
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout?.container?.width || "1200px"};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing?.xl || "4rem"}
    ${({ theme }) => theme.spacing?.md || "1rem"};
  padding-top: ${({ theme }) => theme.spacing?.xl || "4rem"};
  padding-bottom: ${({ theme }) => theme.spacing?.lg || "3rem"};
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts?.heading};
  font-weight: ${({ theme }) => theme.fontWeights?.bold || 700};
  font-size: clamp(2rem, 4vw, 3.5rem);
  color: ${({ theme }) => theme.colors?.text?.primary};

  span {
    color: ${({ theme }) => theme.colors?.brand?.primary};
  }
`;

export const HeroSubtitle = styled.p`
  margin-top: ${({ theme }) => theme.spacing?.sm || "0.75rem"};
  max-width: 70ch;
  font-family: ${({ theme }) => theme.fonts?.body};
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: ${({ theme }) =>
    theme.colors?.text?.secondary || theme.colors?.text?.primary};
`;

export const StorySection = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.layout?.container?.width || "1200px"};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing?.xl || "4rem"}
    ${({ theme }) => theme.spacing?.md || "1rem"};

  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: ${({ theme }) => theme.spacing?.xl || "4rem"};
  align-items: start;

  @media (max-width: ${({ theme }) => bp(theme, "xl", "1280px")}) {
    grid-template-columns: 1fr;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg || "2rem"};
`;

export const SectionLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts?.body};
  font-size: ${({ theme }) => theme.fontSizes?.small || "0.9rem"};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) =>
    theme.colors?.brand?.highlight || theme.colors?.brand?.primary};
  margin: 0;
`;

export const SectionHeading = styled.h2`
  margin: ${({ theme }) => theme.spacing?.xs || "0.5rem"} 0 0;
  font-family: ${({ theme }) => theme.fonts?.heading};
  font-weight: ${({ theme }) => theme.fontWeights?.bold || 700};
  font-size: clamp(1.5rem, 2.6vw, 2.25rem);
  color: ${({ theme }) => theme.colors?.text?.primary};
`;

export const StoryText = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing?.sm || "0.75rem"};

  p {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts?.body};
    font-size: ${({ theme }) => theme.fontSizes?.body || "1rem"};
    line-height: 1.7;
    color: ${({ theme }) =>
      theme.colors?.text?.secondary || theme.colors?.text?.primary};
  }
`;

export const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing?.md || "1rem"};

  @media (max-width: ${({ theme }) => bp(theme, "xl", "1280px")}) {
    grid-template-columns: 1fr;
  }
`;

export const HighlightCard = styled.article`
  background: ${({ theme }) =>
    theme.colors?.background?.muted || theme.colors?.background?.main};
  border: 1px solid
    ${({ theme }) => theme.colors?.border || "rgba(255,255,255,0.08)"};
  border-radius: ${({ theme }) => theme.radius?.lg || "20px"};
  padding: ${({ theme }) => theme.spacing?.md || "1rem"};
  box-shadow: ${({ theme }) => theme.shadows?.sm || "none"};

  display: grid;
  gap: ${({ theme }) => theme.spacing?.xs || "0.5rem"};

  .icon {
    font-size: 1.5rem;
    line-height: 1;
  }

  h3 {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts?.heading};
    font-weight: ${({ theme }) => theme.fontWeights?.bold || 700};
    font-size: ${({ theme }) => theme.fontSizes?.nav || "1.1rem"};
    color: ${({ theme }) => theme.colors?.text?.primary};
  }

  p {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts?.body};
    font-size: ${({ theme }) => theme.fontSizes?.body || "1rem"};
    line-height: 1.6;
    color: ${({ theme }) =>
      theme.colors?.text?.secondary || theme.colors?.text?.primary};
  }
`;

export const ImageColumn = styled.div`
  position: relative;
  width: 100%;
`;

export const ImageFrame = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius?.lg || "20px"};
  overflow: hidden;
  box-shadow: ${({ theme }) =>
    theme.shadows?.lg || theme.shadows?.md || "none"};
`;

export const MainImage = styled.img`
  width: 100%;
  height: clamp(280px, 45vh, 560px);
  object-fit: cover;
  display: block;
`;

export const DecorativeBox = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.35));
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export const AccentLine = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 6px;
  width: 45%;
  background: ${({ theme }) => theme.colors?.brand?.primary};
  border-top-right-radius: ${({ theme }) => theme.radius?.pill || "999px"};

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export const CTASection = styled.section`
  background: ${({ theme }) => theme.colors?.background?.main};
  padding: ${({ theme }) => theme.spacing?.xl || "4rem"}
    ${({ theme }) => theme.spacing?.md || "1rem"};
`;

export const CTAContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout?.container?.width || "1200px"};
  margin: 0 auto;

  border-radius: ${({ theme }) => theme.radius?.lg || "20px"};
  background: ${({ theme }) =>
    theme.colors?.background?.muted || "rgba(255,255,255,0.04)"};
  border: 1px solid
    ${({ theme }) => theme.colors?.border || "rgba(255,255,255,0.08)"};
  padding: ${({ theme }) => theme.spacing?.lg || "2rem"};

  display: grid;
  gap: ${({ theme }) => theme.spacing?.sm || "0.75rem"};

  h2 {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts?.heading};
    font-size: clamp(1.25rem, 2.2vw, 2rem);
    color: ${({ theme }) => theme.colors?.text?.primary};
  }

  p {
    margin: 0;
    max-width: 70ch;
    font-family: ${({ theme }) => theme.fonts?.body};
    font-size: ${({ theme }) => theme.fontSizes?.body || "1rem"};
    line-height: 1.6;
    color: ${({ theme }) =>
      theme.colors?.text?.secondary || theme.colors?.text?.primary};
  }
`;

export const CTAButton = styled(Link)`
  width: fit-content;
  margin-top: ${({ theme }) => theme.spacing?.sm || "0.75rem"};
  text-decoration: none;

  padding: ${({ theme }) => theme.spacing?.sm || "0.75rem"}
    ${({ theme }) => theme.spacing?.md || "1rem"};
  border-radius: ${({ theme }) => theme.radius?.pill || "999px"};
  background: ${({ theme }) => theme.colors?.brand?.primary};
  color: ${({ theme }) => theme.colors?.text?.inverse || "#fff"};

  font-family: ${({ theme }) => theme.fonts?.heading};
  font-weight: ${({ theme }) => theme.fontWeights?.bold || 700};

  transition:
    transform ${({ theme }) => theme.transitions?.fast || "150ms ease"},
    opacity ${({ theme }) => theme.transitions?.fast || "150ms ease"};

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }

  &:focus-visible {
    outline: 3px solid
      ${({ theme }) => theme.colors?.brand?.highlight || "#fff"};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

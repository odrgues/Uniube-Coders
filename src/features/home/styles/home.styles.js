import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.container} 0;
  background: #bbdefb;
  // background: ${({ $light }) => ($light ? "#f8fafc" : "#ffffff")};
`;

export const SectionEyebrow = styled.span`
  margin-top: 15px;
  display: inline-block;
  margin-bottom: clamp(2px, 3vw, 1px);
  padding: clamp(0.4rem, 0.8vw, 0.45rem) clamp(0.8rem, 1.6vw, 0.9rem);
  border-radius: ${({ theme }) => theme.radius.full};
  background: #ffe08f; // mudar cor aqui
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const SectionTitle = styled.h2`
  margin-top: 5px;

  width: min(100%, 30ch);
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  margin-bottom: clamp(20px, 2vw, 30px);
  color: #240046;
  //color: ${({ theme }) => theme.colors.text.primary};
`;

export const SectionDescription = styled.p`
  width: min(100%, 64ch);
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin-bottom: clamp(20px, 3vw, 32px);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: clamp(16px, 2vw, 24px);
`;

export const HighlightCard = styled.article`
  padding: clamp(20px, 3vw, 28px);
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);

  transition: 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  h3 {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;
export const ImageBlock = styled.div`
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  min-height: clamp(280px, 40vw, 480px);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: clamp(20px, 3vw, 32px);
  width: 100%;

  background: linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0));

  h3 {
    color: white;
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    margin-bottom: 6px;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const CTABox = styled.div`
  padding: clamp(24px, 4vw, 40px);
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);

  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
`;

export const CTATitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CTADescription = styled.p`
  width: min(100%, 54ch);
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: clamp(46px, 5vw, 52px);
  padding: 0 clamp(1.1rem, 2vw, 1.4rem);
  border-radius: ${({ theme }) => theme.radius.full};
  background: linear-gradient(135deg, #1e3a8a, #2563eb); // mudar cor aqui
  color: ${({ theme }) => theme.colors.text.inverse};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  white-space: nowrap;
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  flex-shrink: 0;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.md};
    filter: brightness(1.05);
  }
`;

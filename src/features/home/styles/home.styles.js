import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.container} 0;
  background: #dcd6f7; //mudar cor aqui
`;

export const SectionEyebrow = styled.span`
  display: inline-block;
  margin-bottom: clamp(20px, 3vw, 32px);
  padding: clamp(0.4rem, 0.8vw, 0.45rem) clamp(0.8rem, 1.6vw, 0.9rem);
  border-radius: ${({ theme }) => theme.radius.full};
  background: #ffe08f; // mudar cor aqui
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const SectionTitle = styled.h2`
  width: min(100%, 30ch);
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  margin-bottom: clamp(20px, 3vw, 32px);
  color: #bf1a1a; //mudar cor aqui
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
  padding: clamp(20px, 3vw, 32px);
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.card.background};
  border: 1px solid ${({ theme }) => theme.colors.card.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  backdrop-filter: blur(14px);
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.lineHeights.tight};
    color: ${({ theme }) => theme.palette.blue.deep};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;

export const PillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(10px, 1.4vw, 16px);
`;

export const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: clamp(0.7rem, 1vw, 0.85rem) clamp(0.95rem, 1.4vw, 1.15rem);
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.card.background};
  color: ${({ theme }) => theme.colors.brand.primary};
  border: 1px solid rgba(37, 99, 235, 0.12);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: center;
`;

export const CTABox = styled.div`
  position: relative;
  overflow: hidden;
  padding: clamp(24px, 4vw, 40px);
  border-radius: ${({ theme }) => theme.radius.lg};
  //background: ${({ theme }) => theme.colors.card.background}; //mudar cor aqui
  background: #ffff;
  border: 1px solid rgba(6, 182, 212, 0.14);
  box-shadow: ${({ theme }) => theme.shadows.md};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(16px, 2vw, 24px);
  flex-wrap: wrap;

  &::before {
    content: "";
    position: absolute;
    top: -40px;
    right: -40px;
    width: clamp(120px, 18vw, 180px);
    height: clamp(120px, 18vw, 180px);
    border-radius: 50%;
    //background: ${({ theme }) => theme.palette.cyan.soft}; //mudar cor aqui
    filter: blur(40px);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -50px;
    left: -30px;
    width: clamp(120px, 16vw, 160px);
    height: clamp(120px, 16vw, 160px);
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.blue.glow};
    filter: blur(42px);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1vw, 12px);
  flex: 1 1 420px;
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

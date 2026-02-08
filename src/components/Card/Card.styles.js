import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

export const SectionWrapper = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.palette.blue.dark};
`;

export const Section = styled.div`
  width: min(80%, 1200px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(30px, 8vw, 90px);

  justify-content: center;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    width: 70%;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main};
  border-radius: ${({ theme }) => theme.radius.md};

  padding: clamp(1.5rem, 3vw, 2.5rem);
  width: 100%;

  min-height: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  border: 1px solid transparent;
  cursor: pointer;
  text-align: center;

  will-change: transform;

  animation: ${fadeInUp} 0.8s ease-out backwards;

  transition:
    transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.4s ease,
    border-color 0.3s ease;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.5s;
  }
  &:nth-child(4) {
    animation-delay: 0.7s;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);

    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);

    border-color: ${({ theme }) => theme.colors.background.main || "#fff"};
  }
`;

export const CardIcon = styled.div`
  width: 60px;
  height: 60px;

  align-self: center;
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.colors.brand.accent};
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.palette.red};
  margin: 0;
  text-align: center;

  font-size: clamp(1.1rem, 2.5vw, 1.5rem);

  line-height: 1.2;
`;

export const CardText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  font-size: clamp(0.9rem, 1.5vw, 1rem);

  line-height: 1.6;
  max-width: 90%;
`;

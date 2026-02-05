import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    margin-top: 30px; 
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;
export const SectionWrapper = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.brand.primary};
`;

export const Section = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90%;
  }
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
`;

export const Card = styled.div`
  //background: ${({ theme }) => theme.colors.brand.action};
  background-color: white;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  width: 80%;
  margin: 0 auto;
  min-height: 420px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  border: 1px solid transparent;
  cursor: pointer;

  transition:
    transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    border-color 0.3s ease;

  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out forwards;

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
    transform: translateY(-12px);
    border-color: ${({ theme }) => theme.colors.brand.action};
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const CardIcon = styled.div`
  width: 80px;
  height: 80px;
  align-self: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 50px;
    height: 50px;

    color: ${({ theme }) => theme.colors.brand.action};
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  align-self: center;
  font-size: clamp(1.25rem, 2vw + 1rem, 1.5rem);
  margin: 0;
  text-align: center;
`;

export const CardText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  font-size: clamp(0.875rem, 1vw + 0.5rem, 1.25rem);
  margin: 0;
`;

import styled, { keyframes, css } from "styled-components";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const animateIn = css`
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out forwards;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} 0;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
    align-items: center;
  }
`;

export const TextContent = styled.div`
  margin-top: clamp(2rem, 5vw, 8rem);
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: 0 1rem;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.1;
  margin: 0;
  text-align: center;

  ${animateIn}
  animation-delay: 0.1s;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  //   text-aling: center;

  ${animateIn}
  animation-delay: 0.3s;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
  padding: 2rem 1rem 0 1rem;

  margin-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.pallet?.gray?.[200] || "#eee"};
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 3rem;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${animateIn}
`;

export const StatNumber = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 800;

  font-size: clamp(2rem, 6vw, 4.5rem);
  line-height: 1;
  color: ${({ theme }) => theme.colors.brand.action};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const StatLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

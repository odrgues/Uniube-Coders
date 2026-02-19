import styled, { keyframes, css } from "styled-components";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const animateIn = css`
  opacity: 0;
  animation: ${fadeInUp} ${({ theme }) => theme.transitions.slow} forwards;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};

  /* Sem background aqui pra não “brigar” com as sections da Home */
`;

export const TextContent = styled.div`
  max-width: 70ch;
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};

  /* Centraliza só em telas maiores */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-inline: auto;
    text-align: center;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  color: ${({ theme }) => theme.colors.text.primary};

  ${animateIn}
`;

export const Description = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.text.secondary};

  /* melhor leitura no mobile */
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
  }

  ${animateIn}
  animation-delay: 80ms;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const StatItem = styled.div`
  background: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => theme.spacing.lg};

  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  text-align: center;

  ${animateIn}
`;

export const StatNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: clamp(1.75rem, 4vw, 3rem);
  line-height: 1;
  color: ${({ theme }) => theme.colors.brand.accent};
`;

export const StatLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.text.muted};
`;

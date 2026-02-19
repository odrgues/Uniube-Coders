import styled from "styled-components";
import { Link } from "react-router-dom";

export const SkipLink = styled.a`
  position: absolute;
  left: ${({ theme }) => theme.spacing.container};
  top: ${({ theme }) => theme.spacing.sm};
  transform: translateY(-140%);
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  border-radius: ${({ theme }) => theme.radius.sm};
  z-index: ${({ theme }) => theme.zIndex.toast};

  &:focus-visible {
    transform: translateY(0);
    outline: 3px solid ${({ theme }) => theme.colors.brand.highlight};
    outline-offset: 3px;
  }
`;

export const Page = styled.main`
  width: 100%;
`;

export const Section = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.container.width};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.section}
    ${({ theme }) => theme.spacing.container};
`;

export const SectionHeader = styled.header`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  h2 {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    line-height: ${({ theme }) => theme.lineHeights.tight};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    margin: 0;
    max-width: 70ch;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const CTASection = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.section}
    ${({ theme }) => theme.spacing.container};
  background: ${({ theme }) => theme.colors.background.main};
`;

export const CTAContent = styled.div`
  max-width: ${({ theme }) => theme.layout.container.width};
  margin: 0 auto;

  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  padding: ${({ theme }) => theme.spacing.xl};
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};

  h2 {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: ${({ theme }) => theme.lineHeights.tight};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    margin: 0;
    max-width: 70ch;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const CTAButton = styled(Link)`
  width: fit-content;
  margin-top: ${({ theme }) => theme.spacing.sm};
  text-decoration: none;

  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};

  background: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.text.inverse};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  transition:
    transform ${({ theme }) => theme.transitions.fast},
    opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.brand.highlight};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

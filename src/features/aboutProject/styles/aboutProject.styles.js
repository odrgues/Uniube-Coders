import styled, { css } from "styled-components";

export const IntroSection = styled.section`
  padding: calc(${({ theme }) => theme.layout.navbar.height} + 56px) 0
    clamp(28px, 4vw, 48px);
  background: #0d7c66;
`;

export const SectionEyebrow = styled.span`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding: 0.45rem 0.9rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(124, 58, 237, 0.08);
  color: ${({ theme }) => theme.colors.brand.tertiary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const SectionTitle = styled.h1`
  max-width: 18ch;
  margin: 0 auto;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: 1.08;
  color: ${({ theme }) => theme.colors.text.primary};
  background: pink;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const ContentBlock = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(20px, 4vw, 56px);
  align-items: center;
  padding: clamp(24px, 4vw, 48px) 0;

  ${({ $reverse }) =>
    $reverse &&
    css`
      ${BlockContentPlaceholder} {
        order: 2;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 28px 0;
  }
`;

const blockBase = css`
  width: 100%;
`;

export const BlockContent = styled.div`
  ${blockBase};
`;

const BlockContentPlaceholder = BlockContent;

export const BlockTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const BlockText = styled.p`
  max-width: 58ch;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const BlockImage = styled.div`
  ${blockBase};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  min-height: clamp(240px, 30vw, 420px);
  background: rgba(37, 99, 235, 0.08);

  img {
    width: 100%;
    height: 100%;
    min-height: clamp(240px, 30vw, 420px);
    object-fit: cover;
    display: block;
  }
`;

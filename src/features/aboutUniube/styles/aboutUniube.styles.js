import styled from "styled-components";

export const HeroSection = styled.section`
  padding: calc(${({ theme }) => theme.layout.navbar.height} + 56px) 0
    ${({ theme }) => theme.spacing.section};
`;

export const SectionEyebrow = styled.span`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding: 0.45rem 0.9rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(34, 211, 238, 0.1);
  color: ${({ theme }) => theme.colors.brand.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const SectionTitle = styled.h1`
  max-width: 18ch;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: 1.08;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

export const IntroText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.9;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: justify;

  & + & {
    margin-top: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
    line-height: 1.8;

    & + & {
      margin-top: 1.25rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  max-width: 900px;
  margin: clamp(28px, 4vw, 44px) auto 0;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  background: rgba(34, 211, 238, 0.08);

  img {
    width: 100%;
    height: clamp(260px, 40vw, 460px);
    object-fit: cover;
    display: block;
  }
`;

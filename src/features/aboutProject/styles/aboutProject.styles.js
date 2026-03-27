import styled from "styled-components";

export const IntroSection = styled.section`
  padding: calc(${({ theme }) => theme.layout?.navbar?.height || "88px"} + 48px)
    0 clamp(40px, 6vw, 72px);
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionEyebrow = styled.span`
  display: inline-block;
  color: #2563eb;
  font-size: ${({ theme }) => theme.fontSizes?.sm || "0.875rem"};
  font-weight: ${({ theme }) => theme.fontWeights?.semibold || 600};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h1`
  width: min(100%, 16ch);
  margin: 0;
  font-size: clamp(2rem, 4.6vw, 4rem);
  line-height: 1.04;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || "768px"}) {
    width: 100%;
    font-size: clamp(1.8rem, 8vw, 2.8rem);
  }
`;

export const IntroLead = styled.p`
  width: min(100%, 72ch);
  margin: 0;
  font-size: clamp(1rem, 1.6vw, 1.08rem);
  line-height: 1.95;
  color: ${({ theme }) => theme.colors?.text?.secondary || "#475569"};
`;

export const HeroImage = styled.div`
  overflow: hidden;
  border-radius: 22px;
  background: #f8fafc;
  min-height: clamp(280px, 42vw, 520px);

  img {
    width: 100%;
    height: 100%;
    min-height: clamp(280px, 42vw, 520px);
    object-fit: cover;
    display: block;
  }
`;

export const OverviewGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 4vw, 42px);
  padding: 0 0 clamp(44px, 6vw, 72px);

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || "768px"}) {
    grid-template-columns: 1fr;
  }
`;

export const OverviewCard = styled.article`
  padding-top: 14px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);

  ${SectionTitle} {
    width: 100%;
    font-size: clamp(1.5rem, 3vw, 2.3rem);
    margin-bottom: 14px;
    letter-spacing: -0.03em;
  }
`;

export const SectionText = styled.p`
  width: min(100%, 64ch);
  margin: 0;
  font-size: clamp(1rem, 1.45vw, 1.03rem);
  line-height: 1.92;
  color: ${({ theme }) => theme.colors?.text?.secondary || "#475569"};
`;

export const StatementSection = styled.section`
  margin: 0 0 clamp(40px, 6vw, 72px);
  padding: clamp(36px, 5vw, 56px) 0;
  background: #f8fafc;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
`;

export const StatementText = styled.p`
  width: min(100%, 36ch);
  margin: 12px 0 0;
  font-size: clamp(1.5rem, 3vw, 2.4rem);
  line-height: 1.18;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};
`;

export const GalleryHeader = styled.div`
  padding: 0 0 32px;

  ${SectionTitle} {
    width: 100%;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    margin: 12px 0 14px;
    letter-spacing: -0.03em;
  }
`;

export const FinalBlock = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 460px);
  gap: clamp(28px, 5vw, 56px);
  align-items: start;
  padding: clamp(32px, 6vw, 64px) 0 clamp(48px, 7vw, 80px);

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || "768px"}) {
    grid-template-columns: 1fr;
  }
`;

export const FinalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  ${SectionTitle} {
    width: min(100%, 15ch);
    font-size: clamp(1.8rem, 3.5vw, 3rem);
    letter-spacing: -0.03em;
  }
`;

export const FinalImage = styled.div`
  overflow: hidden;
  border-radius: 18px;
  background: #f8fafc;
  min-height: clamp(260px, 34vw, 400px);

  img {
    width: 100%;
    height: 100%;
    min-height: clamp(260px, 34vw, 400px);
    object-fit: cover;
    display: block;
  }
`;

export const ClosingSection = styled.section`
  padding: 0 0 clamp(56px, 8vw, 88px);
`;

export const ClosingText = styled.p`
  width: min(100%, 70ch);
  margin: 0;
  padding-top: 28px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  font-size: clamp(1rem, 1.5vw, 1.04rem);
  line-height: 1.92;
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};
`;

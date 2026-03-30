import styled from "styled-components";

export const IntroSection = styled.section`
  padding: calc(${({ theme }) => theme.layout?.navbar?.height || "88px"} + 48px)
    0 clamp(56px, 7vw, 88px);
`;

export const ContentSection = styled.section`
  padding: 0 0 clamp(56px, 7vw, 88px);
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const SectionEyebrow = styled.span`
  display: inline-block;
  margin: 0;
  color: ${({ theme }) => theme.colors?.primary || "#2563eb"};
  font-size: ${({ theme }) => theme.fontSizes?.sm || "0.875rem"};
  font-weight: ${({ theme }) => theme.fontWeights?.semibold || 600};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h1`
  width: min(100%, 15ch);
  margin: 0;
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};
  font-size: clamp(2.2rem, 4.3vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.04em;

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || "768px"}) {
    width: 100%;
    font-size: clamp(1.95rem, 8vw, 2.9rem);
    line-height: 1.08;
  }
`;

export const IntroLead = styled.p`
  width: min(100%, 74ch);
  margin: 0;
  color: ${({ theme }) => theme.colors?.text?.secondary || "#475569"};
  font-size: clamp(1rem, 1.45vw, 1.08rem);
  line-height: 1.9;
`;

export const HeroImage = styled.div`
  overflow: hidden;
  border-radius: 24px;
  background: #f8fafc;
  min-height: clamp(280px, 42vw, 520px);
  margin-top: 8px;

  img {
    width: 100%;
    height: 100%;
    min-height: clamp(280px, 42vw, 520px);
    object-fit: cover;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || "768px"}) {
    border-radius: 20px;
    min-height: clamp(240px, 62vw, 360px);

    img {
      min-height: clamp(240px, 62vw, 360px);
    }
  }
`;

export const OverviewGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(28px, 4vw, 48px);

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || "768px"}) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const OverviewCard = styled.article`
  padding-top: 22px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);

  ${SectionEyebrow} {
    margin-bottom: 10px;
  }

  ${SectionTitle} {
    width: 100%;
    margin-bottom: 14px;
    font-size: clamp(1.55rem, 2.7vw, 2.2rem);
    line-height: 1.12;
    letter-spacing: -0.03em;
  }
`;

export const SectionText = styled.p`
  width: 100%;
  max-width: 68ch;
  margin: 0;
  color: ${({ theme }) => theme.colors?.text?.secondary || "#475569"};
  font-size: clamp(1rem, 1.35vw, 1.04rem);
  line-height: 1.9;
`;

export const StatementSection = styled.section`
  margin: 0 0 clamp(56px, 7vw, 88px);
  padding: clamp(40px, 5vw, 56px) 0;
  background: #f8fafc;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
`;

export const StatementText = styled.p`
  width: min(100%, 44ch);
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};
  font-size: clamp(1.55rem, 3vw, 2.35rem);
  line-height: 1.2;
  letter-spacing: -0.03em;
`;

export const GalleryHeader = styled.div`
  width: min(100%, 76ch);
  padding-bottom: clamp(28px, 4vw, 36px);

  ${SectionTitle} {
    width: 100%;
    margin: 10px 0 14px;
    font-size: clamp(1.8rem, 3.2vw, 2.7rem);
    line-height: 1.08;
    letter-spacing: -0.03em;
  }
`;

export const FinalBlock = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 420px);
  gap: clamp(28px, 5vw, 56px);
  align-items: start;
  padding-top: clamp(8px, 2vw, 16px);

  @media (max-width: ${({ theme }) => theme.breakpoints?.lg || "1024px"}) {
    grid-template-columns: 1fr;
  }
`;

export const FinalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  ${SectionTitle} {
    width: min(100%, 16ch);
    font-size: clamp(1.8rem, 3.2vw, 2.7rem);
    line-height: 1.08;
    letter-spacing: -0.03em;
  }
`;

export const FinalImage = styled.div`
  overflow: hidden;
  border-radius: 20px;
  background: #f8fafc;
  min-height: clamp(260px, 32vw, 380px);

  img {
    width: 100%;
    height: 100%;
    min-height: clamp(260px, 32vw, 380px);
    object-fit: cover;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || "768px"}) {
    min-height: clamp(240px, 60vw, 340px);

    img {
      min-height: clamp(240px, 60vw, 340px);
    }
  }
`;

export const ClosingSection = styled.section`
  padding: 0 0 clamp(64px, 8vw, 96px);
`;

export const ClosingText = styled.p`
  width: min(100%, 74ch);
  margin: 0;
  padding-top: 28px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};
  font-size: clamp(1rem, 1.35vw, 1.05rem);
  line-height: 1.9;
`;

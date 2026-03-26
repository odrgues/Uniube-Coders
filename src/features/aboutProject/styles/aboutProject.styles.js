import styled, { css } from "styled-components";

export const IntroSection = styled.section`
  padding: calc(${({ theme }) => theme.layout?.navbar?.height || "88px"} + 56px)
    0 clamp(36px, 6vw, 72px);
`;

export const SectionBlock = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 460px);
  gap: clamp(28px, 5vw, 64px);
  align-items: center;
  padding: clamp(28px, 5vw, 64px) 0;

  ${({ $reverse }) =>
    $reverse &&
    css`
      ${SectionContent} {
        order: 2;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || "768px"}) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 32px 0;
  }
`;

export const SectionContent = styled.div`
  width: 100%;
`;

export const SectionEyebrow = styled.span`
  display: inline-block;
  margin-bottom: 14px;
  color: #2563eb;
  font-size: ${({ theme }) => theme.fontSizes?.sm || "0.875rem"};
  font-weight: ${({ theme }) => theme.fontWeights?.semibold || 600};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h1`
  max-width: 18ch;
  margin: 0 0 18px;
  font-size: clamp(2rem, 4.2vw, 3.6rem);
  line-height: 1.06;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || "768px"}) {
    max-width: 100%;
    font-size: clamp(1.75rem, 7vw, 2.6rem);
  }
`;

export const IntroLead = styled.p`
  max-width: 74ch;
  margin: 0;
  font-size: clamp(1rem, 1.6vw, 1.08rem);
  line-height: 1.9;
  color: ${({ theme }) => theme.colors?.text?.secondary || "#475569"};
`;

export const SectionParagraph = styled.p`
  max-width: 66ch;
  margin: 0 0 14px;
  font-size: clamp(1rem, 1.5vw, 1.04rem);
  line-height: 1.9;
  color: ${({ theme }) => theme.colors?.text?.secondary || "#475569"};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionImage = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 18px;
  background: #f8fafc;
  min-height: clamp(260px, 34vw, 420px);

  img {
    width: 100%;
    height: 100%;
    min-height: clamp(260px, 34vw, 420px);
    object-fit: cover;
    display: block;
  }
`;

export const StatementBox = styled.section`
  margin: clamp(20px, 4vw, 40px) 0 clamp(36px, 5vw, 56px);
  padding: clamp(34px, 5vw, 52px) 0;
  background: #f8fafc;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
`;

export const StatementEyebrow = styled.span`
  display: inline-block;
  margin-bottom: 14px;
  color: #2563eb;
  font-size: ${({ theme }) => theme.fontSizes?.sm || "0.875rem"};
  font-weight: ${({ theme }) => theme.fontWeights?.semibold || 600};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const StatementText = styled.p`
  max-width: 34ch;
  margin: 0;
  font-size: clamp(1.45rem, 3vw, 2.2rem);
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};
`;

export const HighlightGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(20px, 3vw, 28px);
  padding: 0 0 clamp(40px, 6vw, 72px);

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || "768px"}) {
    grid-template-columns: 1fr;
  }
`;

export const HighlightCard = styled.article`
  padding: 0 0 0 18px;
  border-left: 2px solid rgba(37, 99, 235, 0.18);
`;

export const HighlightTitle = styled.h3`
  margin: 0 0 10px;
  font-size: clamp(1.05rem, 2vw, 1.18rem);
  line-height: 1.2;
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};
`;

export const HighlightDescription = styled.p`
  margin: 0;
  font-size: clamp(0.98rem, 1.4vw, 1rem);
  line-height: 1.8;
  color: ${({ theme }) => theme.colors?.text?.secondary || "#475569"};
`;

export const ClosingSection = styled.section`
  padding: 0 0 clamp(56px, 8vw, 88px);
`;

export const ClosingText = styled.p`
  max-width: 68ch;
  margin: 0;
  padding-top: 28px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  font-size: clamp(1rem, 1.6vw, 1.06rem);
  line-height: 1.9;
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};
`;

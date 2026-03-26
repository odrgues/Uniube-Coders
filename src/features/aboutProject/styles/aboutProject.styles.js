import styled, { css } from "styled-components";

export const IntroSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: calc(${({ theme }) => theme.layout?.navbar?.height || "88px"} + 56px)
    0 clamp(48px, 7vw, 88px);
  background:
    radial-gradient(
      circle at top left,
      rgba(99, 102, 241, 0.18),
      transparent 32%
    ),
    radial-gradient(
      circle at top right,
      rgba(16, 185, 129, 0.18),
      transparent 28%
    ),
    linear-gradient(180deg, #f7f8ff 0%, #ffffff 100%);

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 999px;
    pointer-events: none;
    filter: blur(10px);
  }

  &::before {
    width: 220px;
    height: 220px;
    top: -80px;
    left: -60px;
    background: rgba(59, 130, 246, 0.12);
  }

  &::after {
    width: 260px;
    height: 260px;
    right: -80px;
    bottom: -120px;
    background: rgba(168, 85, 247, 0.12);
  }
`;

export const SectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  padding: 0.5rem 0.95rem;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.1);
  color: #1d4ed8;
  font-size: ${({ theme }) => theme.fontSizes?.sm || "0.875rem"};
  font-weight: ${({ theme }) => theme.fontWeights?.semibold || 600};
`;

export const IntroBadge = styled.span`
  display: block;
  width: fit-content;
  margin: 0 auto 18px;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.12);
  color: #047857;
  font-size: ${({ theme }) => theme.fontSizes?.sm || "0.875rem"};
  font-weight: ${({ theme }) => theme.fontWeights?.medium || 500};
`;

export const SectionTitle = styled.h1`
  max-width: 12ch;
  margin: 0 auto 18px;
  text-align: center;
  font-size: clamp(2.4rem, 6vw, 4.8rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || "768px"}) {
    max-width: 100%;
    font-size: clamp(2rem, 9vw, 3rem);
  }
`;

export const IntroLead = styled.p`
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  line-height: 1.9;
  color: ${({ theme }) => theme.colors?.text?.secondary || "#475569"};
`;

export const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(14px, 2vw, 20px);
  margin-top: clamp(28px, 4vw, 40px);

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || "768px"}) {
    grid-template-columns: 1fr;
  }
`;

export const HighlightCard = styled.article`
  padding: 22px 22px 20px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);
`;

export const HighlightTitle = styled.h2`
  margin: 0 0 10px;
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  line-height: 1.2;
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};
`;

export const HighlightText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes?.md || "1rem"};
  line-height: 1.75;
  color: ${({ theme }) => theme.colors?.text?.secondary || "#475569"};
`;

export const ContentBlock = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 460px);
  gap: clamp(24px, 5vw, 64px);
  align-items: center;
  padding: clamp(42px, 6vw, 74px) 0;

  ${({ $reverse }) =>
    $reverse &&
    css`
      ${BlockContent} {
        order: 2;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || "768px"}) {
    grid-template-columns: 1fr;
    gap: 22px;
    padding: 34px 0;
  }
`;

const blockBase = css`
  width: 100%;
`;

export const BlockContent = styled.div`
  ${blockBase};
`;

export const BlockKicker = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  color: #7c3aed;
  font-size: ${({ theme }) => theme.fontSizes?.sm || "0.875rem"};
  font-weight: ${({ theme }) => theme.fontWeights?.semibold || 600};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const BlockTitle = styled.h2`
  margin: 0 0 16px;
  max-width: 16ch;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || "768px"}) {
    max-width: 100%;
  }
`;

export const BlockText = styled.p`
  margin: 0 0 16px;
  max-width: 62ch;
  font-size: clamp(1rem, 1.6vw, 1.08rem);
  line-height: 1.9;
  color: ${({ theme }) => theme.colors?.text?.secondary || "#475569"};
`;

export const BlockSupport = styled.p`
  margin: 0;
  max-width: 58ch;
  font-size: clamp(0.98rem, 1.45vw, 1.03rem);
  line-height: 1.85;
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};
  font-weight: ${({ theme }) => theme.fontWeights?.medium || 500};
`;

export const BlockImage = styled.div`
  ${blockBase};
  overflow: hidden;
  border-radius: 28px;
  min-height: clamp(260px, 34vw, 420px);
  box-shadow: 0 24px 54px rgba(15, 23, 42, 0.12);
  background: linear-gradient(135deg, #eef2ff 0%, #f8fafc 100%);

  img {
    width: 100%;
    height: 100%;
    min-height: clamp(260px, 34vw, 420px);
    object-fit: cover;
    display: block;
  }
`;

export const AccentCard = styled.div`
  ${blockBase};
  display: flex;
  align-items: flex-end;
  min-height: clamp(260px, 34vw, 420px);
  padding: clamp(24px, 4vw, 34px);
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(15, 23, 42, 0.08), rgba(15, 23, 42, 0.72)),
    linear-gradient(135deg, #3b82f6 0%, #7c3aed 54%, #14b8a6 100%);
  box-shadow: 0 24px 54px rgba(15, 23, 42, 0.12);
`;

export const AccentText = styled.p`
  margin: 0;
  max-width: 22ch;
  font-size: clamp(1.35rem, 2.8vw, 2rem);
  line-height: 1.18;
  letter-spacing: -0.03em;
  color: #ffffff;
  font-weight: ${({ theme }) => theme.fontWeights?.semibold || 600};
`;

export const ClosingSection = styled.section`
  padding: clamp(24px, 4vw, 40px) 0 clamp(56px, 8vw, 96px);
`;

export const ClosingCard = styled.div`
  padding: clamp(28px, 5vw, 52px);
  border-radius: 32px;
  background:
    radial-gradient(
      circle at top right,
      rgba(59, 130, 246, 0.16),
      transparent 30%
    ),
    linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
  box-shadow: 0 22px 50px rgba(15, 23, 42, 0.08);
  text-align: center;
`;

export const ClosingTitle = styled.h2`
  margin: 0 0 14px;
  font-size: clamp(1.9rem, 3.5vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors?.text?.primary || "#0f172a"};
`;

export const ClosingText = styled.p`
  max-width: 780px;
  margin: 0 auto;
  font-size: clamp(1rem, 1.8vw, 1.12rem);
  line-height: 1.9;
  color: ${({ theme }) => theme.colors?.text?.secondary || "#475569"};
`;

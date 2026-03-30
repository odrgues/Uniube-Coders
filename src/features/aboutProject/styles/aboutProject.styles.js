import styled from "styled-components";

export const IntroSection = styled.section`
  position: relative;
  padding: clamp(92px, 10vw, 128px) 0 clamp(42px, 5vw, 68px);
  background:
    radial-gradient(
      circle at top right,
      rgba(9, 63, 180, 0.08),
      transparent 24%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(34, 211, 238, 0.08),
      transparent 24%
    ),
    linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.bg.page} 0%,
      ${({ theme }) => theme.colors.bg.muted} 100%
    );
  overflow: hidden;

  @media ${({ theme }) => theme.media.between.mdLg} {
    padding: 82px 0 32px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    padding: clamp(78px, 11vw, 98px) 0 clamp(30px, 5vw, 44px);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: clamp(74px, 13vw, 90px) 0 clamp(24px, 6vw, 36px);
  }
`;

export const HeroSection = styled.div`
  position: relative;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 420px);
  align-items: center;
  gap: clamp(28px, 4vw, 56px);

  @media ${({ theme }) => theme.media.between.mdLg} {
    grid-template-columns: 1fr;
    gap: 22px;
    align-items: start;
  }

  @media ${({ theme }) => theme.media.down.md} {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    gap: 16px;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  min-width: 0;
`;

export const SectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 0 12px;
  padding: 0.42rem 0.9rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.brand.eyebrow};
  color: ${({ theme }) => theme.colors.text.eyebrow};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1;
  box-shadow: 0 10px 24px rgba(250, 204, 21, 0.16);

  @media ${({ theme }) => theme.media.between.mdLg} {
    margin-bottom: 8px;
    padding: 0.36rem 0.78rem;
    font-size: 0.78rem;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    margin-bottom: 8px;
    font-size: 0.74rem;
  }
`;

export const SectionTitle = styled.h1`
  width: 100%;
  max-width: 22ch;
  margin: 0 0 14px;
  color: ${({ theme }) => theme.colors.text.heading};
  font-size: clamp(2rem, 1.5rem + 2vw, 3.2rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
  word-break: break-word;
  text-wrap: pretty;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 100%;
    margin-bottom: 12px;
    font-size: clamp(1.7rem, 1.3rem + 1vw, 2.1rem);
    line-height: 1.08;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    font-size: clamp(1.5rem, 1.2rem + 1.2vw, 1.9rem);
    line-height: 1.1;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    max-width: 100%;
    font-size: clamp(1.34rem, 1.1rem + 1vw, 1.64rem);
    line-height: 1.12;
  }
`;

export const IntroLead = styled.p`
  width: 100%;
  max-width: 64ch;
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.72;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 100%;
    font-size: 0.98rem;
    line-height: 1.62;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    font-size: 0.94rem;
    line-height: 1.62;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.58;
  }
`;

export const SectionText = styled.p`
  width: 100%;
  max-width: 62ch;
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: justify;
  line-height: 1.72;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 100%;
    font-size: 0.92rem;
    line-height: 1.58;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    line-height: 1.62;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.58;
  }
`;

export const HeroImage = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: clamp(20px, 3vw, 30px);
  min-height: clamp(320px, 36vw, 460px);
  box-shadow: ${({ theme }) => theme.shadows.lg};
  isolation: isolate;
  min-width: 0;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.12),
      rgba(0, 0, 0, 0.02)
    );
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    min-height: inherit;
    display: block;
    object-fit: cover;
    object-position: center;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    min-height: 320px;
    border-radius: 20px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    min-height: clamp(240px, 56vw, 340px);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    border-radius: 16px;
    min-height: clamp(220px, 62vw, 280px);
  }
`;

export const ContentSection = styled.section`
  position: relative;
  padding: clamp(44px, 6vw, 72px) 0;
  background: ${({ theme }) => theme.colors.bg.page};

  @media ${({ theme }) => theme.media.between.mdLg} {
    padding: 28px 0;
  }

  @media ${({ theme }) => theme.media.down.md} {
    padding: clamp(30px, 5vw, 44px) 0;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: clamp(24px, 6vw, 36px) 0;
  }
`;

export const GalleryHeader = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 0 28px;
  text-align: justify;
  ${SectionTitle} {
    max-width: 26ch;
    margin-bottom: 10px;
    font-size: clamp(1.75rem, 1.2rem + 1vw, 2.2rem);
    line-height: 1.08;
  }

  ${SectionText} {
    max-width: 72ch;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    margin-bottom: 20px;

    ${SectionTitle} {
      max-width: 100%;
      font-size: clamp(1.35rem, 1.1rem + 0.8vw, 1.7rem);
      line-height: 1.12;
      margin-bottom: 8px;
    }

    ${SectionText} {
      max-width: 100%;
    }
  }

  @media ${({ theme }) => theme.media.down.sm} {
    margin-bottom: 16px;

    ${SectionTitle} {
      max-width: 100%;
      font-size: clamp(1.2rem, 1.02rem + 0.8vw, 1.42rem);
    }
  }
`;

export const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.media.between.mdLg} {
    grid-template-columns: 1fr;
    gap: 14px;
    margin-bottom: 14px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 14px;
  }
`;

export const OverviewCard = styled.article`
  position: relative;
  padding: 22px;
  border-radius: 22px;
  background:
    radial-gradient(
      circle at top right,
      rgba(9, 63, 180, 0.06),
      transparent 24%
    ),
    linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.surface.base} 0%,
      ${({ theme }) => theme.colors.bg.muted} 100%
    );
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.07);
  min-width: 0;
  text-align: justify;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 22px;
    width: 44px;
    height: 4px;
    border-radius: ${({ theme }) => theme.radius.full};
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.brand.primary},
      ${({ theme }) => theme.colors.brand.highlight}
    );
  }

  ${SectionEyebrow} {
    margin-bottom: 10px;
  }

  ${SectionTitle} {
    max-width: 100%;
    margin-bottom: 8px;
    font-size: 1.18rem;
    line-height: 1.14;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  ${SectionText} {
    max-width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.64;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    padding: 16px;
    border-radius: 18px;

    &::before {
      left: 16px;
      width: 34px;
      height: 3px;
    }

    ${SectionEyebrow} {
      margin-bottom: 6px;
    }

    ${SectionTitle} {
      font-size: 1rem;
      line-height: 1.16;
      margin-bottom: 6px;
    }

    ${SectionText} {
      font-size: 0.84rem;
      line-height: 1.5;
    }
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: 16px;
    border-radius: 18px;

    ${SectionTitle} {
      font-size: 1rem;
    }
  }
`;

export const OverviewGallery = styled.div`
  overflow: hidden;
  border-radius: 18px;
  min-height: clamp(200px, 26vw, 280px);
  box-shadow: ${({ theme }) => theme.shadows.md};
  background: ${({ theme }) => theme.colors.bg.soft};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};

  img {
    width: 100%;
    height: 100%;
    min-height: inherit;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    min-height: 190px;
    border-radius: 16px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    min-height: clamp(130px, 42vw, 180px);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    border-radius: 14px;
    min-height: clamp(125px, 46vw, 170px);
  }
`;

export const StatementSection = styled.section`
  position: relative;
  padding: clamp(32px, 4vw, 52px) 0;
  background:
    radial-gradient(
      circle at top right,
      rgba(9, 63, 180, 0.08),
      transparent 26%
    ),
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.surface.base} 0%,
      ${({ theme }) => theme.colors.bg.muted} 100%
    );
  border-block: 1px solid ${({ theme }) => theme.colors.border.subtle};

  @media ${({ theme }) => theme.media.between.mdLg} {
    padding: 18px 0;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: 22px 0;
  }
`;

export const StatementText = styled.p`
  width: 100%;
  max-width: 34ch;
  margin: 0;
  color: ${({ theme }) => theme.colors.text.accent};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.7rem, 1.2rem + 1.5vw, 2.4rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.08;
  letter-spacing: -0.04em;
  word-break: break-word;
  text-wrap: pretty;
  text-align: justify;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 100%;
    font-size: clamp(1.3rem, 1.08rem + 0.8vw, 1.65rem);
    line-height: 1.14;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    margin-inline: 0;
    text-align: left;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    max-width: 100%;
    margin-inline: 0;
    text-align: left;
    font-size: clamp(1.14rem, 1rem + 0.9vw, 1.36rem);
  }
`;

export const FinalBlock = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(300px, 420px);
  gap: 24px;
  align-items: stretch;

  @media ${({ theme }) => theme.media.between.mdLg} {
    grid-template-columns: 1fr;
    gap: 16px;
    align-items: start;
  }

  @media ${({ theme }) => theme.media.down.md} {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const FinalContent = styled.div`
  position: relative;
  padding: 22px;
  border-radius: 22px;
  background:
    radial-gradient(
      circle at top right,
      rgba(250, 204, 21, 0.12),
      transparent 24%
    ),
    linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.surface.base} 0%,
      ${({ theme }) => theme.colors.bg.muted} 100%
    );
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.07);
  min-width: 0;

  ${SectionEyebrow} {
    margin-bottom: 15px;
  }

  ${SectionTitle} {
    max-width: 32ch;
    margin-bottom: 15px;
    font-size: 1.2rem;
    line-height: 1.12;
    color: ${({ theme }) => theme.colors.text.heading};
  }

  ${SectionText} + ${SectionText} {
    margin-top: 8px;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    padding: 16px;
    border-radius: 18px;

    ${SectionEyebrow} {
      margin-bottom: 6px;
    }

    ${SectionTitle} {
      max-width: 100%;
      font-size: 1rem;
      line-height: 1.16;
      margin-bottom: 6px;
    }

    ${SectionText} {
      font-size: 0.84rem;
      line-height: 1.5;
    }
  }

  @media ${({ theme }) => theme.media.down.md} {
    padding: 16px;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: 16px;

    ${SectionTitle} {
      max-width: 100%;
      font-size: 1.04rem;
    }
  }
`;

export const SupportText = styled.p`
  margin: 8px 0 0;
  width: 100%;
  max-width: 60ch;
  gap: 8px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.64;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 100%;
    font-size: 0.84rem;
    line-height: 1.5;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.58;
  }
`;

export const FinalImage = styled.div`
  overflow: hidden;
  border-radius: 22px;
  min-height: clamp(280px, 32vw, 380px);
  box-shadow: ${({ theme }) => theme.shadows.md};
  background: ${({ theme }) => theme.colors.bg.soft};
  min-width: 0;

  img {
    width: 100%;
    height: 100%;
    min-height: inherit;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    min-height: 280px;
    border-radius: 18px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    min-height: clamp(220px, 54vw, 300px);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    border-radius: 16px;
    min-height: clamp(190px, 54vw, 240px);
  }
`;

export const ClosingSection = styled.section`
  padding: 0 0 ${({ theme }) => theme.spacing.sectionLg};
  background: ${({ theme }) => theme.colors.bg.page};

  @media ${({ theme }) => theme.media.between.mdLg} {
    padding-bottom: 32px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    padding-bottom: 36px;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding-bottom: 30px;
  }
`;

export const ClosingText = styled.p`
  width: 100%;
  max-width: 70ch;
  margin: 0;
  padding-top: 18px;
  border-top: 1px solid ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.text.highlight};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.72;
  text-align: justify;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 100%;
    padding-top: 14px;
    font-size: 0.88rem;
    line-height: 1.54;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    line-height: 1.6;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.54;
  }
`;

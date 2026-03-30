import styled from "styled-components";

export const IntroSection = styled.section`
  position: relative;
  padding: clamp(108px, 12vw, 148px) 0 clamp(48px, 6vw, 84px);
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
    padding: clamp(96px, 11vw, 130px) 0 clamp(44px, 5vw, 72px);
  }

  @media ${({ theme }) => theme.media.down.md} {
    padding: clamp(88px, 14vw, 116px) 0 clamp(38px, 5vw, 60px);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: clamp(84px, 18vw, 108px) 0 clamp(34px, 6vw, 48px);
  }
`;

export const HeroSection = styled.div`
  position: relative;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  align-items: center;
  gap: clamp(26px, 4vw, 48px);

  @media ${({ theme }) => theme.media.between.mdLg} {
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.9fr);
    gap: 28px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const SectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 0 clamp(14px, 2vw, 18px);
  padding: clamp(0.42rem, 0.8vw, 0.5rem) clamp(0.9rem, 1.6vw, 1rem);
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.brand.eyebrow};
  color: ${({ theme }) => theme.colors.text.eyebrow};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1;
  box-shadow: 0 10px 24px rgba(250, 204, 21, 0.16);
`;

export const SectionTitle = styled.h1`
  width: min(100%, 15ch);
  margin: 0 0 clamp(18px, 2.5vw, 26px);
  color: ${({ theme }) => theme.colors.text.heading};
  font-size: clamp(2rem, 1.4rem + 2.4vw, 3.5rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
  text-wrap: balance;

  @media ${({ theme }) => theme.media.between.mdLg} {
    width: min(100%, 16ch);
  }

  @media ${({ theme }) => theme.media.down.md} {
    width: min(100%, 18ch);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    width: 100%;
  }
`;

export const IntroLead = styled.p`
  width: min(100%, 66ch);
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.82;

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
  }
`;

export const HeroImage = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: clamp(28px, 3vw, 40px);
  min-height: clamp(320px, 38vw, 520px);
  box-shadow: ${({ theme }) => theme.shadows.lg};
  isolation: isolate;

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
    min-height: clamp(320px, 38vw, 520px);
    object-fit: cover;
    object-position: center;
    transform: scale(1);
    transition: transform 0.8s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    min-height: clamp(300px, 34vw, 420px);

    img {
      min-height: clamp(300px, 34vw, 420px);
    }
  }

  @media ${({ theme }) => theme.media.down.md} {
    min-height: clamp(280px, 56vw, 420px);

    img {
      min-height: clamp(280px, 56vw, 420px);
    }
  }

  @media ${({ theme }) => theme.media.down.sm} {
    border-radius: clamp(22px, 5vw, 28px);
    min-height: clamp(240px, 64vw, 340px);

    img {
      min-height: clamp(240px, 64vw, 340px);
    }
  }
`;

export const ContentSection = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing.sectionMd} 0;
  background: ${({ theme }) => theme.colors.bg.page};

  @media ${({ theme }) => theme.media.down.md} {
    padding: clamp(40px, 6vw, 60px) 0;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: clamp(34px, 7vw, 52px) 0;
  }
`;

export const GalleryHeader = styled.div`
  max-width: 760px;
  margin: 0 0 clamp(28px, 4vw, 40px);

  ${SectionTitle} {
    width: min(100%, 18ch);
    margin-bottom: clamp(16px, 2vw, 22px);
    font-size: clamp(1.7rem, 1.2rem + 1.5vw, 2.6rem);
    line-height: 1.02;
  }

  @media ${({ theme }) => theme.media.down.md} {
    ${SectionTitle} {
      width: min(100%, 20ch);
    }
  }

  @media ${({ theme }) => theme.media.down.sm} {
    margin-bottom: 26px;

    ${SectionTitle} {
      width: 100%;
    }
  }
`;

export const SectionText = styled.p`
  width: min(100%, 64ch);
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.8;
`;

export const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(18px, 2vw, 26px);

  @media ${({ theme }) => theme.media.down.md} {
    grid-template-columns: 1fr;
  }
`;

export const OverviewCard = styled.article`
  position: relative;
  padding: clamp(24px, 3vw, 34px);
  border-radius: clamp(22px, 2.5vw, 28px);
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
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: clamp(24px, 3vw, 34px);
    width: clamp(42px, 8vw, 58px);
    height: 4px;
    border-radius: ${({ theme }) => theme.radius.full};
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.brand.primary},
      ${({ theme }) => theme.colors.brand.highlight}
    );
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 22px 44px rgba(15, 23, 42, 0.12);
    border-color: rgba(9, 63, 180, 0.14);
  }

  ${SectionEyebrow} {
    margin-bottom: 14px;
  }

  ${SectionTitle} {
    width: 100%;
    margin-bottom: 14px;
    font-size: clamp(1.3rem, 1.05rem + 0.8vw, 1.85rem);
    line-height: 1.08;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  ${SectionText} {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.76;
  }
`;

export const StatementSection = styled.section`
  position: relative;
  padding: clamp(38px, 5vw, 64px) 0;
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

  @media ${({ theme }) => theme.media.down.sm} {
    padding: 34px 0;
  }
`;

export const StatementText = styled.p`
  width: min(100%, 32ch);
  margin: 0;
  color: ${({ theme }) => theme.colors.text.accent};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 1.2rem + 2vw, 3rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.02;
  letter-spacing: -0.04em;
  text-wrap: balance;

  @media ${({ theme }) => theme.media.down.md} {
    width: min(100%, 18ch);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    width: 100%;
  }
`;

export const FinalBlock = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.95fr);
  gap: clamp(22px, 3vw, 38px);
  align-items: stretch;

  @media ${({ theme }) => theme.media.between.mdLg} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.media.down.md} {
    grid-template-columns: 1fr;
  }
`;

export const FinalContent = styled.div`
  position: relative;
  padding: clamp(28px, 3.5vw, 40px);
  border-radius: clamp(24px, 3vw, 32px);
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
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);

  ${SectionEyebrow} {
    margin-bottom: 14px;
  }

  ${SectionTitle} {
    width: min(100%, 14ch);
    margin-bottom: 16px;
    font-size: clamp(1.7rem, 1.2rem + 1.4vw, 2.5rem);
    line-height: 1.02;
    color: ${({ theme }) => theme.colors.text.heading};

    @media ${({ theme }) => theme.media.down.sm} {
      width: 100%;
    }
  }

  ${SectionText} + ${SectionText} {
    margin-top: 12px;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: 24px;
  }
`;

export const SupportText = styled.p`
  margin: 14px 0 0;
  width: min(100%, 58ch);
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.78;
`;

export const FinalImage = styled.div`
  overflow: hidden;
  border-radius: clamp(24px, 3vw, 32px);
  min-height: clamp(320px, 34vw, 480px);
  box-shadow: ${({ theme }) => theme.shadows.md};
  background: ${({ theme }) => theme.colors.bg.soft};

  img {
    width: 100%;
    height: 100%;
    min-height: clamp(320px, 34vw, 480px);
    object-fit: cover;
    object-position: center;
    display: block;
    transform: scale(1);
    transition: transform 0.8s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }

  @media ${({ theme }) => theme.media.down.md} {
    min-height: clamp(260px, 62vw, 360px);

    img {
      min-height: clamp(260px, 62vw, 360px);
    }
  }

  @media ${({ theme }) => theme.media.down.sm} {
    border-radius: clamp(22px, 5vw, 28px);
  }
`;

export const ClosingSection = styled.section`
  padding: 0 0 ${({ theme }) => theme.spacing.sectionLg};
  background: ${({ theme }) => theme.colors.bg.page};

  @media ${({ theme }) => theme.media.down.md} {
    padding-bottom: clamp(48px, 7vw, 74px);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding-bottom: clamp(40px, 8vw, 58px);
  }
`;

export const ClosingText = styled.p`
  width: min(100%, 76ch);
  margin: 0;
  padding-top: 28px;
  border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.9;
`;

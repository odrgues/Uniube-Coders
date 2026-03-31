import styled from "styled-components";

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
  box-shadow: 0 10px 24px rgba(147, 51, 234, 0.08);

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
  max-width: 18ch;
  margin: 0 0 14px;
  color: ${({ theme }) => theme.colors.text.heading};
  font-size: clamp(1.8rem, 1.2rem + 2vw, 3rem);
  line-height: 1.03;
  letter-spacing: -0.04em;
  word-break: break-word;
  text-wrap: balance;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 100%;
    margin-bottom: 12px;
    font-size: clamp(1.62rem, 1.28rem + 1vw, 2.05rem);
    line-height: 1.08;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    font-size: clamp(1.42rem, 1.16rem + 1vw, 1.86rem);
    line-height: 1.08;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    font-size: clamp(1.3rem, 1.08rem + 0.9vw, 1.58rem);
    line-height: 1.1;
  }
`;

export const IntroLead = styled.p`
  width: 100%;
  max-width: 62ch;
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  text-align: left;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 100%;
    font-size: 0.96rem;
    line-height: 1.62;
  }

  @media ${({ theme }) => theme.media.down.md} {
    font-size: 0.94rem;
    line-height: 1.6;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.56;
  }
`;

export const SectionText = styled.p`
  width: 100%;
  max-width: 62ch;
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: left;
  line-height: 1.7;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 100%;
    font-size: 0.94rem;
    line-height: 1.58;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    font-size: 0.92rem;
    line-height: 1.58;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.56;
  }
`;

export const SupportText = styled.p`
  margin: 8px 0 0;
  width: 100%;
  alingn-self: justify;
  max-width: 78ch;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 0.92rem;
  line-height: 1.58;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 100%;
    font-size: 0.84rem;
    line-height: 1.46;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    font-size: 0.82rem;
    line-height: 1.48;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    font-size: 0.78rem;
    line-height: 1.46;
  }
`;

export const IntroSection = styled.section`
  position: relative;
  padding: clamp(92px, 10vw, 128px) 0 clamp(52px, 6vw, 84px);
  overflow: hidden;

  @media ${({ theme }) => theme.media.between.mdLg} {
    padding: 84px 0 40px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    padding: clamp(78px, 11vw, 98px) 0 clamp(34px, 6vw, 54px);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: clamp(74px, 13vw, 90px) 0 clamp(28px, 7vw, 40px);
  }
`;

export const HeroSection = styled.div`
  position: relative;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(300px, 420px);
  align-items: center;
  gap: clamp(24px, 4vw, 52px);

  @media ${({ theme }) => theme.media.between.mdLg} {
    grid-template-columns: 1fr;
    gap: 24px;
    align-items: start;
  }

  @media ${({ theme }) => theme.media.down.md} {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  min-width: 0;
`;

export const HeroImage = styled.div`
  position: relative;
  overflow: hidden;
  width: min(100%, 860px);
  justify-self: center;
  border-radius: clamp(22px, 2.4vw, 30px);
  aspect-ratio: 16 / 9;
  min-height: clamp(220px, 30vw, 360px);
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.12);
  isolation: isolate;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 28%;
    display: block;
    transform: scale(1);
    transition: transform 0.8s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media ${({ theme }) => theme.media.between.lgXl} {
    min-height: clamp(220px, 28vw, 340px);
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    width: 100%;
    min-height: clamp(210px, 26vw, 280px);

    img {
      object-position: center 24%;
    }
  }

  @media ${({ theme }) => theme.media.down.md} {
    width: 100%;
    min-height: clamp(220px, 46vw, 320px);
    aspect-ratio: 16 / 10;

    img {
      object-position: center 22%;
    }
  }

  @media ${({ theme }) => theme.media.down.sm} {
    min-height: clamp(200px, 56vw, 280px);
    border-radius: 20px;
    aspect-ratio: 4 / 3;

    img {
      object-position: center 20%;
    }
  }
`;

export const ContentSection = styled.section`
  position: relative;
  padding: clamp(52px, 6vw, 80px) 0;
  background: ${({ theme }) => theme.colors.bg.page};

  @media ${({ theme }) => theme.media.between.mdLg} {
    padding: 38px 0;
  }

  @media ${({ theme }) => theme.media.down.md} {
    padding: clamp(30px, 5vw, 46px) 0;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: clamp(24px, 6vw, 36px) 0;
  }
`;

export const GalleryHeader = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 0 24px;

  ${SectionTitle} {
    max-width: 18ch;
    margin-bottom: 12px;
    font-size: clamp(1.5rem, 1.12rem + 1vw, 2.5rem);
    line-height: 1.06;
  }

  ${SectionText} {
    max-width: 64ch;
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    margin-bottom: 18px;

    ${SectionTitle} {
      max-width: 100%;
      font-size: clamp(1.5rem, 1.12rem + 1vw, 2.5rem);
      line-height: 1.08;
      margin-bottom: 8px;
    }
  }

  @media ${({ theme }) => theme.media.down.sm} {
    margin-bottom: 14px;

    ${SectionTitle} {
      font-size: clamp(1.12rem, 1rem + 0.6vw, 1.28rem);
    }
  }
`;

export const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 22px;

  @media ${({ theme }) => theme.media.between.mdLg} {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 18px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    grid-template-columns: 1fr;
    gap: 14px;
    margin-bottom: 16px;
  }
`;
export const OverviewCard = styled.article`
  position: relative;
  min-width: 0;
  height: 100%;
  padding: 22px;
  border-radius: 18px;
  background:
    radial-gradient(
      circle at top right,
      rgba(67, 97, 238, 0.14),
      transparent 24%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(67, 97, 238, 0.07),
      transparent 18%
    ),
    linear-gradient(135deg, #f8faff 0%, #eef3ff 52%, #f4f6ff 100%);
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.05);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 16px;
    width: 30px;
    height: 3px;
    border-radius: ${({ theme }) => theme.radius.full};
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.brand.primary},
      ${({ theme }) => theme.colors.brand.highlight}
    );
  }

  ${SectionEyebrow} {
    margin-bottom: 6px;
  }

  ${SectionTitle} {
    max-width: 100%;
    margin-bottom: 8px;
    font-size: clamp(1.2rem, 1rem + 0.55vw, 1.55rem);
    line-height: 1.18;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.text.muted};
  }

  ${SectionText} {
    max-width: 100%;
    font-size: clamp(0.94rem, 0.88rem + 0.22vw, 1rem);
    line-height: 1.55;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    padding: 18px;
    border-radius: 16px;

    &::before {
      left: 14px;
      width: 26px;
    }

    ${SectionTitle} {
      font-size: 1.12rem;
      margin-bottom: 7px;
      line-height: 1.2;
    }

    ${SectionText} {
      font-size: 0.93rem;
      line-height: 1.5;
    }
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: 15px;
    border-radius: 14px;

    &::before {
      left: 12px;
      width: 24px;
    }

    ${SectionTitle} {
      font-size: 1.05rem;
      margin-bottom: 6px;
      line-height: 1.22;
    }

    ${SectionText} {
      font-size: 0.91rem;
      line-height: 1.48;
    }
  }
`;

export const OverviewGallery = styled.div`
  position: relative;
  overflow: hidden;
  width: min(100%, 860px);
  margin: 0 auto;
  border-radius: clamp(22px, 2.4vw, 30px);
  aspect-ratio: 16 / 9;
  min-height: clamp(220px, 30vw, 360px);
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.12);
  isolation: isolate;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 28%;
    display: block;
    transform: scale(1);
    transition: transform 0.8s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    width: 100%;
    min-height: clamp(200px, 26vw, 270px);

    img {
      object-position: center 24%;
    }
  }

  @media ${({ theme }) => theme.media.down.md} {
    width: 100%;
    min-height: clamp(220px, 46vw, 320px);
    aspect-ratio: 16 / 10;

    img {
      object-position: center 22%;
    }
  }

  @media ${({ theme }) => theme.media.down.sm} {
    min-height: clamp(200px, 56vw, 280px);
    border-radius: 20px;
    aspect-ratio: 4 / 3;

    img {
      object-position: center 20%;
    }
  }
`;

export const StatementSection = styled.section`
  position: relative;
  padding: clamp(36px, 4vw, 56px) 0;
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

  @media ${({ theme }) => theme.media.between.mdLg} {
    padding: 24px 0;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: 22px 0;
  }
`;

export const StatementText = styled.p`
  width: 100%;
  max-width: 50ch;
  margin: 0;
  color: ${({ theme }) => theme.colors.text.accent};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.32rem, 1rem + 0.9vw, 1.9rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.12;
  letter-spacing: -0.035em;
  word-break: break-word;
  text-wrap: balance;
  text-align: left;
  margin-bottom: 5px;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 100%;
    font-size: clamp(1.08rem, 0.96rem + 0.5vw, 1.28rem);
    line-height: 1.14;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    font-size: clamp(1rem, 0.92rem + 0.5vw, 1.12rem);
  }
`;

export const FinalBlock = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(240px, 320px);
  gap: clamp(16px, 2vw, 24px);
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
  min-width: 0;
  padding: clamp(18px, 2.2vw, 26px);
  border-radius: clamp(16px, 2vw, 22px);
  background:
    radial-gradient(
      circle at top right,
      rgba(250, 204, 21, 0.14),
      transparent 22%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(59, 130, 246, 0.06),
      transparent 20%
    ),
    linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.surface.base} 0%,
      ${({ theme }) => theme.colors.bg.muted} 100%
    );

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 18px;
    width: 34px;
    height: 3px;
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
    max-width: 34ch;
    margin-bottom: 20px;
    font-size: clamp(1.2rem, 1rem + 0.65vw, 1.6rem);
    line-height: 1.16;
    color: ${({ theme }) => theme.colors.text.heading};
    letter-spacing: -0.02em;
  }

  ${SectionText} {
    max-width: 82ch;
    font-size: clamp(0.95rem, 0.9rem + 0.2vw, 1rem);
    line-height: 1.62;
    color: ${({ theme }) => theme.colors.text.body};
    margin-bottom: 20px;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    padding: 18px;
    border-radius: 18px;

    &::before {
      left: 16px;
      width: 28px;
    }

    ${SectionTitle} {
      max-width: 100%;
      font-size: 1.1rem;
      margin-bottom: 8px;
      line-height: 1.2;
    }

    ${SectionText} {
      font-size: 0.92rem;
      line-height: 1.56;
    }
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding: 15px;
    border-radius: 15px;

    &::before {
      left: 14px;
      width: 24px;
    }

    ${SectionEyebrow} {
      margin-bottom: 6px;
    }

    ${SectionTitle} {
      font-size: 1.02rem;
      margin-bottom: 7px;
      line-height: 1.22;
    }

    ${SectionText} {
      font-size: 0.9rem;
      line-height: 1.52;
    }

    ${SectionText} + ${SectionText} {
      margin-top: 8px;
    }
  }
`;

export const FinalImage = styled.div`
  overflow: hidden;
  min-width: 0;
  border-radius: clamp(16px, 2vw, 20px);
  min-height: clamp(190px, 24vw, 280px);
  background: ${({ theme }) => theme.colors.bg.soft};
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);

  img {
    width: 100%;
    height: 100%;
    min-height: inherit;
    display: block;
    object-fit: cover;
    object-position: center;
    transition: transform 0.8s ease;
  }

  &:hover img {
    transform: scale(1.035);
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    min-height: 220px;
    border-radius: 16px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    min-height: clamp(170px, 46vw, 220px);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    min-height: clamp(150px, 50vw, 185px);
    border-radius: 14px;
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
  max-width: 66ch;
  margin: 0;
  padding-top: 18px;
  border-top: 1px solid ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.text.highlight};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.68;
  text-align: left;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 100%;
    padding-top: 14px;
    font-size: 0.9rem;
    line-height: 1.56;
  }

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    line-height: 1.58;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.54;
  }
`;

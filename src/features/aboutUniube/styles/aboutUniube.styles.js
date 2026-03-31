import styled from "styled-components";

export const AboutPageWrapper = styled.main`
  width: 100%;
  overflow-x: clip;
  background: ${({ theme }) => theme.colors.bg.page};
`;

export const Hero = styled.section`
  width: min(100%, 1040px);
  margin: 0 auto;
  padding: clamp(92px, 10vw, 132px) clamp(20px, 4vw, 36px)
    clamp(24px, 3.5vw, 36px);
  box-sizing: border-box;
  text-align: center;

  @media ${({ theme }) => theme.media.between.lgXl} {
    max-width: 980px;
    padding-top: clamp(88px, 9vw, 120px);
    padding-left: clamp(22px, 3vw, 30px);
    padding-right: clamp(22px, 3vw, 30px);
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 900px;
    padding-top: clamp(86px, 11vw, 112px);
    padding-left: clamp(22px, 4vw, 30px);
    padding-right: clamp(22px, 4vw, 30px);
  }

  @media ${({ theme }) => theme.media.down.md} {
    padding: clamp(82px, 15vw, 108px) clamp(18px, 5vw, 26px) 24px;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding-top: clamp(78px, 20vw, 98px);
    padding-left: 18px;
    padding-right: 18px;
  }
`;

export const Title = styled.h1`
  margin: 20px 0 ${({ theme }) => theme.spacing.sm};
  padding: clamp(10px, 1.6vw, 16px) clamp(14px, 2.2vw, 22px);
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.72rem, 1.16rem + 2.1vw, 2.95rem);
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  line-height: 1.08;
  letter-spacing: -0.03em;
  text-wrap: balance;
  color: ${({ theme }) => theme.colors.text.heading};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.04);

  @media ${({ theme }) => theme.media.down.md} {
    font-size: clamp(1.5rem, 1.08rem + 1.8vw, 2.15rem);
    padding: 12px 14px;
    line-height: 1.12;
  }
`;

export const IntroText = styled.p`
  margin: 0 auto;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.96rem, 0.93rem + 0.12vw, 1.02rem);
  line-height: 1.76;
  text-align: justify;
  color: ${({ theme }) => theme.colors.text.primary};

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    font-size: 0.97rem;
    line-height: 1.68;
    text-align: left;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    font-size: 0.95rem;
    line-height: 1.64;
  }
`;

export const TwoColumnSection = styled.section`
  width: min(100%, 1040px);
  margin: 0 auto;
  padding: clamp(24px, 3vw, 40px) clamp(20px, 4vw, 36px);
  box-sizing: border-box;
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(280px, 0.96fr);
  gap: clamp(20px, 2.8vw, 34px);
  align-items: center;

  @media ${({ theme }) => theme.media.between.lgXl} {
    max-width: 980px;
    padding-left: clamp(22px, 3vw, 30px);
    padding-right: clamp(22px, 3vw, 30px);
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 900px;
    grid-template-columns: 1fr 0.94fr;
    gap: 22px;
    padding-left: clamp(22px, 4vw, 30px);
    padding-right: clamp(22px, 4vw, 30px);
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding-left: clamp(18px, 5vw, 24px);
    padding-right: clamp(18px, 5vw, 24px);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding-left: 18px;
    padding-right: 18px;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
  max-width: 64ch;

  @media (max-width: 920px) {
    order: 2;
    max-width: 100%;
  }
`;

export const ImageColumn = styled.div`
  width: 100%;
  min-width: 0;

  @media (max-width: 920px) {
    order: 1;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.24rem, 1.02rem + 0.9vw, 1.82rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.14;
  letter-spacing: -0.02em;
  text-wrap: balance;
  color: ${({ theme }) => theme.colors.text.accent};

  @media ${({ theme }) => theme.media.down.md} {
    font-size: clamp(1.16rem, 1rem + 0.75vw, 1.45rem);
    line-height: 1.18;
  }
`;

export const SectionText = styled.p`
  margin: 0;
  max-width: 64ch;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.94rem, 0.915rem + 0.08vw, 0.99rem);
  line-height: 1.7;
  text-align: justify;
  color: ${({ theme }) => theme.colors.text.secondary};

  @media ${({ theme }) => theme.media.down.md} {
    max-width: 100%;
    font-size: 0.96rem;
    line-height: 1.66;
    text-align: left;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    font-size: 0.94rem;
    line-height: 1.62;
  }
`;

export const FeaturedImageFrame = styled.div`
  width: 100%;
  border-radius: clamp(18px, 2vw, 24px);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
  background: ${({ theme }) => theme.colors.bg.soft};
  overflow: hidden;
  min-height: 280px;
  aspect-ratio: 4 / 3;

  @media ${({ theme }) => theme.media.between.mdLg} {
    min-height: 240px;
  }

  @media ${({ theme }) => theme.media.down.md} {
    min-height: 220px;
    border-radius: 20px;
    aspect-ratio: 16 / 11;
  }

  @media ${({ theme }) => theme.media.down.sm} {
    min-height: 200px;
    border-radius: 18px;
    aspect-ratio: 16 / 10;
  }
`;

export const FeaturedImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 18px;
`;

export const SliderSection = styled.section`
  width: min(100%, 1080px);
  margin: 0 auto;
  padding: clamp(24px, 4vw, 44px) clamp(20px, 4vw, 36px);
  box-sizing: border-box;

  @media ${({ theme }) => theme.media.between.lgXl} {
    max-width: 1000px;
    padding-left: clamp(22px, 3vw, 30px);
    padding-right: clamp(22px, 3vw, 30px);
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 920px;
    padding-left: clamp(22px, 4vw, 30px);
    padding-right: clamp(22px, 4vw, 30px);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding-left: 18px;
    padding-right: 18px;
  }
`;

export const SliderHeader = styled.div`
  max-width: 720px;
  margin: 0 auto 18px;
  text-align: center;

  ${SectionText} {
    margin-top: 8px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const NasaSection = styled.section`
  width: min(100%, 1080px);
  margin: 0 auto;
  padding: clamp(18px, 3vw, 40px) clamp(20px, 4vw, 36px);
  box-sizing: border-box;

  @media ${({ theme }) => theme.media.between.lgXl} {
    max-width: 1000px;
    padding-left: clamp(22px, 3vw, 30px);
    padding-right: clamp(22px, 3vw, 30px);
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 920px;
    padding-left: clamp(22px, 4vw, 30px);
    padding-right: clamp(22px, 4vw, 30px);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding-left: 18px;
    padding-right: 18px;
  }
`;

export const NasaCard = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(18px, 2.8vw, 30px);
  align-items: center;
  padding: clamp(16px, 2.2vw, 24px);
  border-radius: clamp(18px, 2vw, 24px);
  background: ${({ theme }) => theme.colors.brand.primary};
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);

  @media ${({ theme }) => theme.media.between.mdLg} {
    grid-template-columns: 0.95fr 1.05fr;
    gap: 22px;
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }

  ${SectionTitle} {
    color: ${({ theme }) => theme.colors.text.inverse};
  }

  ${SectionText} {
    color: rgba(255, 255, 255, 0.9);
    text-align: left;
    max-width: 62ch;
  }
`;

export const HighlightTag = styled.span`
  display: inline-flex;
  width: fit-content;
  padding: 6px 11px;
  border-radius: ${({ theme }) => theme.radius.full};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.72rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.inverse};
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(8px);
`;

export const InstagramSection = styled.section`
  width: min(100%, 820px);
  margin: 0 auto;
  padding: clamp(24px, 4vw, 44px) clamp(20px, 4vw, 36px);
  box-sizing: border-box;
  text-align: center;

  ${SectionText} {
    margin-top: 8px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 740px;
    padding-left: clamp(22px, 4vw, 28px);
    padding-right: clamp(22px, 4vw, 28px);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding-left: 18px;
    padding-right: 18px;
  }
`;

export const InstagramEmbedWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
  min-height: 170px;

  .instagram-media {
    width: 100% !important;
    max-width: 480px !important;
    min-width: 0 !important;
    margin: 0 auto !important;
    border-radius: ${({ theme }) => theme.radius.md} !important;
    overflow: hidden !important;
    box-shadow: 0 12px 26px rgba(15, 23, 42, 0.06) !important;
  }

  iframe {
    width: 100% !important;
    border-radius: ${({ theme }) => theme.radius.md} !important;
  }

  @media ${({ theme }) => theme.media.down.md} {
    .instagram-media {
      max-width: 100% !important;
    }
  }
`;

export const ClosingSection = styled.section`
  width: min(100%, 820px);
  margin: 0 auto;
  padding: 4px clamp(20px, 4vw, 36px) clamp(48px, 5.8vw, 76px);
  box-sizing: border-box;

  @media ${({ theme }) => theme.media.between.mdLg} {
    max-width: 740px;
    padding-left: clamp(22px, 4vw, 28px);
    padding-right: clamp(22px, 4vw, 28px);
  }

  @media ${({ theme }) => theme.media.down.sm} {
    padding-left: 18px;
    padding-right: 18px;
  }
`;

export const ClosingText = styled.p`
  margin: 0;
  padding: clamp(14px, 2vw, 22px);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.96rem, 0.93rem + 0.16vw, 1.06rem);
  line-height: 1.72;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.heading};
  background:
    radial-gradient(
      circle at top right,
      rgba(139, 92, 246, 0.34),
      transparent 17%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(79, 70, 229, 0.24),
      transparent 19%
    ),
    linear-gradient(135deg, #f4f6ff 0%, #dde6ff 42%, #e6d8ff 100%);
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.04);

  @media ${({ theme }) => theme.media.down.md} {
    line-height: 1.64;
  }
`;

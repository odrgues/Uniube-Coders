import styled from "styled-components";

export const AboutPageWrapper = styled.main`
  width: 100%;
`;

export const Hero = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: clamp(48px, 7vw, 88px) 20px 32px;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 70px 0 20px;
  font-size: clamp(2rem, 5vw, 3.6rem);
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text.titleSection};
  background: ${({ theme }) => theme.colors.brand.eyebrow};
  border-radius: 22px;
`;

export const IntroText = styled.p`
  max-width: 900px;
  margin: 0 auto;
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.9;
  text-align: justify;
  color: ${({ theme }) => theme.colors.text?.primary || "#162033"};
`;

export const TwoColumnSection = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: clamp(28px, 4vw, 56px) 20px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(24px, 4vw, 48px);
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ImageColumn = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text.titleCTA};
`;

export const SectionText = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.85;
  text-align: justify;
  color: ${({ theme }) => theme.colors.text?.secondary || "#475569"};
`;

export const FeaturedImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
`;

export const SliderSection = styled.section`
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  padding: clamp(28px, 5vw, 64px) 20px;
`;

export const SliderHeader = styled.div`
  max-width: 850px;
  margin: 0 auto 28px;
  text-align: center;

  ${SectionText} {
    text-align: center;
    margin-top: 12px;
  }
`;

export const NasaSection = styled.section`
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  padding: clamp(28px, 5vw, 64px) 20px;
`;

export const NasaCard = styled.div`
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: clamp(24px, 4vw, 48px);
  align-items: center;
  padding: clamp(22px, 3vw, 34px);
  border-radius: 28px;
  background: ${({ theme }) => theme.colors.brand.banner};
  //background: linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const HighlightTag = styled.span`
  display: inline-flex;
  width: fit-content;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary || "#2563eb"};
  background: rgba(37, 99, 235, 0.1);
`;

export const InstagramSection = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: clamp(28px, 5vw, 64px) 20px;
  text-align: center;

  ${SectionText} {
    text-align: center;
    margin-top: 12px;
  }
`;

export const InstagramEmbedWrapper = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
  min-height: 200px;

  .instagram-media {
    width: 100% !important;
    max-width: 540px !important;
    min-width: 280px !important;
    margin: 0 auto !important;
  }

  iframe {
    border-radius: 20px !important;
  }
`;

export const ClosingSection = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 12px 20px clamp(56px, 7vw, 90px);
`;

export const ClosingText = styled.p`
  margin: 0;
  font-size: clamp(1.05rem, 1.7vw, 1.2rem);
  line-height: 1.9;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.titleSection};
  background: ${({ theme }) => theme.colors.brand.eyebrow};
  border-radius: 22px;
`;

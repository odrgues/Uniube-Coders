import styled from "styled-components";

// Container Principal que envolve tudo
export const PageContainer = styled.main`
  width: 100%;
  overflow-x: hidden;
`;

export const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.palette.blue.dark};
  padding: clamp(60px, 10vh, 100px) 0;
  position: relative;
`;

export const HeroContent = styled.div`
  ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.hero};
  color: ${({ theme }) => theme.palette.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 1rem;
  line-height: 1.1;

  span {
    color: ${({ theme }) => theme.colors.brand.action};
  }
`;

export const HeroSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.palette.gray[400]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

// --- SEÇÃO DE CONTEÚDO (História) ---
export const StorySection = styled.section`
  ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.section} 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.palette.blue.primary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.875rem;
`;

export const SectionHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.palette.blue.dark};
  line-height: 1.2;

  /* Detalhe sutil */
  position: relative;
  padding-left: 20px;
  border-left: 4px solid ${({ theme }) => theme.palette.red};
`;

export const StoryText = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.05rem;
  line-height: 1.8; /* Leitura confortável */

  p {
    margin-bottom: 1.5rem;
  }

  strong {
    color: ${({ theme }) => theme.palette.blue.dark};
  }
`;

// --- COMPOSIÇÃO DE IMAGEM (Lado Direito) ---
export const ImageWrapper = styled.div`
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: -1; /* Imagem vai para cima no mobile */
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.radius.sm};
  position: relative;
  z-index: 2;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

// Elemento decorativo quadrado atrás da imagem
export const DecorativeBox = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 60%;
  height: 60%;
  background-color: ${({ theme }) =>
    theme.palette.retro}; /* Cor Retro do tema */
  border-radius: ${({ theme }) => theme.radius.sm};
  z-index: 1;
`;

// Elemento decorativo de pontos ou linha
export const AccentLine = styled.div`
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 120px;
  height: 4px;
  background-color: ${({ theme }) => theme.palette.red};
  z-index: 3;
`;

// --- SEÇÃO DE DESTAQUES (Grid de Valores) ---
export const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.palette.gray[200]};
`;

export const HighlightItem = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.palette.blue.dark};
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: 0.9rem;
  }
`;

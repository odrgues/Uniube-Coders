import styled, { css } from "styled-components";

// Container Geral
export const PageContainer = styled.main`
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 4rem;
`;

// --- HERO SECTION (Mantendo consistência visual) ---
export const HeroSection = styled.div`
  background-color: ${({ theme }) => theme.palette.blue.dark};
  // padding: ${({ theme }) => `clamp(60px, 10vh, 100px) 0`};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.hero};
  color: ${({ theme }) => theme.palette.white};
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.palette.retro}; /* Detalhe em Retro/Cinza */
    font-style: italic;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.palette.gray[400]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 700px;
  margin: 0 auto;
`;

// --- O BLOCO DE CONTEÚDO (A linha inteira) ---
export const Block = styled.section`
  /* Layout Grid para controle preciso */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: clamp(40px, 8vw, 100px);

  /* Container fluido */
  ${({ theme }) => theme.layout.container};
  margin: 0 auto;

  /* Espaçamento vertical grande entre os blocos */
  padding: clamp(3rem, 5vw, 5rem) 0;

  /* No mobile, vira coluna única */
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;

    /* Inverte a ordem visualmente se necessário no mobile */
    /* O & > :first-child seleciona o primeiro elemento direto */
    display: flex;
    flex-direction: column;

    /* Se quiser que a imagem sempre venha primeiro no mobile: */
    ${({ $isReverse }) =>
      $isReverse &&
      css`
        flex-direction: column-reverse;
      `}
  }
`;

// --- ÁREA DE TEXTO ---
export const TextContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 2;
`;

// Número gigante decorativo atrás do texto (01, 02...)
export const BigNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.gray[200]}; /* Cor bem clara */
  opacity: 0.5;
  position: absolute;
  top: -6rem;
  left: -2rem;
  z-index: -1;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 6rem;
    top: -4rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.palette.blue.dark};
  position: relative;

  /* Detalhe de linha vermelha abaixo do título */
  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) => theme.palette.red};
    margin-top: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      margin: 10px auto 0 auto;
    }
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
  }
`;

// --- ÁREA DA IMAGEM ---
export const ImageWrapper = styled.div`
  position: relative;
  padding: 10px; /* Espaço para o efeito deslocado */
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

// O quadrado colorido atrás da imagem
export const ImageBackdrop = styled.div`
  position: absolute;
  /* Alterna a posição do quadrado dependendo da props $variant */
  top: ${({ $variant }) => ($variant === "even" ? "-10px" : "auto")};
  bottom: ${({ $variant }) => ($variant === "even" ? "auto" : "-10px")};
  right: ${({ $variant }) => ($variant === "even" ? "-10px" : "auto")};
  left: ${({ $variant }) => ($variant === "even" ? "auto" : "-10px")};

  width: 60%;
  height: 80%;
  background-color: ${({ theme, $variant }) =>
    $variant === "even" ? theme.palette.retro : theme.palette.blue.light};
  border-radius: ${({ theme }) => theme.radius.sm};
  z-index: 1;
`;

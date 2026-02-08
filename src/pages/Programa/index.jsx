import React from "react";
import { aboutProgramData } from "../../data/ProgramData.jsx";

// Importe uma imagem real do seu projeto aqui
//import codingImage from "../../assets/images/Home/Slider/image-1.jpg"; // Exemplo

import {
  PageContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  StorySection,
  TextColumn,
  SectionLabel,
  SectionHeading,
  StoryText,
  ImageWrapper,
  MainImage,
  DecorativeBox,
  AccentLine,
  HighlightsGrid,
  HighlightItem,
} from "./Programa.styles";

const Programa = () => {
  // Fallback caso não haja título no data
  const title = aboutProgramData?.title || "Transformando o Futuro";
  const subtitle =
    aboutProgramData?.subtitle ||
    "Uma jornada de código, inovação e aprendizado contínuo.";

  return (
    <PageContainer>
      {/* 1. HERO COM FUNDO ESCURO */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            Nossa <span>História</span>
          </HeroTitle>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* 2. CONTEÚDO PRINCIPAL SPLIT (Texto + Imagem) */}
      <StorySection>
        {/* Coluna de Texto */}
        <TextColumn>
          <div>
            <SectionLabel>Sobre Nós</SectionLabel>
            <SectionHeading>{title}</SectionHeading>
          </div>

          <StoryText>
            {/* Renderiza o conteúdo HTML ou Texto */}
            {aboutProgramData?.content ? (
              // Se for HTML/Componente
              <div>{aboutProgramData.content}</div>
            ) : (
              // Texto Exemplo caso esteja vazio
              <>
                <p>
                  A Uniube Coders nasceu da crença de que a tecnologia é a
                  ferramenta mais poderosa para transformar a realidade.
                  Começamos com uma pequena sala e um grande sonho: democratizar
                  o acesso ao conhecimento de programação de alto nível.
                </p>
                <p>
                  Ao longo dos anos, construímos uma comunidade vibrante onde{" "}
                  <strong>alunos se tornam mentores</strong>e ideias se
                  transformam em softwares que impactam vidas reais.
                </p>
              </>
            )}
          </StoryText>

          {/* Dados Rápidos (Opcional - dá autoridade) */}
          <HighlightsGrid>
            <HighlightItem>
              <h4>+5k</h4>
              <p>Alunos Impactados</p>
            </HighlightItem>
            <HighlightItem>
              <h4>100%</h4>
              <p>Dedicação ao Ensino</p>
            </HighlightItem>
            <HighlightItem>
              <h4>24/7</h4>
              <p>Comunidade Ativa</p>
            </HighlightItem>
          </HighlightsGrid>
        </TextColumn>

        {/* Coluna Visual */}
        <ImageWrapper>
          <DecorativeBox />
          {/* Se não tiver imagem importada, use um placeholder */}
          <MainImage
            src={
              aboutProgramData?.image ||
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
            alt="Equipe trabalhando junta"
          />
          <AccentLine />
        </ImageWrapper>
      </StorySection>
    </PageContainer>
  );
};

export default Programa;

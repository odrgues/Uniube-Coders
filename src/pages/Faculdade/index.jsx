import React from "react";
import { FaculdadeData } from "./data/faculdadeData";
import {
  PageContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  Block,
  TextContent,
  BigNumber,
  Title,
  Description,
  ImageWrapper,
  StyledImage,
  ImageBackdrop,
} from "./styles/Faculdade.styles";

const Faculdade = () => {
  return (
    <PageContainer>
      {/* 1. Header da Página */}
      <HeroSection>
        <HeroTitle>
          Sobre a <span>Instituição</span>
        </HeroTitle>
        <HeroSubtitle>
          Tradição, infraestrutura de ponta e um olhar voltado para o futuro.
          Conheça os pilares que sustentam nossa excelência.
        </HeroSubtitle>
      </HeroSection>

      {/* 2. Loop dos Blocos */}
      {FaculdadeData.map((item, index) => {
        // Verifica se é par ou ímpar para alternar o layout
        const isEven = index % 2 === 0;
        // Formata o número (01, 02, etc)
        const numberLabel = `0${index + 1}`;

        return (
          <Block key={item.id || index} $isReverse={!isEven}>
            {isEven ? (
              // LAYOUT PAR: Texto na Esquerda, Imagem na Direita
              <>
                <TextContent>
                  <BigNumber>{numberLabel}</BigNumber>
                  <Title>{item.title}</Title>
                  <Description>{item.text}</Description>
                </TextContent>

                <ImageWrapper>
                  <ImageBackdrop $variant="even" />
                  <StyledImage src={item.image} alt={item.title} />
                </ImageWrapper>
              </>
            ) : (
              // LAYOUT ÍMPAR: Imagem na Esquerda, Texto na Direita
              <>
                <ImageWrapper>
                  <ImageBackdrop $variant="odd" />
                  <StyledImage src={item.image} alt={item.title} />
                </ImageWrapper>

                <TextContent>
                  <BigNumber>{numberLabel}</BigNumber>
                  <Title>{item.title}</Title>
                  <Description>{item.text}</Description>
                </TextContent>
              </>
            )}
          </Block>
        );
      })}
    </PageContainer>
  );
};

export default Faculdade;

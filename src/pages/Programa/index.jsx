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
  HighlightsGrid,
  HighlightCard,
  ImageColumn,
  ImageFrame,
  MainImage,
  DecorativeBox,
  AccentLine,
  CTASection,
  CTAContent,
  CTAButton,
} from "./styles/Programa.styles";

import { aboutProgramData, aboutProgramCards } from "./data/programData";

const Programa = () => {
  return (
    <PageContainer as="main">
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            Nossa <span>História</span>
          </HeroTitle>
          <HeroSubtitle>{aboutProgramData.subtitle}</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <StorySection aria-labelledby="programa-sobre">
        <TextColumn>
          <header>
            <SectionLabel>Sobre o Programa</SectionLabel>
            <SectionHeading id="programa-sobre">
              {aboutProgramData.title}
            </SectionHeading>
          </header>

          <StoryText>
            {aboutProgramData.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </StoryText>

          <HighlightsGrid aria-label="Destaques do programa">
            {aboutProgramCards.map((card) => (
              <HighlightCard key={card.title}>
                <span aria-hidden="true" className="icon">
                  {card.icon}
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </HighlightCard>
            ))}
          </HighlightsGrid>
        </TextColumn>

        <ImageColumn>
          <ImageFrame>
            <DecorativeBox aria-hidden="true" />
            <MainImage
              src={aboutProgramData.image}
              alt="Participantes do Uniube Coders em atividade"
              loading="lazy"
            />
            <AccentLine aria-hidden="true" />
          </ImageFrame>
        </ImageColumn>
      </StorySection>

      <CTASection aria-label="Chamada para ação">
        <CTAContent>
          <h2>Quer conhecer mais?</h2>
          <p>
            Veja como participar, acompanhar eventos e entrar na comunidade do
            Uniube Coders.
          </p>

          {/* Se você não tiver rota /contato, troque por um link real (ex: Instagram ou mailto) */}
          <CTAButton to="/contato">Entrar em contato</CTAButton>
        </CTAContent>
      </CTASection>
    </PageContainer>
  );
};

export default Programa;

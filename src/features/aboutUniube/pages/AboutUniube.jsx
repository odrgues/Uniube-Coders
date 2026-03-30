import { useEffect } from "react";
import Slider from "../../../shared/components/Slider";
import {
  AboutPageWrapper,
  Hero,
  Title,
  IntroText,
  TwoColumnSection,
  TextColumn,
  ImageColumn,
  SectionTitle,
  SectionText,
  FeaturedImage,
  SliderSection,
  SliderHeader,
  NasaSection,
  NasaCard,
  HighlightTag,
  InstagramSection,
  InstagramEmbedWrapper,
  ClosingSection,
  ClosingText,
} from "../styles/aboutUniube.styles";

import {
  introText,
  uniubeSectionTexts,
  nasaTexts,
  closingText,
  instagramEmbedUrl,
  featuredImages,
  marathonSlides,
} from "../data/uniubeContent";

function AboutUniube() {
  useEffect(() => {
    const processInstagramEmbeds = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]',
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = processInstagramEmbeds;
      document.body.appendChild(script);
    } else {
      processInstagramEmbeds();
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AboutPageWrapper>
      <Hero>
        <Title>Universidade e tecnologia além da teoria</Title>
        <IntroText>{introText}</IntroText>
      </Hero>

      <TwoColumnSection>
        <TextColumn>
          <SectionTitle>Uniube e seus cursos de tecnologia</SectionTitle>

          {uniubeSectionTexts.map((text, index) => (
            <SectionText key={index}>{text}</SectionText>
          ))}
        </TextColumn>

        <ImageColumn>
          <FeaturedImage
            src={featuredImages.uniubeTechImg}
            alt="Alunos e ambiente acadêmico ligados à tecnologia na Uniube"
            loading="eager"
            decoding="async"
          />
        </ImageColumn>
      </TwoColumnSection>

      <SliderSection>
        <SliderHeader>
          <SectionTitle>Nossas maratonas de programação</SectionTitle>
          <SectionText>
            As maratonas são momentos de desafio, criatividade e colaboração, em
            que os estudantes desenvolvem soluções, fortalecem o raciocínio
            lógico e vivenciam a tecnologia na prática.
          </SectionText>
        </SliderHeader>

        <Slider slides={marathonSlides} autoPlay interval={5000} />
      </SliderSection>

      <NasaSection>
        <NasaCard>
          <ImageColumn>
            <FeaturedImage
              src={featuredImages.nasaTeamImg}
              alt="Equipe participante do hackathon da NASA"
              loading="lazy"
              decoding="async"
            />
          </ImageColumn>

          <TextColumn>
            <HighlightTag>Destaque internacional</HighlightTag>

            <SectionTitle>
              Uma equipe que levou talento local ao cenário global
            </SectionTitle>

            {nasaTexts.map((text, index) => (
              <SectionText key={index}>{text}</SectionText>
            ))}
          </TextColumn>
        </NasaCard>
      </NasaSection>

      <InstagramSection>
        <SectionTitle>Universidade e tecnologia na prática.</SectionTitle>

        <SectionText>
          A 4ª Mostra Tech foi o momento em que ideias ganharam forma. Alunos
          apresentaram projetos reais e os melhores foram premiados, destacando
          talento, dedicação e inovação.
        </SectionText>

        <InstagramEmbedWrapper>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink={instagramEmbedUrl}
            data-instgrm-version="14"
          ></blockquote>
        </InstagramEmbedWrapper>
      </InstagramSection>

      <ClosingSection>
        <ClosingText>{closingText}</ClosingText>
      </ClosingSection>
    </AboutPageWrapper>
  );
}

export default AboutUniube;

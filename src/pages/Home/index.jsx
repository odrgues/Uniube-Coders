import Banner from "../../shared/Banner/Banner";
import Text from "../../shared/Text/Text";
import Slider from "../../shared/Slider/Slider";
import Card from "../../shared/Card/Card";

import {
  Page,
  SkipLink,
  Section,
  SectionHeader,
  CTASection,
  CTAContent,
  CTAButton,
} from "./styles/Home.styles";

import { homeIntroData } from "./data/homeTextData";
import { homeSliderImages } from "./data/homeSliderImagesData";
import { homeCards } from "./data/homeCardsData";

const Home = () => {
  return (
    <>
      <SkipLink href="#conteudo">Ir para o conteúdo principal</SkipLink>

      <Page id="conteudo" aria-label="Página inicial">
        <Banner />

        <Section aria-labelledby="home-sobre">
          <SectionHeader>
            <h2 id="home-sobre">Sobre o Uniube Coders</h2>
            <p>
              Conheça a iniciativa, os objetivos e os impactos que buscamos com
              tecnologia e comunidade.
            </p>
          </SectionHeader>

          <Text data={homeIntroData} />
        </Section>

        <Section aria-labelledby="home-galeria">
          <SectionHeader>
            <h2 id="home-galeria">Momentos e atividades</h2>
            <p>
              Um pouco do que acontece no programa — eventos, projetos,
              encontros e aprendizado.
            </p>
          </SectionHeader>

          <Slider images={homeSliderImages} interval={3500} />
        </Section>

        <Section aria-labelledby="home-destaques">
          <SectionHeader>
            <h2 id="home-destaques">Destaques</h2>
            <p>
              O que você encontra no Uniube Coders — prática, comunidade e
              impacto.
            </p>
          </SectionHeader>

          <Card items={homeCards} />
        </Section>

        <CTASection aria-label="Chamada para ação">
          <CTAContent>
            <h2>Quer entender melhor o projeto?</h2>
            <p>
              Veja nossa história e como a iniciativa evolui com foco em prática
              e comunidade.
            </p>
            <CTAButton to="/programa">Conhecer a história</CTAButton>
          </CTAContent>
        </CTASection>
      </Page>
    </>
  );
};

export default Home;

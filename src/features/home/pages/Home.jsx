import Navbar from "../../../shared/components/NavBar";
import Banner from "../../../shared/components/Banner";
import Footer from "../../../shared/components/Footer";
import Container from "../../../shared/components/Container";
import Slider from "../../../shared/components/Slider";
import { homeSlides } from "../data/homeSliderContent";
import { highlights, homeIntro } from "../data/homeContent";
import {
  CTABox,
  CTAButton,
  Grid,
  HighlightCard,
  Section,
  SectionDescription,
  SectionEyebrow,
  SectionTitle,
} from "../styles/home.styles";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />

        <Section>
          <Container>
            <SectionEyebrow>{homeIntro.eyebrow}</SectionEyebrow>
            <SectionTitle>{homeIntro.title}</SectionTitle>
            <SectionDescription>{homeIntro.description}</SectionDescription>

            <Grid>
              {highlights.map((item) => (
                <HighlightCard key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </HighlightCard>
              ))}
            </Grid>
          </Container>
        </Section>

        <Section>
          <Container>
            <Slider slides={homeSlides} />
          </Container>
        </Section>

        <Section>
          <Container>
            <CTABox>
              <div>
                {/* <SectionEyebrow>O que estamos contruindo</SectionEyebrow> */}
                <SectionTitle>
                  Levando programação cada vez mais longe
                </SectionTitle>
                <SectionDescription>
                  A cada nova edição, o projeto alcança mais alunos, fortalece o
                  aprendizado e constrói novas oportunidades dentro das escolas.
                </SectionDescription>
              </div>

              <CTAButton to="/programa">Conhecer o projeto</CTAButton>
            </CTABox>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Home;

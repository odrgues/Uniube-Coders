import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";
import Container from "../../../shared/components/Container";
import { uniubeIntro } from "../data/uniubecontent";
import {
  HeroSection,
  ImageWrapper,
  IntroText,
  SectionEyebrow,
  SectionTitle,
  TextWrapper,
} from "../styles/aboutUniube.styles";

const AboutUniube = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection>
          <Container>
            <SectionEyebrow>{uniubeIntro.eyebrow}</SectionEyebrow>

            <SectionTitle>{uniubeIntro.title}</SectionTitle>

            <TextWrapper>
              {uniubeIntro.text.split("\n\n").map((paragraph) => (
                <IntroText key={paragraph}>{paragraph}</IntroText>
              ))}
            </TextWrapper>

            <ImageWrapper>
              <img src={uniubeIntro.image} alt={uniubeIntro.alt} />
            </ImageWrapper>
          </Container>
        </HeroSection>
      </main>
      <Footer />
    </>
  );
};

export default AboutUniube;

import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";
import Container from "../../../shared/components/Container";
import { projectBlocks, projectIntro } from "../data/projectContent";
import {
  BlockContent,
  BlockImage,
  BlockText,
  BlockTitle,
  ContentBlock,
  IntroSection,
  SectionEyebrow,
  SectionTitle,
} from "../styles/aboutProject.styles";

const AboutProject = () => {
  return (
    <>
      <Navbar />
      <main>
        <IntroSection>
          <Container>
            <SectionEyebrow>{projectIntro.eyebrow}</SectionEyebrow>
            <SectionTitle>{projectIntro.title}</SectionTitle>
          </Container>
        </IntroSection>

        <Container>
          {projectBlocks.map((block, index) => (
            <ContentBlock key={block.id} $reverse={index % 2 !== 0}>
              <BlockContent>
                <BlockTitle>{block.title}</BlockTitle>
                <BlockText>{block.text}</BlockText>
              </BlockContent>

              <BlockImage>
                <img src={block.image} alt={block.alt} />
              </BlockImage>
            </ContentBlock>
          ))}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default AboutProject;

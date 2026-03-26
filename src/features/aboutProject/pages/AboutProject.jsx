import Navbar from "../../../shared/components/NavBar";
import Footer from "../../../shared/components/Footer";
import Container from "../../../shared/components/Container";
import {
  projectBlocks,
  projectClosing,
  projectHighlights,
  projectIntro,
} from "../data/projectContent";

import {
  AccentCard,
  AccentText,
  BlockContent,
  BlockImage,
  BlockKicker,
  BlockSupport,
  BlockText,
  BlockTitle,
  ClosingCard,
  ClosingSection,
  ClosingText,
  ClosingTitle,
  ContentBlock,
  HighlightCard,
  HighlightGrid,
  HighlightText,
  HighlightTitle,
  IntroBadge,
  IntroLead,
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
            <IntroBadge>{projectIntro.badge}</IntroBadge>
            <SectionTitle>{projectIntro.title}</SectionTitle>
            <IntroLead>{projectIntro.lead}</IntroLead>

            <HighlightGrid>
              {projectHighlights.map((item) => (
                <HighlightCard key={item.title}>
                  <HighlightTitle>{item.title}</HighlightTitle>
                  <HighlightText>{item.text}</HighlightText>
                </HighlightCard>
              ))}
            </HighlightGrid>
          </Container>
        </IntroSection>

        <Container>
          {projectBlocks.map((block, index) => (
            <ContentBlock key={block.id} $reverse={index % 2 !== 0}>
              <BlockContent>
                <BlockKicker>{block.kicker}</BlockKicker>
                <BlockTitle>{block.title}</BlockTitle>
                <BlockText>{block.text}</BlockText>
                <BlockSupport>{block.support}</BlockSupport>
              </BlockContent>

              {block.image ? (
                <BlockImage>
                  <img src={block.image} alt={block.alt} />
                </BlockImage>
              ) : (
                <AccentCard>
                  <AccentText>{block.spotlight}</AccentText>
                </AccentCard>
              )}
            </ContentBlock>
          ))}
        </Container>

        <ClosingSection>
          <Container>
            <ClosingCard>
              <ClosingTitle>{projectClosing.title}</ClosingTitle>
              <ClosingText>{projectClosing.text}</ClosingText>
            </ClosingCard>
          </Container>
        </ClosingSection>
      </main>

      <Footer />
    </>
  );
};

export default AboutProject;

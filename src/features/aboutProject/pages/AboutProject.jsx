import Navbar from "../../../shared/components/NavBar";
import Footer from "../../../shared/components/Footer";
import Container from "../../../shared/components/Container";

import {
  projectClosing,
  projectHighlights,
  projectIntro,
  projectSections,
  projectStatement,
} from "../data/projectContent";

import {
  ClosingSection,
  ClosingText,
  HighlightCard,
  HighlightDescription,
  HighlightGrid,
  HighlightTitle,
  IntroLead,
  IntroSection,
  SectionBlock,
  SectionContent,
  SectionEyebrow,
  SectionImage,
  SectionParagraph,
  SectionTitle,
  StatementBox,
  StatementEyebrow,
  StatementText,
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
            <IntroLead>{projectIntro.lead}</IntroLead>
          </Container>
        </IntroSection>

        <Container>
          {projectSections.map((section) => (
            <SectionBlock key={section.id} $reverse={section.reverse}>
              <SectionContent>
                <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
                <SectionTitle as="h2">{section.title}</SectionTitle>

                {section.text.map((paragraph, index) => (
                  <SectionParagraph key={index}>{paragraph}</SectionParagraph>
                ))}
              </SectionContent>

              <SectionImage>
                <img src={section.image} alt={section.alt} />
              </SectionImage>
            </SectionBlock>
          ))}
        </Container>

        <StatementBox>
          <Container>
            <StatementEyebrow>{projectStatement.eyebrow}</StatementEyebrow>
            <StatementText>{projectStatement.text}</StatementText>
          </Container>
        </StatementBox>

        <Container>
          <HighlightGrid>
            {projectHighlights.map((item) => (
              <HighlightCard key={item.title}>
                <HighlightTitle>{item.title}</HighlightTitle>
                <HighlightDescription>{item.description}</HighlightDescription>
              </HighlightCard>
            ))}
          </HighlightGrid>
        </Container>

        <ClosingSection>
          <Container>
            <ClosingText>{projectClosing.text}</ClosingText>
          </Container>
        </ClosingSection>
      </main>

      <Footer />
    </>
  );
};

export default AboutProject;

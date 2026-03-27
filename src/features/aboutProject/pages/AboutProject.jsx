import Navbar from "../../../shared/components/NavBar";
import Footer from "../../../shared/components/Footer";
import Container from "../../../shared/components/Container";

import {
  finalBlock,
  galleryIntro,
  projectClosing,
  projectIntro,
  projectOverview,
  projectStatement,
} from "../data/projectContent";

import {
  ClosingSection,
  ClosingText,
  FinalBlock,
  FinalContent,
  FinalImage,
  GalleryHeader,
  HeroImage,
  HeroSection,
  IntroLead,
  IntroSection,
  OverviewCard,
  OverviewGrid,
  SectionEyebrow,
  SectionText,
  SectionTitle,
  StatementSection,
  StatementText,
} from "../styles/aboutProject.styles";

const AboutProject = () => {
  return (
    <>
      <Navbar />

      <main>
        <IntroSection>
          <Container>
            <HeroSection>
              <SectionEyebrow>{projectIntro.eyebrow}</SectionEyebrow>
              <SectionTitle>{projectIntro.title}</SectionTitle>
              <IntroLead>{projectIntro.lead}</IntroLead>

              <HeroImage>
                <img src={projectIntro.heroImage} alt={projectIntro.heroAlt} />
              </HeroImage>
            </HeroSection>
          </Container>
        </IntroSection>

        <Container>
          <OverviewGrid>
            {projectOverview.map((item) => (
              <OverviewCard key={item.id}>
                <SectionTitle as="h2">{item.title}</SectionTitle>
                <SectionText>{item.text}</SectionText>
              </OverviewCard>
            ))}
          </OverviewGrid>
        </Container>

        <StatementSection>
          <Container>
            <SectionEyebrow>{projectStatement.eyebrow}</SectionEyebrow>
            <StatementText>{projectStatement.text}</StatementText>
          </Container>
        </StatementSection>

        <Container>
          <GalleryHeader>
            <SectionEyebrow>{galleryIntro.eyebrow}</SectionEyebrow>
            <SectionTitle as="h2">{galleryIntro.title}</SectionTitle>
            <SectionText>{galleryIntro.description}</SectionText>
          </GalleryHeader>
        </Container>

        <Container>
          <FinalBlock>
            <FinalContent>
              <SectionEyebrow>{finalBlock.eyebrow}</SectionEyebrow>
              <SectionTitle as="h2">{finalBlock.title}</SectionTitle>
              <SectionText>{finalBlock.text}</SectionText>
              <SectionText>{finalBlock.support}</SectionText>
            </FinalContent>

            <FinalImage>
              <img src={finalBlock.image} alt={finalBlock.alt} />
            </FinalImage>
          </FinalBlock>
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

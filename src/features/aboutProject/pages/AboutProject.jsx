import Container from "../../../shared/components/Container";

import {
  finalBlock,
  galleryIntro,
  overviewGallery,
  overviewIntro,
  projectClosing,
  projectIntro,
  projectOverview,
  projectStatement,
} from "../data/projectContent";

import {
  ClosingSection,
  ClosingText,
  ContentSection,
  FinalBlock,
  FinalContent,
  FinalImage,
  GalleryHeader,
  HeroContent,
  HeroGrid,
  HeroImage,
  HeroSection,
  IntroLead,
  IntroSection,
  OverviewCard,
  OverviewGallery,
  OverviewGrid,
  SectionEyebrow,
  SectionText,
  SectionTitle,
  StatementSection,
  StatementText,
  SupportText,
} from "../styles/aboutProject.styles";

const AboutProject = () => {
  return (
    <>
      <IntroSection>
        <Container>
          <HeroSection>
            <HeroGrid>
              <HeroContent>
                <SectionEyebrow>{projectIntro.eyebrow}</SectionEyebrow>
                <SectionTitle>{projectIntro.title}</SectionTitle>
                <IntroLead>{projectIntro.lead}</IntroLead>
              </HeroContent>

              <HeroImage>
                <img src={projectIntro.heroImage} alt={projectIntro.heroAlt} />
              </HeroImage>
            </HeroGrid>
          </HeroSection>
        </Container>
      </IntroSection>

      <ContentSection>
        <Container>
          <GalleryHeader>
            <SectionEyebrow>{overviewIntro.eyebrow}</SectionEyebrow>
            <SectionTitle as="h2">{overviewIntro.title}</SectionTitle>
            <SectionText>{overviewIntro.text}</SectionText>
          </GalleryHeader>

          <OverviewGrid>
            {projectOverview.map((item) => (
              <OverviewCard key={item.id}>
                {item.eyebrow && (
                  <SectionEyebrow>{item.eyebrow}</SectionEyebrow>
                )}
                <SectionTitle as="h3">{item.title}</SectionTitle>
                <SectionText>{item.text}</SectionText>
              </OverviewCard>
            ))}
          </OverviewGrid>

          <OverviewGallery>
            <img src={overviewGallery.image} alt={overviewGallery.alt} />
          </OverviewGallery>
        </Container>
      </ContentSection>

      <StatementSection>
        <Container>
          <SectionEyebrow>{projectStatement.eyebrow}</SectionEyebrow>
          <StatementText>{projectStatement.text}</StatementText>
        </Container>
      </StatementSection>

      <ContentSection>
        <Container>
          <GalleryHeader>
            <SectionEyebrow>{galleryIntro.eyebrow}</SectionEyebrow>
            <SectionTitle as="h2">{galleryIntro.title}</SectionTitle>
            <SectionText>{galleryIntro.description}</SectionText>
          </GalleryHeader>

          <FinalBlock>
            <FinalContent>
              <SectionEyebrow>{finalBlock.eyebrow}</SectionEyebrow>
              <SectionTitle as="h2">{finalBlock.title}</SectionTitle>
              <SectionText>{finalBlock.text}</SectionText>
              <SupportText>{finalBlock.support}</SupportText>
            </FinalContent>

            <FinalImage>
              <img src={finalBlock.image} alt={finalBlock.alt} />
            </FinalImage>
          </FinalBlock>
        </Container>
      </ContentSection>

      <ClosingSection>
        <Container>
          <ClosingText>{projectClosing.text}</ClosingText>
        </Container>
      </ClosingSection>
    </>
  );
};

export default AboutProject;

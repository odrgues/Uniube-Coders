import {
  SectionWrapper,
  Section,
  Card as StyledCard,
  CardImage,
  CardTitle,
  CardText,
} from "./styles";

const Card = ({ title, text, icon }) => {
  return (
    <StyledCard>
      {icon && <CardImage src={icon} alt={title} />}
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </StyledCard>
  );
};

const InfoCards = ({ items }) => {
  return (
    <SectionWrapper>
      <Section>
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            text={item.text}
            icon={item.img}
          />
        ))}
      </Section>
    </SectionWrapper>
  );
};

export default InfoCards;

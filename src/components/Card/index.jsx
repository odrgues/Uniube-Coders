import {
  SectionWrapper,
  Section,
  Card as StyledCard,
  CardIcon,
  CardTitle,
  CardText,
} from "./Card.styles";

const Card = ({ title, text, icon: Icon }) => {
  return (
    <StyledCard>
      {Icon && (
        <CardIcon>
          <Icon />
        </CardIcon>
      )}
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </StyledCard>
  );
};

const CardContent = ({ items = [] }) => {
  return (
    <SectionWrapper>
      <Section>
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </Section>
    </SectionWrapper>
  );
};

export default CardContent;

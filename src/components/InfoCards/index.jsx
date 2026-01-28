import {
  SectionWrapper,
  Section,
  Card,
  CardImage,
  CardTitle,
  CardText,
} from "./styles";

const InfoCards = ({ items }) => {
  return (
    <SectionWrapper>
      <Section>
        {items.map((item, index) => (
          <Card key={index}>
            <CardImage src={item.img} alt={item.alt} />
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.text}</CardText>
          </Card>
        ))}
      </Section>
    </SectionWrapper>
  );
};

export default InfoCards;

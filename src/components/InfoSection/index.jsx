import { Section, Image, TextContainer, Title, Text } from "./styles";

const InfoSection = ({ title, text, img, alt }) => {
  return (
    <Section>
      <Image src={img} alt={alt} />
      <TextContainer>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextContainer>
    </Section>
  );
};
export default InfoSection;

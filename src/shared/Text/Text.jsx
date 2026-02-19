import {
  Container,
  TextContent,
  Title,
  Description,
  StatsGrid,
  StatItem,
  StatNumber,
  StatLabel,
} from "./Text.styles";

const Text = ({ data }) => {
  const title = data?.title ?? "";
  const text = data?.text ?? "";
  const numbers = Array.isArray(data?.numbers) ? data.numbers : [];

  if (!title && !text && numbers.length === 0) return null;

  return (
    <Container aria-label="Resumo do Uniube Coders">
      <TextContent>
        {title && <Title>{title}</Title>}
        {text && <Description>{text}</Description>}
      </TextContent>

      {numbers.length > 0 && (
        <StatsGrid aria-label="Destaques">
          {numbers.map((item) => (
            <StatItem key={item.label}>
              <StatNumber>{item.value}</StatNumber>
              <StatLabel>{item.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      )}
    </Container>
  );
};

export default Text;

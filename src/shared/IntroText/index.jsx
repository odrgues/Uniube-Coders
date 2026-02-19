import React from "react";
import {
  Container,
  TextContent,
  Title,
  Description,
  StatsGrid,
  StatItem,
  StatNumber,
  StatLabel,
} from "./IntroText.styles";

const IntroText = ({ data }) => {
  return (
    <>
      <Container>
        <TextContent>
          <Title>{data.title}</Title>
          <Description>{data.text}</Description>
        </TextContent>

        <StatsGrid>
          {data.numbers.map((number) => (
            <StatItem key={number.label}>
              <StatNumber>{number.value}</StatNumber>
              <StatLabel>{number.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      </Container>
    </>
  );
};

export default IntroText;

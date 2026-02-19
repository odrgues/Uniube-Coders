import { Background, Container, Title, Subtitle } from "./Banner.styles";

const Banner = () => {
  return (
    <Background>
      <Container>
        <Title>
          Boas-vindas ao <span>Uniube Coders</span>
        </Title>
        <Subtitle>
          Projeto de formação de desenvolvedores que vai além do código.
        </Subtitle>
      </Container>
    </Background>
  );
};

export default Banner;

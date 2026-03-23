import ParticlesBackground from "../ParticlesBackground";
import { Background, Content, Subtitle, Title } from "./styles";

const Banner = () => {
  return (
    <Background aria-label="Seção de boas-vindas">
      <ParticlesBackground />

      <Content>
        <Title>
          Boas-vindas ao <span>Uniube Coders</span>
        </Title>

        <Subtitle>
          Projeto de formação de desenvolvedores com visão prática, criatividade
          e base para crescer junto com a tecnologia.
        </Subtitle>
      </Content>
    </Background>
  );
};

export default Banner;

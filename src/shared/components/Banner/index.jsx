import ParticlesBackground from "../ParticlesBackground";
import {
  Background,
  BackgroundLayer,
  Content,
  Subtitle,
  Title,
} from "./styles";

const Banner = () => {
  return (
    <Background aria-label="Seção de boas-vindas">
      <BackgroundLayer>
        <ParticlesBackground />
      </BackgroundLayer>

      <Content>
        <Title>
          Boas-vindas ao <span>Uniube Coders</span>
        </Title>

        <Subtitle>
          Projeto de formação em tecnologia com foco na prática, criatividade e
          construção real de conhecimento.
        </Subtitle>
      </Content>
    </Background>
  );
};

export default Banner;

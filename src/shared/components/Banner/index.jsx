import { useEffect, useState } from "react";
import ParticlesBackground from "../ParticlesBackground";
import {
  Background,
  BackgroundLayer,
  Content,
  Subtitle,
  Title,
  TypedWrap,
  TypedText,
  Cursor,
} from "./styles";

const fullText = "Uniube Coders";

const Banner = () => {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;
    let interval;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setTyped(fullText.slice(0, index + 1));
        index += 1;

        if (index >= fullText.length) {
          clearInterval(interval);
        }
      }, 75);
    }, 450);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <Background aria-label="Seção de boas-vindas">
      <BackgroundLayer>
        <ParticlesBackground />
      </BackgroundLayer>

      <Content>
        <Title>
          Boas-vindas ao{" "}
          <span>
            <TypedWrap>
              <TypedText>{typed}</TypedText>
              <Cursor />
            </TypedWrap>
          </span>
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

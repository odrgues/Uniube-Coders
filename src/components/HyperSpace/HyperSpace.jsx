import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000; /* Fundo preto profundo */
  z-index: 0;
`;

const HyperSpace = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Configurações do efeito
    const lineCount = 200;
    const centerEmptyRadius = 100; // TAMANHO DO CENTRO LIMPO
    const lines = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Função para criar uma linha
    const createLine = () => ({
      angle: Math.random() * Math.PI * 2, // Ângulo radial
      radius: centerEmptyRadius + Math.random() * 50, // Começa perto do centro
      length: Math.random() * 50 + 10, // Comprimento da linha
      speed: Math.random() * 10 + 5, // Velocidade de saída
      opacity: Math.random(),
    });

    // Inicializa as linhas
    for (let i = 0; i < lineCount; i++) lines.push(createLine());

    const draw = () => {
      // Cria o efeito de "rastro" limpando o fundo com opacidade baixa
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      lines.forEach((line, index) => {
        // Calcula a posição da ponta inicial e final da linha
        const x1 = centerX + Math.cos(line.angle) * line.radius;
        const y1 = centerY + Math.sin(line.angle) * line.radius;
        const x2 = centerX + Math.cos(line.angle) * (line.radius + line.length);
        const y2 = centerY + Math.sin(line.angle) * (line.radius + line.length);

        // Desenha a linha
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity})`;
        ctx.lineWidth = 2;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // Move a linha para fora
        line.radius += line.speed;
        line.length += line.speed * 0.2; // A linha estica enquanto corre

        // Se a linha sair da tela, reseta ela para o centro
        if (line.radius > Math.max(canvas.width, canvas.height)) {
          lines[index] = createLine();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default HyperSpace;

import styled from "styled-components";

// Adicione este Container
export const Container = styled.div`
  position: relative; /* Isso prende o canvas dentro deste elemento */
  width: 100%;
  height: 100%; /* Ou altura fixa, se preferir */
  overflow: hidden; /* Garante que nada vase */
  z-index: 1;
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Fica atrás do conteúdo */
  pointer-events: none; /* Permite clicar no texto/botões que estão por cima */
`;

import styled from "styled-components";
import { media } from "../../assets/styles/media";

export const Background = styled.section`
  position: relative;
  width: 100%;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 4px;
  background: linear-gradient(to bottom, #dbeafe 0%, #1e40af 100%);
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 2; /* garante que o texto fique acima do fundo animado */
  text-align: center;
  padding: 0 16px;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.5px;

  @media ${media.md} {
    font-size: 2.2rem;
  }

  @media ${media.sm} {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.p`
  margin-top: 12px;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.85);

  @media ${media.sm} {
    font-size: 1rem;
  }
`;

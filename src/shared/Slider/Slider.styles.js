import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0.5; }
  to { opacity: 1; }
`;

export const SliderContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout?.container?.width || "1200px"};
  height: clamp(250px, 50vh, 700px);

  margin: ${({ theme }) => theme.spacing?.xl || "4rem"} auto 0;
  position: relative;

  border-radius: ${({ theme }) => theme.radius?.lg || "20px"};
  overflow: hidden;

  box-shadow: ${({ theme }) =>
    theme.shadows?.lg || "0 20px 40px rgba(0, 0, 0, 0.2)"};
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  position: absolute;
  inset: 0;

  opacity: 0;
  z-index: 0;
  transition: opacity 1s ease-in-out;

  ${({ $active }) =>
    $active &&
    css`
      opacity: 1;
      z-index: 10;
      animation: ${fadeIn} 0.6s ease-in-out;
    `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
  }
`;

export const DotsWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  display: inline-flex;
  gap: 12px;

  z-index: 20;

  padding: 8px 16px;
  background: ${({ theme }) =>
    theme.colors?.background?.overlay || "rgba(0, 0, 0, 0.3)"};
  backdrop-filter: blur(4px);
  border-radius: ${({ theme }) => theme.radius?.pill || "999px"};
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 999px;

  cursor: pointer;
  border: none;
  padding: 0;
  margin: 0;

  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  background-color: ${({ $active, theme }) =>
    $active ? theme.palette.blue.dark : "rgba(255, 255, 255, 0.5)"};

  &:hover {
    transform: scale(1.2);
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:focus-visible {
    outline: 3px solid rgba(255, 255, 255, 0.9);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

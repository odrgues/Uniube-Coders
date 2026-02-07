import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0.5; }
  to { opacity: 1; }
`;

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: clamp(250px, 50vh, 700px);
  margin: 4rem auto 0;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
  z-index: 0;
  transition: opacity 1s ease-in-out;

  ${(props) =>
    props.$active &&
    css`
      opacity: 1;
      z-index: 10;
      animation: ${fadeIn} 3s ease-in-out;
    `}
`;

export const DotsWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: 12px;

  z-index: 20;

  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 20px;
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  padding: 0;
  margin: 0;
  transition: all 0.3s ease;

  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.brand.action : "rgba(255, 255, 255, 0.5)"};

  &:hover {
    transform: scale(1.2);
    background-color: #fff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`;

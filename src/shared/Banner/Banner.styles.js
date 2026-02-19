import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

export const Background = styled.section`
  width: 100%;
  min-height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.layout.navbar.height};
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.container || "1200px"};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.palette.blue.dark};
  background-color: ${({ theme }) => theme.colors.background.main};
  line-height: 1.1;
  word-wrap: break-word;
  margin: 0;
  padding: 0;
  opacity: 0;
  animation: ${slideInLeft} 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;

  span {
    color: ${({ theme }) => theme.palette.blue.primary};
  }
`;

export const Subtitle = styled.p`
  font-size: clamp(0.875rem, 1.5vw + 0.5rem, 1.25rem);
  background-color: ${({ theme }) => theme.colors.background.main};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.brand.highlight};

  line-height: 1.5;
  max-width: 800px;

  padding: 0;
  margin: 0;

  opacity: 0;
  animation: ${slideInLeft} 1s cubic-bezier(0.2, 0.5, 0.5, 1) forwards;
  animation-delay: 0.3s;
`;

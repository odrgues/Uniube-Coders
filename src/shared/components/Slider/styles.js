import styled from "styled-components";

export const SliderWrapper = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  background: #dbeafe;
`;

export const Track = styled.div`
  display: flex;
  transition: transform 0.55s ease;
  will-change: transform;
`;

export const Slide = styled.article`
  min-width: 100%;
  position: relative;
  height: clamp(320px, 48vw, 560px);
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(8, 17, 32, 0.1) 0%,
    rgba(8, 17, 32, 0.35) 45%,
    rgba(8, 17, 32, 0.75) 100%
  );
`;

export const TextContent = styled.div`
  position: absolute;
  left: clamp(20px, 4vw, 40px);
  right: clamp(20px, 4vw, 40px);
  bottom: clamp(20px, 4vw, 40px);
  z-index: 2;
  color: ${({ theme }) => theme.colors.text.inverse};
  max-width: 60ch;

  span {
    display: inline-block;
    margin-bottom: 0.75rem;
    padding: 0.42rem 0.85rem;
    border-radius: ${({ theme }) => theme.radius.full};
    background: rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(10px);
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: 1.08;
    margin-bottom: 0.85rem;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: rgba(255, 255, 255, 0.88);
    max-width: 52ch;
  }
`;

export const Controls = styled.div`
  position: absolute;
  right: clamp(16px, 3vw, 28px);
  bottom: clamp(16px, 3vw, 28px);
  z-index: 3;
  display: flex;
  gap: 0.75rem;
`;

export const ArrowButton = styled.button`
  width: 46px;
  height: 46px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(255, 255, 255, 0.14);
  color: ${({ theme }) => theme.colors.text.inverse};
  backdrop-filter: blur(10px);
  font-size: 1.1rem;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.22);
  }
`;

export const Dots = styled.div`
  position: absolute;
  left: clamp(16px, 3vw, 28px);
  bottom: clamp(20px, 3vw, 30px);
  z-index: 3;
  display: flex;
  gap: 0.6rem;
`;

export const Dot = styled.button`
  width: ${({ $active }) => ($active ? "28px" : "10px")};
  height: 10px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $active }) =>
    $active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.36)"};
  transition: 0.25s ease;
`;

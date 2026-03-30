import styled from "styled-components";

export const SliderWrapper = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  background: ${({ theme }) => theme.colors.bg.soft};
  isolation: isolate;
`;

export const Track = styled.div`
  display: flex;
  transform: translateX(-${({ $current }) => $current * 100}%);
  transition: transform 0.45s ease;
  will-change: transform;
`;

export const Slide = styled.article`
  min-width: 100%;
  position: relative;
  height: clamp(220px, 34vw, 420px);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: clamp(240px, 44vw, 380px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: clamp(220px, 56vw, 340px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: clamp(200px, 66vw, 300px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.01);
`;

export const TextContent = styled.div`
  position: absolute;
  left: clamp(14px, 2.5vw, 28px);
  right: clamp(14px, 2.5vw, 28px);
  bottom: clamp(14px, 2.5vw, 28px);
  z-index: 2;

  color: ${({ theme }) => theme.colors.text.inverse};
  max-width: min(48ch, 62%);
  padding: clamp(10px, 1.5vw, 14px);

  span {
    display: inline-block;
    margin-bottom: 0.35rem;
    padding: 0.3rem 0.65rem;
    border-radius: ${({ theme }) => theme.radius.full};
    background: rgba(255, 255, 255, 0.16);

    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 0.75rem;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  h3 {
    margin: 0 0 0.4rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(1.05rem, 0.9rem + 0.6vw, 1.5rem);
    line-height: 1.12;
    text-wrap: balance;
  }

  p {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: clamp(0.84rem, 0.82rem + 0.15vw, 0.95rem);
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
    max-width: 40ch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
    bottom: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 10px;

    h3 {
      margin-bottom: 0.25rem;
    }

    p {
      max-width: 100%;
    }
  }
`;

export const Controls = styled.div`
  position: absolute;
  right: clamp(12px, 2vw, 20px);
  bottom: clamp(12px, 2vw, 20px);
  z-index: 3;
  display: flex;
  gap: 0.4rem;
`;

export const ArrowButton = styled.button`
  width: clamp(28px, 2.4vw, 34px);
  height: clamp(28px, 2.4vw, 34px);
  display: grid;
  place-items: center;

  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(255, 255, 255, 0.14);
  color: ${({ theme }) => theme.colors.text.inverse};
  backdrop-filter: blur(8px);

  font-size: 0.9rem;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.22);
  }
`;

export const Dots = styled.div`
  position: absolute;
  left: clamp(12px, 2vw, 20px);
  bottom: clamp(14px, 2vw, 22px);
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  max-width: calc(100% - 90px);
`;

export const Dot = styled.button`
  width: ${({ $active }) => ($active ? "14px" : "6px")};
  height: 6px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $active }) =>
    $active ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.4)"};
  transition: 0.22s ease;
`;

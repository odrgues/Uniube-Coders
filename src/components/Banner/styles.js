import styled from "styled-components";
import { breakpoints } from "../../assets/styles/breakpoints";

export const Background = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: ${({ theme }) => theme.sizes.headerHeight};
  background: #8fabd4;
  z-index: -1;
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 16px;
  width: 100%;
  height: auto;
  max-width: 900px;
`;

export const Title = styled.h1`
  font-size: 8rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.5px;

  @media ${breakpoints.md} {
    font-size: 5rem;
  }

  @media ${breakpoints.sm} {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  margin-top: 12px;
  font-size: 2.8rem;
  color: rgba(255, 255, 255, 0.85);

  @media ${breakpoints.md} {
    font-size: 2rem;
  }

  @media ${breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  background-color: #161e54;
  position: relative;
  z-index: 2;
  margin-top: -300px;
`;

export const Section = styled.section`
  display: flex;
  gap: 52px;
  padding: 80px 16px;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  background-color: #ff986a;
  border-radius: 16px;
  padding: 32px 24px;
  flex: 1;
  max-width: 360px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 220px;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
`;

export const CardText = styled.p`
  margin-top: 12px;
  font-size: 1rem;
  line-height: 1.6;
  color: #d1d5db;
`;

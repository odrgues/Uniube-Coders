import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 48px;
  background: "#030712";
  padding: 80px 16px;
  max-width: 1200px;
  margin: 0 auto;
 
    flex-direction: column;
    text-align: center;
  }
`;

export const Image = styled.img`
  flex: 1;
  width: 100%;
  max-width: 480px;
  border-radius: 12px;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #0a2540;
`;

export const Text = styled.p`
  margin-top: 16px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #green;
`;

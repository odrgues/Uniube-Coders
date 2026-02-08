import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.palette.blue.dark};
  padding: 3.5rem 1rem;
  margin-top: 3rem;
  position: relative;

  overflow-x: hidden;
`;

export const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LogoImage = styled.img`
  width: 150px;
  height: auto;
  object-fit: contain;
`;

export const Tagline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
    white-space: nowrap;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: center;

  flex-wrap: wrap;
  justify-content: center;
`;

export const ContactItem = styled.li`
  a {
    color: #e0e6ed;
    font-size: 0.85rem;
    font-family: ${({ theme }) => theme.fonts.body};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;

    white-space: nowrap;

    svg {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.brand?.primary || "#ff3f33"};
      flex-shrink: 0;
    }

    &:hover {
      color: #fff;
      transform: translateY(-2px);
    }

    span {
      @media (max-width: 900px) {
        display: none;
      }
    }
  }
`;

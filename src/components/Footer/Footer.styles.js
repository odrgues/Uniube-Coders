import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.background.secondary || "#ACBFA4"};
  padding: 4rem 0 2rem 0; /* Mais espaço no topo, menos embaixo */
  margin-top: 4rem;
`;

// Wrapper que segura o conteúdo e limita a largura
export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 3rem; /* Distância entre a parte de cima e o copyright */
`;

// A parte superior onde ficam Esquerda e Direita
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap; /* Garante que quebre linha se faltar espaço */
  gap: 2rem;

  /* No mobile, vira uma coluna só */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center; /* Centraliza tudo no celular */
    align-items: center;
  }
`;

// --- LADO ESQUERDO ---
export const LeftSide = styled.div`
  max-width: 40%; /* Limita a largura do texto */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center; /* Garante alinhamento no mobile */
  }
`;

export const LogoImage = styled.img`
  width: 200px;
  height: auto;
  /* Se não tiver logo, pode remover ou deixar placeholder */
`;

export const Tagline = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  font-size: 1rem;
`;

// --- LADO DIREITO (CONTATOS) ---
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* No desktop alinha à direita (opcional, ou deixa left mesmo) */
  /* text-align: right; e align-items: flex-end; se quiser forçar direita */
`;

export const ContactTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: black;
  font-size: 1.5rem;
  margin: 0;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
  }
`;

export const ContactItem = styled.li`
  a {
    color: black;

    //color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1.05rem;
    font-family: ${({ theme }) => theme.fonts.body};
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    gap: 10px; /* Espaço entre icone e texto */

    &:hover {
      color: ${({ theme }) => theme.colors.brand.action};
    }
  }
`;

// --- PARTE INFERIOR (COPYRIGHT) ---
export const BottomSection = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgb(208, 8, 226); /* Linha divisória sutil */
`;

export const Copyright = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  opacity: 0.6;
  margin: 0;
`;

import React from "react";
import logoImg from "../../assets/images/logo.png";
import { IoCallOutline } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import {
  FooterContainer,
  ContentWrapper,
  TopSection,
  LeftSide,
  LogoImage,
  Tagline,
  RightSide,
  ContactTitle,
  ContactList,
  ContactItem,
  BottomSection,
  Copyright,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <TopSection>
          <LeftSide>
            <LogoImage src={logoImg} alt="Uniube Coders" />

            <Tagline>
              Transformando sonhos em código, uma linha por vez. Junte-se a nós
              nessa jornada pelo universo da programação.
            </Tagline>
          </LeftSide>

          <RightSide>
            <ContactTitle>Fale Conosco</ContactTitle>
            <ContactList>
              <ContactItem>
                <a href="mailto:atendimento@uniube.br">
                  <MdAttachEmail /> atendimento@uniube.br
                </a>
              </ContactItem>
              <ContactItem>
                <a href="tel:+5534999999999">
                  <IoCallOutline /> (34) 99999-9999
                </a>
              </ContactItem>
              <ContactItem>
                <a
                  href="https://www.instagram.com/uniubeoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram /> @uniube
                </a>
              </ContactItem>
              <ContactItem>
                <a
                  href="https://www.linkedin.com/school/uniubeoficial/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </ContactItem>
            </ContactList>
          </RightSide>
        </TopSection>

        <BottomSection>
          <Copyright>
            &copy; 2026 Uniube Coders. Todos os direitos reservados.
          </Copyright>
        </BottomSection>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;

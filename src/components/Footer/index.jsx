import React from "react";
import logoImg from "../../assets/images/logo_branca.png";

// Ícones
import { IoCallOutline } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import {
  FooterContainer,
  ContentWrapper,
  LeftSide,
  LogoImage,
  Tagline,
  RightSide,
  ContactList,
  ContactItem,
} from "./Footer.styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <ContentWrapper>
        <LeftSide>
          <LogoImage src={logoImg} alt="Uniube Coders" />

          <Tagline>
            <span>&copy; {currentYear} Uniube Coders.</span>
          </Tagline>
        </LeftSide>

        <RightSide>
          <ContactList>
            {/* Email */}
            <ContactItem>
              <a href="mailto:atendimento@uniube.br" aria-label="Email">
                <MdAttachEmail />
                <span>atendimento@uniube.br</span>
              </a>
            </ContactItem>

            <ContactItem>
              <a href="tel:+5534999999999" aria-label="Telefone">
                <IoCallOutline />
                <span>(34) 99999-9999</span>
              </a>
            </ContactItem>

            <ContactItem>
              <a
                href="https://www.instagram.com/uniubeoficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
                <span>@uniube</span>
              </a>
            </ContactItem>

            <ContactItem>
              <a
                href="https://www.linkedin.com/school/uniubeoficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />

                <span>LinkedIn</span>
              </a>
            </ContactItem>
          </ContactList>
        </RightSide>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;

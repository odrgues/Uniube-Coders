import Container from "../Container";
import {
  Bottom,
  Brand,
  Column,
  FooterWrapper,
  Grid,
  Logo,
  Social,
} from "./styles";

import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import logo from "../../../assets/images/logo-uniube.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Grid>
          <Column>
            <Brand>
              <Logo src={logo} alt="Uniube Coders" />
            </Brand>

            <p>
              Projeto acadêmico focado em desenvolvimento, prática e tecnologia.
            </p>
          </Column>

          <Column $hideOnMobile>
            <h4>Links</h4>
            <a href="/">Home</a>
            <a href="/programa">Sobre o projeto</a>
            <a href="/faculdade">Uniube</a>
          </Column>

          <Column>
            <h4>Contato</h4>

            <span>
              <FaEnvelope /> contato@uniube.com
            </span>

            <span>
              <FaPhone /> (34) 1234-5678
            </span>
          </Column>

          <Column>
            <h4>Redes</h4>

            <Social>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </Social>
          </Column>
        </Grid>

        <Bottom>
          © {new Date().getFullYear()} Uniube Coders — Projeto acadêmico
        </Bottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

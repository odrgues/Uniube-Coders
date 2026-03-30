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

import { FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";
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
              <TbWorldSearch />
              <a
                href="https://uniube.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                uniube.com.br
              </a>
            </span>

            <span>
              <FaPhone /> (34) 3319-6600
            </span>
          </Column>

          <Column>
            <h4>Redes</h4>

            <Social>
              <a
                href="https://www.instagram.com/uniubeoficial/"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/school/uniubeoficial/posts/?feedView=all"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </Social>
          </Column>
        </Grid>

        <Bottom>
          © {new Date().getFullYear()} Uniube Coders - Projeto acadêmico
        </Bottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

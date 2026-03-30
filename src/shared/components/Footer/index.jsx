import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";

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
            <Link to="/">Home</Link>
            <Link to="/sobre-o-projeto">Sobre o projeto</Link>
            <Link to="/uniube">Uniube</Link>
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
                uniube.br
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
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Uniube"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/school/uniubeoficial/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Uniube"
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

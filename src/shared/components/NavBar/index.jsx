import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Backdrop,
  Brand,
  DesktopNav,
  MenuButton,
  MobilePanel,
  NavInner,
  NavbarWrapper,
  NavLinkItem,
} from "./styles";
import logo from "../../../assets/images/logo-uniube.png";
import Container from "../Container";

const links = [
  { to: "/", label: "Home" },
  { to: "/programa", label: "Sobre o projeto" },
  { to: "/faculdade", label: "Uniube" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <NavbarWrapper $scrolled={scrolled}>
        <Container>
          <NavInner>
            <Brand to="/">
              <img src={logo} alt="Uniube Coders" />
            </Brand>

            <DesktopNav>
              {links.map((link) => (
                <NavLinkItem
                  key={link.to}
                  to={link.to}
                  $active={location.pathname === link.to}
                >
                  {link.label}
                </NavLinkItem>
              ))}
            </DesktopNav>

            <MenuButton
              type="button"
              aria-label="Abrir menu"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </MenuButton>
          </NavInner>
        </Container>
      </NavbarWrapper>

      <Backdrop $open={mobileOpen} onClick={() => setMobileOpen(false)} />

      <MobilePanel $open={mobileOpen}>
        {links.map((link) => (
          <NavLinkItem
            key={link.to}
            to={link.to}
            $active={location.pathname === link.to}
          >
            {link.label}
          </NavLinkItem>
        ))}
      </MobilePanel>
    </>
  );
};

export default Navbar;

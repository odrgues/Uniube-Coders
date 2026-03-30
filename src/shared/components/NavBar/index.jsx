import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
  { to: "/sobre-o-projeto", label: "Sobre o projeto" },
  { to: "/uniube", label: "Uniube" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isSolid = !isHome || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const handleToggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <NavbarWrapper $solid={isSolid}>
        <Container>
          <NavInner>
            <Brand
              to="/"
              aria-label="Ir para a página inicial"
              $solid={isSolid}
            >
              <img src={logo} alt="Uniube Coders" />
            </Brand>

            <DesktopNav aria-label="Navegação principal">
              {links.map((link) => (
                <NavLinkItem
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  $solid={isSolid}
                  onClick={handleCloseMenu}
                >
                  {link.label}
                </NavLinkItem>
              ))}
            </DesktopNav>

            <MenuButton
              type="button"
              $solid={isSolid}
              $open={mobileOpen}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={handleToggleMenu}
            >
              <span />
              <span />
              <span />
            </MenuButton>
          </NavInner>
        </Container>
      </NavbarWrapper>

      <Backdrop
        $open={mobileOpen}
        aria-hidden={!mobileOpen}
        onClick={handleCloseMenu}
      />

      <MobilePanel
        id="mobile-navigation"
        $open={mobileOpen}
        aria-hidden={!mobileOpen}
        aria-label="Menu mobile"
      >
        {links.map((link) => (
          <NavLinkItem
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            $solid
            onClick={handleCloseMenu}
          >
            {link.label}
          </NavLinkItem>
        ))}
      </MobilePanel>
    </>
  );
};

export default Navbar;

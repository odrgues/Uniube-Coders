import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Nav, Logo, Menu, MobileButton, MobileMenu } from "./styles";

import NavItem from "./Item";
import logo from "../../assets/images/logo.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha menu mobile ao trocar de rota
  useEffect(() => {
    const timer = setTimeout(() => {
      setMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <Nav $scrolled={scrolled}>
      <Logo>
        <img src={logo} alt="Logo Uniube Coders" />
      </Logo>

      {/* Menu Desktop */}
      <Menu>
        <NavItem to="/" ativo={pathname === "/"}>
          HOME
        </NavItem>
        <NavItem to="/programa" ativo={pathname === "/programa"}>
          NOSSA HISTÓRIA
        </NavItem>
        <NavItem to="/sobre" ativo={pathname === "/sobre"}>
          SOBRE A UNIUBE
        </NavItem>
      </Menu>

      {/* Botão Mobile */}
      <MobileButton
        onClick={() => setMenuOpen((prev) => !prev)}
        $scrolled={scrolled}
      >
        ☰
      </MobileButton>

      {/* Menu Mobile */}
      <MobileMenu $open={menuOpen}>
        <NavItem to="/" ativo={pathname === "/"}>
          HOME
        </NavItem>
        <NavItem to="/programa" ativo={pathname === "/programa"}>
          NOSSA HISTÓRIA
        </NavItem>
        <NavItem to="/sobre" ativo={pathname === "/sobre"}>
          SOBRE A UNIUBE
        </NavItem>
      </MobileMenu>
    </Nav>
  );
};

export default NavBar;

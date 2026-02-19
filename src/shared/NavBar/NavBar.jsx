import { useState, useEffect, useId } from "react";
import { useLocation } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Item from "./ItemNavBar/ItemNavBar";

import {
  Nav,
  NavContent,
  Logo,
  Menu,
  Overlay,
  MobileButton,
  MobileMenu,
} from "./NavBar.styles";

import logo from "../../assets/images/logo.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname } = useLocation();
  const mobileMenuId = useId();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Nav
      as="nav"
      aria-label="Navegação principal"
      $scrolled={scrolled}
      $menuOpen={menuOpen}
    >
      <NavContent>
        <Logo to="/" aria-label="Ir para a página inicial">
          <img src={logo} alt="Logo Uniube Coders" />
        </Logo>

        <Menu>
          <Item to="/" ativo={pathname === "/"} scrolled={scrolled}>
            HOME
          </Item>
          <Item
            to="/programa"
            ativo={pathname === "/programa"}
            scrolled={scrolled}
          >
            NOSSA HISTÓRIA
          </Item>
          <Item
            to="/faculdade"
            ativo={pathname === "/faculdade"}
            scrolled={scrolled}
          >
            SOBRE A UNIUBE
          </Item>
        </Menu>

        <MobileButton
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls={mobileMenuId}
          onClick={() => setMenuOpen((prev) => !prev)}
          $scrolled={scrolled}
          $open={menuOpen}
        >
          {menuOpen ? <IoIosCloseCircleOutline /> : <CgMenuGridO />}
        </MobileButton>
      </NavContent>

      {menuOpen && <Overlay onClick={closeMenu} aria-hidden="true" />}

      <MobileMenu id={mobileMenuId} $open={menuOpen}>
        <Item to="/" ativo={pathname === "/"} onClick={closeMenu}>
          HOME
        </Item>

        <Item
          to="/programa"
          ativo={pathname === "/programa"}
          onClick={closeMenu}
        >
          NOSSA HISTÓRIA
        </Item>

        <Item
          to="/faculdade"
          ativo={pathname === "/faculdade"}
          onClick={closeMenu}
        >
          SOBRE A UNIUBE
        </Item>
      </MobileMenu>
    </Nav>
  );
};

export default NavBar;

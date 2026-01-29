import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Item from "./ItemNavBar";

import {
  Nav,
  NavContent,
  Logo,
  Menu,
  MobileButton,
  MobileMenu,
} from "./NavBar.styles.";
import logo from "../../assets/images/logo.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <NavContent>
        <Logo to="/">
          <img src={logo} alt="Logo Uniube Coders" />
        </Logo>

        <Menu>
          <Item to="/" ativo={pathname === "/"}>
            HOME
          </Item>
          <Item to="/programa" ativo={pathname === "/programa"}>
            NOSSA HISTÓRIA
          </Item>
          <Item to="/faculdade" ativo={pathname === "/faculdade"}>
            SOBRE A UNIUBE
          </Item>
        </Menu>

        <MobileButton
          onClick={() => setMenuOpen((prev) => !prev)}
          $scrolled={scrolled}
        >
          ☰
        </MobileButton>
      </NavContent>

      <MobileMenu $open={menuOpen}>
        <Item
          to="/"
          ativo={pathname === "/"}
          onClick={() => setMenuOpen(false)}
        >
          HOME
        </Item>

        <Item
          to="/programa"
          ativo={pathname === "/programa"}
          onClick={() => setMenuOpen(false)}
        >
          NOSSA HISTÓRIA
        </Item>

        <Item
          to="/faculdade"
          ativo={pathname === "/faculdade"}
          onClick={() => setMenuOpen(false)}
        >
          SOBRE A UNIUBE
        </Item>
      </MobileMenu>
    </Nav>
  );
};

export default NavBar;

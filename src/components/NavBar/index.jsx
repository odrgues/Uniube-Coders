import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { NavItem } from "./Item";
import { media } from "../../assets/styles/media";
import logo from "../../assets/images/logo.jpg";

export const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 42px 6px 16px;
  box-sizing: border-box;
  outline: 2px solid blue; //tirar depois
`;

export const Logo = styled.div`
  position: absolute;
  left: 6px;
  display: flex;
  align-items: center;

  img {
    height: 100px;
    width: auto;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 32px;

  @media ${media.md} {
    gap: 24px;
  }

  @media ${media.sm} {
    gap: 16px;
  }
`;

const NavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      <Nav>
        <Logo>
          <img src={logo} alt="Logo do Uniube Coders" />
        </Logo>

        <Menu>
          <NavItem to="/" ativo={String(pathname === "/")}>
            HOME
          </NavItem>
          <NavItem to="/programa" ativo={String(pathname === "/programa")}>
            NOSSA HISTÓRIA
          </NavItem>
          <NavItem to="/sobre" ativo={String(pathname === "/sobre")}>
            SOBRE A UNIUBE
          </NavItem>
        </Menu>
      </Nav>
    </>
  );
};
export default NavBar;

import { NavItem } from "./ItemNavBar.styles";

const Item = ({ children, to, ativo = false, scrolled = false, onClick }) => {
  return (
    <NavItem to={to} $active={ativo} $scrolled={scrolled} onClick={onClick}>
      {children}
    </NavItem>
  );
};

export default Item;

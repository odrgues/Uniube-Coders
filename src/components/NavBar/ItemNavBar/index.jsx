import { NavItem } from "./ItemNavBar.styles";

const Item = ({ children, to, ativo = false, $scrolled, $onClick }) => {
  return (
    <NavItem to={to} $ativo={ativo} $scrolled={$scrolled} onClick={$onClick}>
      {children}
    </NavItem>
  );
};

export default Item;

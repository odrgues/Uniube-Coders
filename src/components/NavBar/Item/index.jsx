import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavItem = styled(Link)`
  font-size: 1.15rem;
  font-family: ${({ theme }) => theme.fonts.heading};

  color: ${({ theme, $ativo }) =>
    $ativo ? theme.colors.accent : theme.colors.primary};
  text-decoration: none;
  transition: color 0.2s ease, transform 02s ease;
  outline: 2px solid red; //tirar depois

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.05);
  }

  @media ${({ theme }) => `(max-width: ${theme.breakpoints.sm})`} {
    font-size: 1rem;
  }
`;

const Item = ({ children, to, ativo = false }) => {
  return (
    <NavItem to={to} $ativo={ativo}>
      {children}
    </NavItem>
  );
};

export default Item;

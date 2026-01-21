import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavItem = styled(Link)`
  font-size: 1.15rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  text-decoration: none;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  color: ${({ theme, $ativo, $scrolled }) =>
    $ativo
      ? theme.colors.primaryTech
      : $scrolled
        ? theme.colors.text
        : theme.colors.surface};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.05);
  }
`;

const Item = ({ children, to, ativo = false, $scrolled = false }) => {
  return (
    <NavItem to={to} $ativo={ativo} $scrolled={$scrolled}>
      {children}
    </NavItem>
  );
};

export default Item;

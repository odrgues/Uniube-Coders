import { StyledContainer } from "./styles";

const Container = ({ children, className, as = "div", ...props }) => {
  return (
    <StyledContainer as={as} className={className} {...props}>
      {children}
    </StyledContainer>
  );
};

export default Container;

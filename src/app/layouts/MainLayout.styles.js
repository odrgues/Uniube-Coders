import styled from "styled-components";

export const LayoutRoot = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.bg.page};
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;

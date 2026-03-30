import styled from "styled-components";

export const StyledContainer = styled.div`
  width: min(
    calc(100% - (${({ theme }) => theme.layout.container.gutter} * 2)),
    ${({ theme }) => theme.layout.container.maxWidth}
  );
  margin-inline: auto;

  @media ${({ theme }) => theme.media.between.mdLg} {
    width: min(
      calc(100% - (${({ theme }) => theme.layout.container.gutter} * 2)),
      1000px
    );
  }

  @media ${({ theme }) => theme.media.down.sm} {
    width: min(
      calc(100% - (${({ theme }) => theme.layout.container.gutter} * 2)),
      100%
    );
  }
`;

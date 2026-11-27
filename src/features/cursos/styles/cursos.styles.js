import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.colors.bg.page};
  padding: calc(${({ theme }) => theme.layout.navbar.height} + ${({ theme }) => theme.spacing.xxl})
    0 ${({ theme }) => theme.spacing.sectionMd};

  @media ${({ theme }) => theme.media.down.md} {
    padding-top: calc(${({ theme }) => theme.layout.navbar.heightMobile} + ${({ theme }) => theme.spacing.xl});
  }
`;

export const Header = styled.header`
  max-width: 40rem;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  @media ${({ theme }) => theme.media.down.md} {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const Title = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.text.heading};
`;

export const Lead = styled.p`
  margin: 0;
  max-width: 62ch;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media ${({ theme }) => theme.media.between.mdLg} {
    gap: ${({ theme }) => theme.spacing.md};
  }

  @media ${({ theme }) => theme.media.down.md} {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface.base};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media ${({ theme }) => theme.media.down.sm} {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  color: ${({ theme }) => theme.colors.text.heading};
`;

export const Status = styled.span`
  flex-shrink: 0;
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.full};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme, $open }) =>
    $open ? theme.colors.state.success : theme.colors.text.secondary};
  background: ${({ theme }) => theme.colors.surface.soft};
`;

export const Summary = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Meta = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  padding: 0;
  list-style: none;
`;

export const MetaItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.primary};

  strong {
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`;

const buttonStyles = css`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.full};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: none;
`;

export const EnrollLink = styled(Link)`
  ${buttonStyles}
  color: ${({ theme }) => theme.colors.text.inverse};
  background: ${({ theme }) => theme.colors.brand.primary};
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 0.92;
  }
`;

export const EnrollButton = styled.button`
  ${buttonStyles}
  color: ${({ theme }) => theme.colors.text.secondary};
  background: ${({ theme }) => theme.colors.surface.soft};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  cursor: not-allowed;
`;

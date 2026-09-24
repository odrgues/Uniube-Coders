import styled, { css } from "styled-components";

export const PageWrapper = styled.main`
  width: 100%;
  overflow-x: clip;
  background: ${({ theme }) => theme.colors.bg.page};
`;

export const Hero = styled.section`
  width: min(100%, 760px);
  margin: 0 auto;
  padding: clamp(96px, 11vw, 140px) clamp(20px, 4vw, 36px) clamp(8px, 2vw, 16px);
  box-sizing: border-box;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 1.2rem + 2.2vw, 2.8rem);
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.text.heading};
`;

export const Subtitle = styled.p`
  margin: 0 auto;
  max-width: 60ch;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.96rem, 0.93rem + 0.12vw, 1.02rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const FormSection = styled.section`
  width: min(100%, 760px);
  margin: 0 auto;
  padding: clamp(20px, 3vw, 36px) clamp(20px, 4vw, 36px) clamp(56px, 7vw, 96px);
  box-sizing: border-box;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: clamp(20px, 3vw, 36px);
  background: ${({ theme }) => theme.colors.bg.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.state.danger};
  margin-left: 2px;
`;

const controlBase = css`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.96rem;
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.bg.page};
  border: 1px solid
    ${({ theme, $error }) =>
      $error ? theme.colors.state.danger : theme.colors.border.strong};
  border-radius: ${({ theme }) => theme.radius.sm};
  outline: none;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.brand.primary};
  }
`;

export const Input = styled.input`
  ${controlBase}
`;

export const Select = styled.select`
  ${controlBase}
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  ${controlBase}
  min-height: 110px;
  resize: vertical;
`;

export const CheckboxField = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Checkbox = styled.input`
  margin-top: 3px;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
`;

export const ErrorText = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.state.danger};
`;

export const SubmitButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.xs};
  padding: 14px 20px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.inverse};
  background: ${({ theme }) => theme.colors.brand.primary};
  border: none;
  border-radius: ${({ theme }) => theme.radius.full};
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 0.92;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Feedback = styled.p`
  margin: 0;
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.inverse};
  background: ${({ theme, $type }) =>
    $type === "success"
      ? theme.colors.state.success
      : theme.colors.state.danger};
`;
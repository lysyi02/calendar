import styled, { css } from "styled-components";

export const Button = styled.button<{ $primary?: boolean }>`
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  border: none;
  display: inline-block;
  margin: 0.1rem;
  padding: 0 1rem;
  transition: all 200ms ease-in-out;
  height: 40px;
  box-shadow: 0 2px 0 ${({ theme }) => theme.colors.primary.dark};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
    box-shadow: 0 2px 0 ${({ theme }) => theme.colors.primary.dark};
  }
`;

interface TextProps {
  fontSize?: number;
  fontWeight?: 200 | 300 | 400 | 500 | 600 | 700;
  muted?: boolean;
}

export const Text = styled.span<TextProps>`
  font-size: ${({ fontSize }) => fontSize || "18px"};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  ${(props) =>
    props.muted &&
    css`
      color: ${({ theme }) => theme.colors.text.muted};
    `}
`;

interface ContainerProps {
  muted?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  ${(props) =>
    props.muted &&
    css`
      background-color: ${({ theme }) => theme.colors.primary.light};
    `}
`;

import styled from '@emotion/styled'

type ButtonProps = {
  variant: "primary" | "secondary"
}

export const Button = styled.button<ButtonProps>`
  display: block;
  text-align: center;
  min-width: 100px;
  height: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors[props.variant]};
  color: ${(props) => props.theme.colors.lightest};
  border: 0px;
  cursor: pointer;
`

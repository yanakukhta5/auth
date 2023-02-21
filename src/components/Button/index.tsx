import styled from '@emotion/styled'
 // ${({ variant }) => variants[variant]}
import { primary, bg, lightest, dark } from '@/variables/colors'

const backgroundColor = {
  primary,
  secondary: bg
}

const color ={
 primary: lightest,
 secondary: dark
}

// const variants = {
//   primary: css`
//     color: ${({ theme }) => theme.colors.primary};
//     background-color: #fff;
//   `
// }

type ButtonProps = {
  variant: keyof typeof backgroundColor
}


export const Button = styled.button<ButtonProps>`
  display: block;
  text-align: center;
  min-width: 100px;
  height: 40px;
  border-radius: 6px;
  background-color: ${(props) => backgroundColor[props.variant]};
  color: ${(props) => color[props.variant]};
  border: 0px;
  cursor: pointer;
`

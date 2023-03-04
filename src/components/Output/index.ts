import styled from '@emotion/styled'

export const Output = styled.output`
  display: flex;
  flex-direction: column;
  text-align: start;
  color: ${props => props.theme.colors.red};
  font-size: 0.7em;
  margin-bottom: 10px;
`

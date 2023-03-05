import styled from '@emotion/styled'

export const Content = styled.section`
  display: flex;
  gap: 2em;
  margin: auto;
  justify-content: space-around;

  @media (max-width: 780px) {
    flex-direction: column;
    gap: 20px;
  }
`

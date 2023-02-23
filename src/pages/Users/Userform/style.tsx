import styled from '@emotion/styled'

import { Button } from '@/components/Button'

export const Userform = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 20px;
`

export const Submit = Button.withComponent('input')

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  @media (max-width: 780px) {
    width: unset;
  }
`

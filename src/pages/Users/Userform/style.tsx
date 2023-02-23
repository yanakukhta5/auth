import styled from '@emotion/styled'

import { Button } from '@/components/Button'

export const Userform = styled.form`
  display: flex;
  flex-direction: column;
  width: clamp(300px, 20%, 400px);
  gap: 30px;
  margin-bottom: 20px;
  @media (max-width: 350px) {
    width: unset;
  }
`

export const Submit = Button.withComponent('input')


export const Select = styled.select`
  margin-bottom: 20px;
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

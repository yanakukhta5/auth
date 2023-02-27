import styled from '@emotion/styled'

import { Button } from '@/components/Button'
import { Label } from '@/components/Label'

import { secondary } from '@/variables/colors'

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

export const CheckboxLabel = styled(Label)`
  display: flex;
  gap: 0;
  text-align: start;
  color: ${secondary};
  font-size: 15px;
  margin-left: 20px;
  flex-direction: row-reverse;
  margin-right: auto;
`
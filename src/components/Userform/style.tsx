import styled from '@emotion/styled'

import { Button } from '@/components/Button'

export const Form = styled.form`
 display: flex;
 flex-direction: column;
 width: clamp(300px, 20%, 400px);
 gap: 30px;
 margin-bottom: 20px;
`

export const Submit = Button.withComponent('input')
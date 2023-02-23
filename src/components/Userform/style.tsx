import styled from '@emotion/styled'

import { Button } from '@/components/Button'

export const Form = styled.form`
 display: flex;
 flex-direction: column;
 width: clamp(300px, 20%, 400px);
 gap: 30px;
`

export const Submit = Button.withComponent('input')

export const Label = styled.label`
 display: flex;
 flex-direction: column;
 text-align: center;
 gap: 10px;
`

export const Input = styled.input`
 border: none;
 border-radius: 6px;
 background-color: aliceblue;
 height: 40px;
 padding: 0 20px;
`

export const Output = styled.output`
 display: flex;
 flex-direction: column;
 text-align: start;
 color: red;
 font-size: 0.7em;
`
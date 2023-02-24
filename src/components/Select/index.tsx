import React from 'react'
import styled from '@emotion/styled'
import { Option } from '@/components/Option'

type SelectProps = {
  options: {name: string, value: string}[],
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Wrapper = styled.select`
  margin-bottom: 20px;
`

export const Select: React.FC<SelectProps> = ({ options, onChange }) => {
 return (
  <Wrapper onChange={event => onChange(event)}>
    { options.map(option => <Option value={option.value} key={option.value}>{option.name}</Option> )  }
  </Wrapper>
 )
}
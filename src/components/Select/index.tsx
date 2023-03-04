import React from 'react'
import styled from '@emotion/styled'

type SelectProps = {
  options: { name: string; value: string }[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  value: string
}

export const Wrapper = styled.select`
  margin-bottom: 20px;
`

export const Select: React.FC<SelectProps> = ({ options, onChange, value }) => {
  return (
    <Wrapper onChange={(event) => onChange(event)} value={value}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </Wrapper>
  )
}

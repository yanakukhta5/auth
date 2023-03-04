import styled from '@emotion/styled'
import React from 'react'

interface CheckboxProps {
  id?: string
  checked?: boolean
}

const Wrapper = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    return <input ref={ref} type="checkbox" {...props} />
  }
)

export const Checkbox = styled(Wrapper)`
  width: 10px;
  height: 10px;
`

import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid red;
  & > span {
    color: #f00;
  }
`

interface Props {}

const Button: React.FC<Props> = ({ children }) => {
  return (
    <StyledButton>
      <span>{children}</span>
    </StyledButton>
  )
}

export default Button

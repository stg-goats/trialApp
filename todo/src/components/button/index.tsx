import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const StyledButton = styled(Button)`
  border: 1px solid red;
  & > span {
    color: #f00;
  }
`

interface Props {}

const ButtonFC: React.FC<Props> = ({ children }) => {
  return (
    <StyledButton>
      <span>{children}</span>
    </StyledButton>
  )
}

export default ButtonFC

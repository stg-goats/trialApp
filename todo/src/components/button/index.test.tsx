import React from 'react'
import { render } from '@testing-library/react'
import Button from '.'

test('renders button name', () => {
  const { getByText } = render(<Button>button name</Button>)
  const linkElement = getByText(/button name/i)
})

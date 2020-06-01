import React from 'react'
import Button from './button'
import { useSelector } from 'react-redux'
import { textType } from '../types/ducks'

const App: React.FC = () => {
  const textValue = useSelector((state: { text: textType }) => state.text.textValue)
  console.log(textValue)

  return (
    <div className="App">
      <Button>{textValue}</Button>
    </div>
  )
}

export default App

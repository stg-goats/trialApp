import React from 'react'
import { useSelector } from 'react-redux'
import { textType } from '@/types/ducks'
import Button from './button'

const App: React.FC = () => {
  const textValue = useSelector((state: { text: textType }) => state.text.textValue)

  return (
    <div className="App">
      <Button>{textValue}</Button>
    </div>
  )
}

export default App

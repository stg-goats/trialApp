import React from 'react'
import Button from './button'
import { useSelector } from 'react-redux'

const App: React.FC = () => {
  const textValue = useSelector((state) => state)
  console.log(textValue)

  return (
    <div className="App">
      <Button>ボタン</Button>
    </div>
  )
}

export default App

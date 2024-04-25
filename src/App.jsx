import { useState } from 'react'
import './App.css'
import ButtonClick from './Ders4/ButtonClick/ButtonClick'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonClick/>
     </>
  )
}

export default App

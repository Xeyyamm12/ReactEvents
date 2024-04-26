import { useState } from 'react'
import './App.css'
import Subscribe from './Ders4/Subscribe/Subscribe'
import UserCV from './CV/UserCV'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserCV/>
     </>
  )
}

export default App

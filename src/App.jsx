import { useState } from 'react'
import './App.css'

import { Form } from './Components/UserLogin/Form/Form'
import { Button } from './Components/UserLogin/Form/Button/Button'
import { Email } from './Components/UserLogin/Form/Email/Email'
import { Password } from './Components/UserLogin/Form/Password/Password'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Email/>
        <Password/>
        <Button/>
     </>  
  )
}

export default App

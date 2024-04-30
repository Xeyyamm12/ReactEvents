import { Button } from './Button/Button'
import { Email } from './Email/Email'
import './Form.css'
import { Password } from './Password/Password'
export const Form = () => {
  return (
    <form action="">
        <Email/>
        <Password/>
        <Button/>
    </form>
  )
}
import { useState } from "react"

const Subscribe= ()=>{
    const [state,setState] = useState({
        subscribed: false,
        name: "Xeyyam"
    })

    const handleClick = ()=>{
        setState(prev=>({...prev,subscribed:!state.subscribed}))
    }
    console.log(state,"state")

       return<>
        <p>{state.name}</p>
       {state.subscribed&&<p>subscribed</p>}
       <button onClick={handleClick}>
           Subscribe
       </button>
       </>
   }
   export default Subscribe
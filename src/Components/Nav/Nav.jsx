import React from 'react'
import {Router} from 'marshrut/dist/marshrut.es'
import { Link } from "marshrut/dist/marshrut.es";

const Nav = () => {
  return (
    <div className='navigation'>
       <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Nav
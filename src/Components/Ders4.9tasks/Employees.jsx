import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import db from "./db";
const Employees = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(db)
  }, []);

  const showAlive=()=>{
        setState((state).filter((item)=>{
            item.alive===true?item:null
        }))
  }

  return state.map((item) => {
    return (  
      <div key={item.id}>
        <button className="alive" onClick={showAlive}>show Alive</button>
        <button className="dead">show Dead</button>
        <p>
          <b>Name:</b>
          {item.name}
        </p>
        <p>
          <b>Department:</b>
          {item.department}
        </p>
        <p>
          <b>Role</b>
          {item.role}
        </p>
        <p>
        <b>Alive</b>
          {item.alive}
        </p>
      </div>
    );
  });
};

export default Employees;

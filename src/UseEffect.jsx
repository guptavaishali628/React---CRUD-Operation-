import React, { useState, useEffect } from 'react'

const UseEffect = () => {

    //---------------------useState-----------------------------
    const [count, setcount]=useState(0);
    let inc=()=>{
        setcount(count+1)
    }
    //-------------------------useEffect-----------------------
    useEffect( ()=>{
      console.log("Running");
    },[count])  //jitne bar count chalega utne bar function render hoga agar ye empty rhta to only one time function chalega
  
    return (
    
    <div>
        count:{count}
        <button onClick={inc}>increament</button>
      <h1>Use Effect Hook</h1>
    </div>
 
)

}

export default UseEffect

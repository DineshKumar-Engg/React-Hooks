import React, { useState } from 'react'
import { useRef } from 'react'

const Counter1 = () => {

const [count,setcount]=useState(0)
const countRef = useRef(0)

const handleIncrease=()=>{
    setcount(count+1)
}
const RefIncrease=()=>countRef.current++


  return (
    <div>
        <p>count : {count}</p>
        <p>countRef:{countRef.current}</p>
        <button onClick={handleIncrease}>Increment</button>
        <button onClick={RefIncrease}>Decreament</button>
    </div>
  )
}

export default Counter1
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import '../App.css'
const Counter = () => {


    // state count click everytime render dom,so count increasing
    // ref count click everytime ,dom not render,so ref count not render in page..but count increasing stored in ref
    // once we render page, ref value update in ref count

    const [count,setCount]=useState(0)
    const countRef = useRef(0)

    const HanldeState=()=>{
        setCount(count+1)
    }
    const handleRef=()=>{
        countRef.current++;
    }

    console.log('Global Dom Rendering');

  return (
    <div className='ref'>
        <h1>State Counter is :{count}</h1>
        <h1>Ref count is : {countRef.current}</h1>
        <button onClick={HanldeState}>Increament State</button>
        <button onClick={handleRef}>Increament Ref</button>
        <hr style={{width:'100%',textAlign:'left',margin:'40px 0 10px 0'}}></hr>

    </div>
  )
}

export default Counter
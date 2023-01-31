import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Timer = () => {

    const  [count,setCount]=useState(0)
    const timeRef =useRef(0)

    const handleStart=()=>{
        if(timeRef.current){
            return
        }
        timeRef.current=setInterval(()=>{
            setCount((count)=>count+1);
        },1000)

    }
    const handleStop=()=>{
        clearInterval(timeRef.current)
        timeRef.current=0;

    }

    useEffect(()=>{
        return()=>clearInterval(timeRef.current);  
    },[])

  return (
    <div className='ref'>

        <h1>Count Down : {count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <hr style={{width:'100%',textAlign:'left',margin:'40px 0 10px 0'}}></hr>

    </div>
  )
}

export default Timer
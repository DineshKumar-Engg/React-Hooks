import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Input = () => {

const [input,setInput]=useState('')
const [isValid,isNotvalid]=useState(false)

    useEffect(()=>{
        if(input.length<5 || /\d/.test(input))
        {
            isNotvalid(false)
        }
        else{
            isNotvalid(true)
        }
    },[input])

  return (
    <div>
        <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
        <br></br>
        <br></br>
        <button type='button' 
        style={isValid?{backgroundColor:'white',padding:'10px'}:{backgroundColor:'royalblue',padding:'10px'}}
        >
            {isValid ? "valid":"Not Valid"}</button>
            <hr style={{width:'100%',textAlign:'left',margin:'40px 0 10px 0'}}></hr>

    </div>
  )
}

export default Input
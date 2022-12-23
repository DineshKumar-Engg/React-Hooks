import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Input = () => {
const inputRef = useRef(null)
const prevRef=useRef('')
const [inputValue,Setinputvalue]=useState('')

// on page load,its focus input box
// on type letters,current state value render inputvalue
// in prev ref, previous state value is store and after render its shows

useEffect(()=>{
    inputRef.current.focus()
    prevRef.current =inputValue
},[inputValue])

  return (
    <div className='ref'>
        <input type='text' ref={inputRef} value={inputValue} onChange={(e)=>{Setinputvalue(e.target.value)}}></input>
        <h1>Current state is :{inputValue}</h1>
        <h1>Prev ref state is :{prevRef.current}</h1>
        <hr style={{width:'100%',textAlign:'left',margin:'40px 0 10px 0'}}></hr>
    </div>
  )
}

export default Input
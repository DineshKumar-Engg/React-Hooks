import React from 'react'
import { useState } from 'react'
import Heading from './Heading'
import Info from './Info'
import Button from './Button'
import { useCallback } from 'react'
const Home = () => {

    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(100)

    const increment1= useCallback(()=>{
        setCount1(count1+1)
    },[count1])

    const increment2=useCallback(()=>{
        setCount2(count2+1)
    },[count2])
    


  return (
    <div>
        <Heading/>
        <Info title='counter1' value={count1}/>
        <Button title='increament 1' eventhandler={increment1}/>
        <Info title='counter2' value={count2}/>
        <Button title='increament 2' eventhandler={increment2}/>
    </div>
  )
}

export default Home
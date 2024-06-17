import React from 'react'
import { useState,createContext } from 'react'

export const UserCount = createContext()

export const CreateContextfile = ({children}) => {

const [count,setCount]=useState(0)

const increment = ()=>setCount(count+1)
const decrement = ()=>setCount(count-1)

  return (
    <UserCount.Provider value={{count,increment,decrement}}>
        {children}
    </UserCount.Provider>
    
  )
}

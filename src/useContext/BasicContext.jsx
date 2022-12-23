import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react'
import { useState } from 'react'

const UserContext = createContext();
const Basics = () => {
   
const [user]=useState('React')

  return (
    <UserContext.Provider value={user}>
        Learning context in {user}
        <Component1/>
    </UserContext.Provider>
  )
}

function Component1(){
    return(
        <div>
        <p>Component 1</p>
        <Component2/>
        </div>
    )
}

function Component2(){
    return(
        <div>
            <p>Component2</p>
            <Component3/>
        </div>
    )
}

function Component3(){
    const user =useContext(UserContext)
    return(
        <div>
            <p>Component3</p>
        <h1>{`context value from Main component ${user}`}</h1>
        </div>
    )
}






export default Basics
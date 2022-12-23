import React from 'react'
import { useState } from 'react'

const Basics = () => {
const [user]=useState('React')
  return (
    <div>
        Learning Props in {user}
        <Component1 user={user}/>
    </div>
  )
}

function Component1({user}){
    return(
        <div>
        <p>Component 1</p>
        <Component2 user={user} />
        </div>
    )
}

function Component2({user}){
    return(
        <div>
            <p>Component2</p>
            <Component3 user={user} />
        </div>
    )
}

function Component3({user}){
    return(
        <div>
            <p>Component3</p>
        <h1>{`Props from Main component ${user}`}</h1>
        </div>
    )
}






export default Basics
import React, { useContext } from 'react'
import { UserCount } from './CreateContextfile'

const Increment = () => {

    const {increment} =useContext(UserCount)

  return (
    <div>
        <button style={{backgroundColor:"Highlight"}} type="button" onClick={increment}>Increment</button>
    </div>
  )
}

export default Increment
import React, { useContext } from 'react'
import { UserCount } from './CreateContextfile'

const Decrement = () => {

const{decrement}=useContext(UserCount)
console.log("dec");
  return (
    <div>
        <button type="button" onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Decrement
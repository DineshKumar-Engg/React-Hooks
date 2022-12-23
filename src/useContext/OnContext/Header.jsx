import React from 'react'
import { useContext } from 'react'
import { userContext } from './Main'

const Header = () => {


    const {user}=useContext(userContext)
    const {userName,title}=user
  return (
    <div
    style={{backgroundColor:'gray',display:'flex',justifyContent:'space-between',border:'1px solid gray'}}
    >
        <h3>{title}</h3>
        <p>Login User:{userName}</p>
    </div>
  )
}

export default Header
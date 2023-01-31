import React, { useContext } from 'react'
import { userText } from './Main'

const Header = () => {

const {text} =useContext(userText)

const {name,value}=text
  return (
    <div>
        <p>{name}</p>
        <p>{value}</p>
    </div>
  )
}

export default Header
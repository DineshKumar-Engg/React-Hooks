import React, { useContext } from 'react'
import { userText } from './Main'

const UserInfo = () => {
  const {text,setText}=useContext(userText)

  const {name,value}=text

  return (
    <div>
        <input type={"text"} value={name} onChange={(e)=>{setText((prev)=>({...prev,name:e.target.value}))}}/>
        <input type={"text"} value={value} onChange={(e)=>{setText((prev)=>({...prev,value:e.target.value}))}}/>
    </div>
  )
}

export default UserInfo
import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import Header from './Header'
import UserInfo from './UserInfo'



export const userText= createContext()

const Main = () => {



const [text,setText]=useState({
    name:'dinesh',
    value:'context'
})

  return (
    <userText.Provider value={{text,setText}}>
        <Header/>
        <UserInfo/>
    </userText.Provider>
  )
}

export default Main
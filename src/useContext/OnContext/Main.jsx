import React from 'react'
import { useState } from 'react'
import Layout from './Layout'
import '../App.css'
import { createContext } from 'react'

export const userContext =createContext();

const Main = () => {

    const [user,setUser]=useState({
        userName:'dinesh',
        title:'learning Props in Detailed explanation - Tamil',
        message:'Welcome to learning new concept'
    })
  return (
   <userContext.Provider value={{user,setUser}}>
    <Layout/>
   </userContext.Provider>
  )
}

export default Main
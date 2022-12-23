import React from 'react'
import { useState } from 'react'
import Layout from './Layout'
const Main = () => {

    const [user,setUser]=useState({
        userName:'dinesh',
        title:'learning Props in Detailed explanation - Tamil',
        message:'Welcome to learning new concept'
    })
  return (
    <div>
          <Layout user={user} setUser={setUser} />
    </div>
  )
}

export default Main
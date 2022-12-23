import React from 'react'
import Header from './Header'
import UserInfo from './UserInfo'
const Layout = () => {
  return (
    <div>
        <h1>Wihtou use context,learning through props</h1>    
        <div style={{border:'1px solid black',padding:'10px',margin:'10px'}}>
        <Header/>
        <UserInfo/>
        </div>
    </div>
  )
}

export default Layout
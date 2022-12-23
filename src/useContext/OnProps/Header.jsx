import React from 'react'

const Header = (props) => {
    const {user}=props
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
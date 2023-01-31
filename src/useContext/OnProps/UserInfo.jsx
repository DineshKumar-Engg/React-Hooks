import React from 'react'

const UserInfo = ({user,setUser}) => {

    const {message,title,userName}=user

  return (
    <div>
        <div style={{margin:'10px'}}>
        {/* {message}.{title} */}
        </div>
        <br/>
        <br/>
        <span>Edit input field to change child component</span>
        <input
        type={'text'}
        value={title}
        onChange={(e)=>{
            setUser((prev)=>({...prev,title:e.target.value}))
        }}
        style={{width:'300px',height:'40px',margin:'10px'}}
        ></input>
        <input 
        style={{width:'300px',height:'40px',margin:'10px'}}
        value={userName}
        type={'text'}
        onChange={(e)=>{setUser((prev)=>({...prev,userName:e.target.value}))}}
        >
        </input>
    </div>  
  )
}

export default UserInfo
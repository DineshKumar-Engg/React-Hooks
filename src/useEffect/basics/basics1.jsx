import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../App.css'



const Basics1 = () => {

const [showComponent,setShowComponent]=useState(false)

const Details=()=>{
    useEffect(()=>{

        console.log('component mounted');

        return()=>{
            console.log("component unMounted");
        };
    },[])
    return(<div>User Details component</div>)
}


  return (
    <div>
        <h2>UseEffect-ComponentWillUnMount</h2>
        <br/>
        <button onClick={()=>{setShowComponent(!showComponent)}}>
            {!showComponent?'Show Component':'Hide Component'}
        </button>
        <br/>
        <div>
            {showComponent?<Details/>:null}
        </div>
        {/* <hr style={{width:'100%',textAlign:'left',marginLeft:'0'}}></hr> */}

    </div>
  )
}

export default Basics1
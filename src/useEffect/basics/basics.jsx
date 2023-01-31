import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../App.css'
import Basics1 from './basics1'
const Basics = () => {
    const [ count,setCount]=useState(0)
    const [name,setname]=useState("")

  // componentDidMount - useEffect(()=>{},[]) ---> Mounting
  //componentDidupdate - useEffect(()=>{}) ---->updating
  //componentWillunMount - useEffect(()=>{return() {}},[]) ---unMounting


  // componentDidMount---> without any dependecies values inside,any changes in count,input..useEffect not render
                          // it render only once a time when global render
  useEffect(()=>{
      console.log("render1");

  },[]) 

// if not provide any dependencies,then it render everytime any global changes 
  useEffect(()=>{
    console.log("render 2");

  }) 

 // componentDidUpdate ---> if any changes on count ,then only useEffect start render 
  //                         if any change on name,then only useEffect start render

  useEffect(()=>{
    console.log("render 3");
  },[count])

  // useEffect(() => {       ///--------------->>>>>>>>> componentwillunmount
  //    run side-effects
  
  //   return () => {
  //     run cleanups
  //   }
  // }, [])





return (
    <div className='main'>
       <div>
       <h3>counst is :{count}</h3>
        <button type='button' onClick={()=>setCount(count+1)}>Increment</button>
       </div>
       <div>
        <h3>From Input Name field....{name}</h3>
        <input type='text' placeholder='Enter Text' onChange={(e)=>{setname(e.target.value)}}></input>
       </div>
       <hr style={{width:'100%',textAlign:'left',margin:'40px 0 10px 0'}}></hr>

       <div>
       <Basics1/>
       </div>
       <hr style={{width:'100%',textAlign:'left',margin:'40px 0 10px 0'}}></hr>

    </div>
  )
}

export default Basics
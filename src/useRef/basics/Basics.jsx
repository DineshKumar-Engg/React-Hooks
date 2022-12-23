import React from 'react'
import { useRef } from 'react'
import '../App.css'
const Basics = () => {
    const divref = useRef(null)
    const spanRef =useRef(null)

  // in this we learn how to dom access without page render

    const handleDiv=()=>{
        console.log(divref);
    }
    const handleSpan=()=>{
        console.log("before update",spanRef);

        spanRef.current.innerHTML ='Welcome New DOM updated'

        console.log("After update",spanRef);
    }

  return (
    <div className='ref'>
         <div>
        <div ref={divref} onClick={handleDiv}>Click to view DOM Element</div>
       
        <span  ref={spanRef} onClick={handleSpan}>Click to update Dom Element</span>
        </div>
        <hr style={{width:'100%',textAlign:'left',margin:'40px 0 10px 0'}}></hr>

    </div>
  )
}

export default Basics
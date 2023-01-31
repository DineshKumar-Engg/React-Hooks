import React from 'react'
import { useRef } from 'react'




const Basics1 = () => {

const spanRef = useRef(null)

const handleRef=()=>{
    spanRef.current.innerHTML="+91-4657987448"
}

console.log("rendering");
  return (
    <div>
        <div>
        <span >How to render para without re-render page,Click the content to display Ref value</span>
        <p>Want to buy car,Click contact button to call us</p>
        <span ref={spanRef} onClick={handleRef}> contact</span>
        </div>
    </div>
  )
}

export default Basics1
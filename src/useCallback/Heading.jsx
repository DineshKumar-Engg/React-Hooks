import { memo } from "react"
import React from 'react'

const Heading = () => {

    console.log("Home useCallBack rendering");
  return (

<div className='call'>
     <div style={{backgroundColor:'blueviolet'}}>
     <h1>UseCallBack Concept</h1>
      <h2>Counter Example</h2>
     </div>
</div>

  )
}

export default memo(Heading)
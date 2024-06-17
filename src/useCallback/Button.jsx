import React from 'react'
import { memo } from "react"

const Button = ({title,eventhandler}) => {

    console.log(`button rendering for ${title}`);
  return (
        <div style={{backgroundColor:'tomato'}}>
            <button onClick={eventhandler}>{title}</button>
        </div>
  )
}

export default memo(Button)
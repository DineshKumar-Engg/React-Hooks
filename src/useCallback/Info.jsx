import React from 'react'
import { memo } from "react"

const Info = ({title,value}) => {

    console.log(`info rendering for ${title}`);
  return (
    <div style={{backgroundColor:'turquoise'}}>
        <h4>{title}</h4>
        <h5>{value}</h5>
    </div>
  )
}

export default memo(Info)
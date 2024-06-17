import React from 'react'
import {CreateContextfile} from './CreateContextfile'
import Increment from './Increment'
import Decrement from './Decrement'
import Count from './Count'

const MainContext = () => {
    console.log("dec");
  return (
    <div>MainContext

<CreateContextfile>
    <div>
    <Increment/>
    <Decrement/>
    <Count/>
    </div>
</CreateContextfile>

    </div>
  )
}

export default MainContext
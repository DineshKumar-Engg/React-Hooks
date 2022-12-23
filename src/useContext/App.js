import React from 'react'
import MainProps from './OnProps/Main'
import MainContext from './OnContext/Main'
import BasicProps from './BasicProps'
import BasicsContext from './BasicContext'
const App = () => {
  return (
    <div>
       <MainProps/>
       <MainContext/>
       <BasicProps />
       <BasicsContext/>
    </div>
  )
}

export default App
import React from 'react'
import MainProps from './OnProps/Main'
import MainContext from './OnContext/Main'
import BasicProps from './BasicProps'
import BasicsContext from './BasicContext'
import Main from './NewContext/Main'


const App = () => {
  return (
    <div>
       {/* <MainProps/>
       <MainContext/>
       <BasicProps />
       <BasicsContext/> */}
       <Main/>
    </div>
  )
}

export default App
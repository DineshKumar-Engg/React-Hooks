import React from 'react'
import MainProps from './OnProps/Main'
import MainContext from './CountContext/MainContext'
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
       {/* <Main/> */}
       <MainContext/>
    </div>
  )
}

export default App
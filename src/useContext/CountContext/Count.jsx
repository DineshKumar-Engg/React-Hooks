import React, { useContext } from 'react'
import { UserCount } from './CreateContextfile'

const Count = () => {

    const {count}=useContext(UserCount)

  return (
    <div>Count:{count}</div>
  )
}

export default Count
import React from 'react'
import UseLocal from './UseLocal';


const Debug = () => {
    const [name, setName] = UseLocal('name', '');

  return (
    <div>
      <h1>useLocalStorage Hook Example</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Stored Name: {name}</p>
    </div>
  )
}

export default Debug
import React, { useState, useLayoutEffect, useRef } from 'react';

const UseLayout = () => {

    const [height, setHeight] = useState(0);
    const divRef = useRef(null);
  
    useLayoutEffect(() => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    }, []);
  return (
    <div>
<div ref={divRef} style={{ height: '100px', background: 'lightblue' }}>
        Measure my height
      </div>
      <p>The above div's height is: {height}px</p>
    </div>
  )
}

export default UseLayout
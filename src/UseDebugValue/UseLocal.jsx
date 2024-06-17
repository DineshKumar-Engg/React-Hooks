import React, { useDebugValue } from 'react'
import { useState, useEffect } from 'react';


const UseLocal = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
          const item = window.localStorage.getItem(key);
          return item ? JSON.parse(item) : initialValue;
        } catch (error) {
          console.error(error);
          return initialValue;
        }
      });
    
      useEffect(() => {
        try {
          window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
          console.error(error);
        }
      }, [key, storedValue]);
    
      // Using useDebugValue to display the stored value in React DevTools
      useDebugValue(storedValue, value => `LocalStorage(${key}): ${value}`);
    
      return [storedValue, setStoredValue];
}

export default UseLocal
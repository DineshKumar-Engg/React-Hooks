import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../App.css'

const Fetch = () => {

    const [data,setData] =useState('')
    const [isLoading,setNotLoading] = useState(false)

    useEffect(()=>{
        
        const fetching= async()=>{
            setNotLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const value = await response.json();
            setData(value)
            setNotLoading(false)
        }
        fetching()
    },[])
  return (
    <div className='fetch'>
        <h1>Fecth Use Effect Example</h1>
        {
            isLoading?(<span>Loading....</span>):(<p>{JSON.stringify(data,null,'\t')}</p>)
        }
            <hr style={{width:'100%',textAlign:'left',margin:'40px 0 10px 0'}}></hr>

    </div>
  )
}

export default Fetch
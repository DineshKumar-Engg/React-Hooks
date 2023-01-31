import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../App.css'

const Search = () => {

    const array = [
        {key:'1',type:'Audi',value:'50lakhs'},
        {key:'2',type:'BMW',value:'20lakhs'},
        {key:'3',type:'Volvo',value:'40lakhs'},
        {key:'4',type:'Benz',value:'60lakhs'},
        {key:'5',type:'Honda',value:'30lakhs'},
        {key:'6',type:'Audi',value:'80lakhs'},
        {key:'7',type:'Benz',value:'40lakhs'},
        {key:'8',type:'BYD',value:'10lakhs'},
        {key:'9',type:'Volvo',value:'50lakhs'},
    ]

    const [inputType,setinputType] =useState('')
    const [inputValue,setInputValue] =useState('')
    const [filterArray,setFilterArray]=useState(array)

    const listitem = filterArray.map((item)=>(
        <>
        <tr key={item.key}>
            <td style={{border:'1px solid grey',padding:'8px'}}>
                {item.type}
            </td>
            <td style={{border:'1px solid grey',padding:'8px'}}>
                {item.value}
            </td>
        </tr>

        </>
    ))

    useEffect(()=>{
        setFilterArray(()=>{
            const newArray =array
            .filter((item)=>item.type.toLowerCase().includes(inputType)) //-->>>includes 0r match
            .filter((item)=>item.value.includes(inputValue))
            return newArray
        })

    },[inputValue,inputType])
    

  return (


    <div className='search'>
        
        <div className='input'>
        <label>Enter Car Name</label>
        <input type='text' placeholder='Enter Car Name' onChange={(e)=>{setinputType(e.target.value)}}></input>
        <label>Enter Car value</label>
        <input type='text' placeholder='Enter Car Value' onChange={(e)=>{setInputValue(e.target.value)}}></input>
        </div>

        <div className='table'>
        <table>
            <thead>
            <tr>
                <th>Filter by type</th>
                <th>Filter by Value</th>
            </tr>
            </thead>
            <tbody>
                {listitem}
            </tbody>

        </table>
        </div>
       
    </div>
  )
}

export default Search
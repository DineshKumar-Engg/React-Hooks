import React, { useState } from 'react'
import { useEffect } from 'react'










const Paragrap=(props)=>{
    const [para,setpara]=useState([])

    useEffect(()=>{
        setpara(
            props.paraList?.map((item,index)=>(
                <p key={Math.random()}>{index+1}.{item}</p>
            ))
    )
    },[props.paraList])

    return(
<>
        <p>Number of paragragh:{para.length}</p>
        <p>{para}</p>
</>
    )
}



const ParaTest = () => {

    const [paraList,setParaList] = useState([])


    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(e.target.paragraph.value);
        const response =await fetch(`https://baconipsum.com/api/?type=all-meat&paras=${e.target.paragraph.value}&start-with-lorem=1`);
        const result = await response.json();
        setParaList(result)

    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <select name='paragraph'>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
               
            </select>
            <input type='submit' value="show me para"/>
        </form>
    <div>
        <Paragrap paraList={paraList}/>
    </div>
    </div>
  )
}

export default ParaTest
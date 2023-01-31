import React, { useEffect } from 'react'
import { useState } from 'react'

function ParagraphText(props){
    const [paraText,setParaText]=useState([])
    console.log(props.paraList);
    useEffect(()=>{
        setParaText(
            props.paraList?.map((item,index)=> (
                <p key={Math.random()}>{index+1}.{item}</p>
        ))
        );
    },[props.paraList])
    return(
        <>
            <p>Number of paragraghs:{paraText?.length}</p>
            {paraText}
        </>
    )
}

const ParaApi = () => {
    const [paraList,setParaList] = useState([])
    const [isLoading,setIsLoading]=useState(false)

    const submitHandle= async(e)=>{
        e.preventDefault();
        console.log(e.target.paragraph.value);
        setIsLoading(true);
        const response =await fetch(`https://baconipsum.com/api/?type=all-meat&paras=${e.target.paragraph.value}&start-with-lorem=1`);
        const result = await response.json();
        console.log(result);
        setIsLoading(false)
        setParaList(result)
    }   

  return (
    <div className='para'>
        <h2>How Many paragraghs you want ??......</h2>
        <form onSubmit={submitHandle}>
        <select name='paragraph'>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
        </select>
        <input type='submit' value='Show me Paragraph'></input>
        </form>
        {isLoading && <p>Getting paragraph.......</p>}
        <div>
        <ParagraphText paraList={paraList} />
        </div>
    </div>
  )
}

export default ParaApi
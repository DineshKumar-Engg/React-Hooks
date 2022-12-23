import React, { useMemo } from 'react'
import { useState } from 'react'
import '../useMemo/App.css'
const UseMemo = () => {

    const [ todo,setTodo] =useState([])
    const [count,setcount]=useState(0)

    function addTodo(){
        setTodo((prevTodo)=>[...prevTodo,'New Todo'])
    }

    function handleCount(){
        setcount((c)=>c+1);
    }

    //const calculation = expensiveCal(count) when add todo ,this expensive cal also rendering
    // to stop render expensive cal everytime,we can use useMemo
    // so that when we increase count only,pass value to for loop,then calculation run and render
    const calculation =useMemo(()=>{expensiveCal(count)},[count])

    function expensiveCal(num){
        console.log("im rendering");
        for(var i=0;i<10000000;i++){
            num+=1;
        }
        return num
    }

  return (
    <div>
      <div>
        <h1>My todo</h1>
        {todo.map((todos,index)=>{
            return <p key={index}>{todos}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <br/>
      <br/>
      <div>
        <h3>count is : {count}</h3>
        <button onClick={handleCount}>Increament</button>
      </div>
      <div>
        {calculation}
      </div>
    </div>
  )
}

export default UseMemo
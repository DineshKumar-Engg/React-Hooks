import React from 'react'
import '../Bank/reducer.css';
import { useReducer } from 'react';

const transaction =(state,action)=>{
    console.log("state",state);
    console.log("action",action);
    switch(action.type){
        case "WITHDRAW VALUE":
            return{
                ...state,
                withdraw:action.payload
            };
        case "DEPOSIT VALUE":
            return{
                ...state,
                deposit:action.payload
            };
        case "WITHDRAW":
            return {
                ...state,
                balance:state.balance - action.payload
            }
        case "DEPOSIT":
            return {
                ...state,
                balance:state.balance + action.payload
            }  
        default:
                return state
    }
}

const Reducer = () => {

    const initialState={
        withdraw:0,
        deposit:0,
        balance:0
    }
        
   

const [state,dispatch]=useReducer(transaction,initialState)


const handleWithdraw=(event)=>{
  dispatch({
    type:"WITHDRAW VALUE",
    payload:event.target.value
  })
}

const handleDeposit=(event)=>{
    dispatch({
      type:"DEPOSIT VALUE",
      payload:event.target.value
    })
  }
const withdraw = () => {
    
    if(state.balance === 0){
        return
    }else{
         dispatch({
        type:"WITHDRAW",
        payload:parseInt(state.withdraw)
    })
    }
   
}

const deposit = () => {
    dispatch({
        type:"DEPOSIT",
        payload:parseInt(state.deposit)
    })
}


  return (
    <div className='main'>
        <div className='box'>
        <div className='balance'>
            <h2>Balance is :{state.balance}</h2>
        </div>
        <div className='content'>
        <label>Withdraw</label>
        <input type='number' name='Withdraw' value={state.withdraw} onChange={(event)=>handleWithdraw(event)} placeholder='Enter withdraw Amount'></input>
        <button type='button' onClick={()=>withdraw(state.withdraw)}> Withdraw</button>
        <label>Deposit</label>
        <input type='number' name='Deposit' value={state.deposit} onChange={(event)=>handleDeposit(event)} placeholder='Enter Deposit Amount'></input>
        <button type='button' onClick={()=>deposit(state.deposit)}>Deposit</button>
        </div>
        </div>
    </div>  
  )
}

export default Reducer;
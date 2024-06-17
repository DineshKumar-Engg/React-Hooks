import React, { useReducer } from 'react'

const Transaction=(state,action)=>{
    
    console.log(state,action);

    switch(action.type){
        case "withdraw":
            return {...state, Withdraw:action.payload}
        case "deposit":
            return {...state, Deposit:action.payload}
        case "DespositAmount" :
            return {...state, Balance :state.Balance + action.payload}
        case "withdrawAmount":
            return {...state, Balance:state.Balance - action.payload} 
        case "error":
            return {...state, error:action.payload}
        default:
            return state
    }

}


const BankMain = () => {

    const initialState = {
        Withdraw:0,
        Deposit:0,
        Balance:0,
        error:""
    }

    const[state,dispatch]=useReducer(Transaction,initialState)

    const dispatchDeposit =()=>{
        if(state.Deposit < 100){
            dispatch({type:"error",payload:"Deposit amount more than 100rs"})
            dispatch({type:"deposit",payload:0})
        }else{
            dispatch({type:"DespositAmount",payload:parseInt(state.Deposit)})
            dispatch({type:"error",payload:""})
        }
       
    }
    const dispatchWithdraw =()=>{
        if(state.Withdraw < 100){
            dispatch({type:"error",payload:"Withdraw more than 100rs"})
            dispatch({type:"withdraw",payload:0})
        }else{
            dispatch({type:"withdrawAmount",payload:parseInt(state.Withdraw)})
            dispatch({type:"error",payload:""})
        }
       
    }
  return (
    <div>
        <h4>Bank</h4>

        <label htmlFor="withdraw">
            <input type="number" name="" id="" value={state.Deposit}  onChange={(e)=>{dispatch({type:"deposit",payload:e.target.value})}}/>
            <button onClick={dispatchDeposit}>Deposit</button>
        </label>
        <label htmlFor="deposit">
            <input type="number" name="" id="" value={state.Withdraw} onChange={(e)=>{dispatch({type:"withdraw",payload:e.target.value})}}/>
            <button onClick={dispatchWithdraw}>Withdraw</button>
        </label>
        <label htmlFor="balance">
            Balance Rupees {state.Balance}
        </label>
        <h5>message</h5>
        {state.error}
    </div>
  )
}

export default BankMain
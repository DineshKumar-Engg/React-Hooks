import React from 'react'
import { useReducer } from 'react'


const reducer=(state,action)=>{

    console.log(state,action);
    switch(action.type){
        case 'Withdraw Event':{
            return{...state,withdraw:action.payload}
        }
        case 'Deposit Event':{
            return{...state,deposit:action.payload}
        }
        case 'deposit Amount':{
            return {...state,balance:state.balance+action.payload}
        }
        case 'withdraw Amount':{
            return {...state,balance:state.balance-action.payload}
        }
        default:
            return state
    }
}



const Bank = () => {

const initialState={
    balance:0,
    deposit:0,
    withdraw:0
}



const [state,dispatch]=useReducer(reducer,initialState)


const handleWithdraw=(event)=>{
    dispatch({
        type:"Withdraw Event",
        payload:event.target.value
    })
}

const handleDeposit=(event)=>{
    dispatch({
        type:'Deposit Event',
        payload:event.target.value
    })
}

const dispatchWithdraw=()=>{
    if(state.balance===0){
        return
    }
        dispatch({
            type:'withdraw Amount',
            payload:parseInt(state.withdraw)
        })
        state.withdraw=0
}

const dispatchDeposit=()=>{

        dispatch({
            type:'deposit Amount',
            payload:parseInt(state.deposit)
        })

        state.deposit=0

}


  return (
    <div>
        <div>
            <h1>Bank Balance is :{state.balance} </h1>
        </div>
        <div>
            <input type={'number'} value={state.deposit} onChange={(e)=>handleDeposit(e)}/>
                <button onClick={dispatchDeposit}>Deposit</button>
            <input type={'number'} value={state.withdraw} onChange={(e)=>handleWithdraw(e)}/>
                <button onClick={dispatchWithdraw}>Withdraw</button>
        </div>
    </div>
  )
}

export default Bank
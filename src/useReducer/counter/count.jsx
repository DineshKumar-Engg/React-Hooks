import React from 'react'
import { useReducer } from 'react'
import '../counter/count.css';

const Count = () => {
    // const reducer = (state, { type, payload }) => {
    // const reducer = ({ count }, { type, payload }) => {
    const reducer=(state,action)=>{
        switch(action.type){
            case "increment":
                return {
                    count:state.count + action.payload
                };
            case "decrement":
                return{
                    count:state.count - action.payload
                };
            case "reset":
                return{
                    count:0
                };
            default:
                // return state;
                throw new Error(`Unknown action type: ${action.type}`)
        }
    }

    const initialState={
        count:0
    }
    const[state,dispatch] = useReducer(reducer,initialState)

  return (
    <div className='counter'>
        <h1>
            count is : {state.count}
        </h1>
        <button type='button' onClick={()=>{dispatch({type:'increment',payload:1})}}>+</button>
        <button type='button' onClick={()=>{dispatch({type:'decrement',payload:1})}}>-</button>
        <button type='button' onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
    </div>
  )
}

export default Count
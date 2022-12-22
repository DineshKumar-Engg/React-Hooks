import React, { useReducer } from 'react'
import '../Form/form.css'


const initialValue = {
    username: '',
    email: '',
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'textInput':
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        };
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  };
const Form2 = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    return (
      <div className='form'>
        <input
          value={state.username}
          onChange={(event) =>
            dispatch({
              type: 'textInput',
              payload: { key: 'username', value: event.target.value },
            })
          }
        />
        <input
          value={state.email}
          onChange={(event) =>
            dispatch({
              type: 'textInput',
              payload: { key: 'email', value: event.target.value },
            })
          }
        />
         <h1>UserName:{state.username}</h1>
      <h1>Email : {state.email}</h1>
      </div>
    );
  };

export default Form2
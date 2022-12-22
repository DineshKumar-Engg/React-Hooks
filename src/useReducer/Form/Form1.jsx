import React, { useReducer } from 'react'
import '../Form/form.css'
const Form1 = () => {
    const initialValue = {
        username: '',
        email: '',
      };
      
      const reducer = (state, action) => {
        switch (action.type) {
          case 'username':
            return {...state, username: action.payload };
          case 'email':
            return {...state, email: action.payload };
          default:
            throw new Error(`Unknown action type: ${action.type}`);
        }
      };
      const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div className='form'>
      <input
        type="text"
        value={state.username}
        onChange={(event) =>
          dispatch({ type: 'username', payload: event.target.value })
        }
      />
      <input
        type="email"
        value={state.email}
        onChange={(event) =>
          dispatch({ type: 'email', payload: event.target.value })
        }
      />
      <h1>UserName:{state.username}</h1>
      <h1>Email : {state.email}</h1>
    </div>
  );
}

export default Form1
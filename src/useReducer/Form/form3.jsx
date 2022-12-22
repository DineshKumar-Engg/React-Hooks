import { useReducer } from 'react';
import '../Form/form.css'

const initialValue = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const Form3 = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const inputAction = (event) => {
    dispatch({
      type: 'update',
      payload: { key: event.target.name, value: event.target.value },
    });
  };

  return (
    <div className='form'>
      <h1>firstName:{state.firstName}</h1>
      <h1>lastName:{state.lastName}</h1>
      <h1>UserName:{state.username}</h1>
      <h1>email:{state.email}</h1>

      <input
        value={state.firstName}
        type="text"
        name="firstName"
        onChange={inputAction}
      />
      <input
        value={state.lastName}
        type="text"
        name="lastName"
        onChange={inputAction}
      />
      <input
        value={state.username}
        type="text"
        onChange={inputAction}
        name="username"
      />
      <input
        value={state.email}
        type="email"
        name="email"
        onChange={inputAction}
      />
    </div>
  );
};
export default Form3;
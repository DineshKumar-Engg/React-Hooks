import React from 'react';
import ReactDOM from 'react-dom/client';
// import UseReducer from './useReducer/App';
import UseEffect from './useEffect/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseReducer />    */}
    <UseEffect/>
  </React.StrictMode>
);

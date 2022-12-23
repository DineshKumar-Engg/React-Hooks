import React from 'react';
import ReactDOM from 'react-dom/client';
// import UseReducer from './useReducer/App';
//import UseEffect from './useEffect/App'
//import UseRef from './useRef/App'
import UseContext from './useContext/App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>         // if use React.strictMode it will render and re-render 2 times
  //   {/* <UseReducer />    */}
  //   {/* <UseEffect/> */}
  //   {/* <UseRef/> */}
  //   <UseContext/>
  // </React.StrictMode>


      <UseContext/>

);

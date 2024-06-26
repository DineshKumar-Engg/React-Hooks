import React from 'react';
import ReactDOM from 'react-dom/client';
import UseReducer from './useReducer/App';
import UseEffect from './useEffect/App'
import UseRef from './useRef/App'
import UseContext from './useContext/App'
// import UseMemo from './useMemo/UseMemo';
  import UseCallback from './useCallback/App';
import App from './UseLAyoutEffect/App';
import UseDeferedValue from './UseDefered/UseDeferedValue';
import Debug from './UseDebugValue/Debug';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>         // if use React.strictMode it will render and re-render 2 times
    // <UseReducer />  
    // <UseEffect/> 
    // <UseRef/> 
    // <UseContext/>
  // </React.StrictMode>
      // <UseContext/>
    //<UseMemo/>
    // <UseCallback/>
    // <App/>
    // <UseDeferedValue/>
    <Provider store={store}>
<Debug/>
    </Provider>
    
);

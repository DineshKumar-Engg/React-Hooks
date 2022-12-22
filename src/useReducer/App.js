import React from "react";
import "../App.css";
import Reducer from "./Bank/Reducer"
import Form from "./Form/form";
import Count from "./counter/count";
 const UseReducer = () => {
  return (
    <div>
      <Reducer/>
      <Count/>
      <Form/>
    </div>
  )
}


export default UseReducer;
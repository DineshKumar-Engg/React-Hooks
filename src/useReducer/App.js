import React from "react";
import "../App.css";
import Reducer from "./Bank/Reducer"
import Form from "./Form/form";
import Count from "./counter/count";
import Bank from "./Bank/Bank";
import BankMain from "./TestBank/BankMain";


 const UseReducer = () => {
  return (
    <div>
      {/* <Reducer/>
      <Count/>
      <Form/> */}
      {/* <Bank/> */}
      <BankMain/>
    </div>
  )
}


export default UseReducer;
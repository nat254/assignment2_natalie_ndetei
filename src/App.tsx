// import logo from './logo.svg';
import React from "react";
import './App.css';
import Counter from "./component/Counter";
import PropDrilling from "./component/PropDrilling";
import Context from "./component/Context";
import DummyForm from "./component/DummyForm";
import Mother from "./component/Mother";
import DemoCarList from "./component/DemoCarList";
import Login from "./component/Login";
import Signup from "./component/Signup";
import FlowerDisplay from "./component/FlowerDisplay";
import FlowerContextProvider from "./context/FlowerContextProvider";

function App() {
  return (
    <div>
      {/* <Counter initialCount={5} />
       <PropDrilling />
       <Context />
       <DummyForm /> */}
      <FlowerContextProvider>
      <Mother />
      <br />
      <br />
      <DemoCarList />
      <br />
      <br />
      <Login />
      <br />
      <br />
      <Signup />
      <br />
      <br />
      
        <FlowerDisplay />
      </FlowerContextProvider>

      <br />
      <br />


    </div>
  );
}

export default App;

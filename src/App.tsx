// import logo from './logo.svg';
import React from "react";
import './App.css';
import Counter from "./component/Counter";
import PropDrilling from "./component/PropDrilling";
import Context from "./component/Context";
import DummyForm from "./component/DummyForm";

function App() {
  return (
    <div>
       <Counter initialCount={5} />
       <PropDrilling />
       <Context />
       <DummyForm />
    </div>
  );
}

export default App;

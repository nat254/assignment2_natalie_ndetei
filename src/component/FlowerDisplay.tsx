import React from 'react';
import { createContext, useState, useContext } from 'react';
import {FlowerContext} from '../context/FlowerContextProvider';

const FlowerDisplay = () => {
  const context = useContext(FlowerContext)!;

  if (!context) throw new Error("Missing <FlowerContext.Provider>");
  const { flower, changeFlower } = context;

  return (
    <div>
    <h1>To demonstrate Context, below is a flower, click to change type.</h1>
    <div onClick = {changeFlower}>{flower}</div>
    </div>
  );
};

export default FlowerDisplay;
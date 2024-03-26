import React from "react";
import { createContext, useState, useContext } from "react";
import FlowerDisplay from "../component/FlowerDisplay";

export const FlowerContext = createContext<FlowerContextProps | null>(null);


const FlowerContextProvider = ({
    children,
}: React.PropsWithChildren<{}>) => {
 const [flower, setFlower] = useState<string>("🌸");
 const changeFlower = () => setFlower("🌼");

  return (
    <FlowerContext.Provider value={{flower, changeFlower}}>
      {children}
    </FlowerContext.Provider>
  );
};

export default FlowerContextProvider;
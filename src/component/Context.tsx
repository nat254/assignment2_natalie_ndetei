import React from "react";
import { createContext, useState, useContext } from "react";

// export const WeatherContext = createContext<ContextWeatherProps | null>(null);

export const WeatherContext = createContext<ContextWeatherProps>({
    weather: "",
    changeWeather: () => {}
});

const Context = () => {
//   const [weather, setWeather] = useState<string>("🌞");

  const [weather, setWeather] = useState<"🌞"|"🌧️">("🌞");
  const changeWeather = () => setWeather("🌧️");

  return (
    <WeatherContext.Provider value={{ weather, changeWeather}}>
      <Europe />
    </WeatherContext.Provider>
  );
};

const Europe = () => {
  return <Estonia />;
};

const Estonia = () => {
  return <Tallinn />;
};

const Tallinn = () => {
  const context = useContext(WeatherContext)!;

  if (!context) throw new Error("Missing <WeatherContext.Provider>");
  const { weather, changeWeather } = context;

  return <div onClick={changeWeather}>{weather}</div>;
};

export default Context;
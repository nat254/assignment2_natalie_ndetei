type CounterProps = {
    initialCount: number;
};

type WeatherProps = {
    weather: string;
};

type ContextWeatherProps = {
    weather: string;
    changeWeather: () => void;
};

type AdviseProps = {
    advise: string;
};
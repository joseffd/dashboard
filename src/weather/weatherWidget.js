import React, {useEffect, useState} from "react";

import {getWeather} from "../api/api";

export default function WeatherWidget() {
    const [weatherData, setWeatherData] = useState({loading: true, data: null,});

    useEffect(() => {
    setWeatherData({loading: true});
        getWeather().then((data) => {
            setWeatherData({loading:false, data})
        });
    }, [setWeatherData]);
    return(
        <>
            <div className={"title"}><h1>Weather</h1></div>
            <h2>{weatherData.loading ? "-" : Math.round(weatherData?.data?.main?.temp - 273.15)} degrees</h2>

        </>
    )
}
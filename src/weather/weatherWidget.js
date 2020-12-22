import React, {useEffect, useState} from "react";

import {getWeather} from "../api/weatherApi";

export default function WeatherWidget() {
    const [weatherData, setWeatherData] = useState({loading: false, data: null,});

    useEffect(() => {
    setWeatherData({loading: true});
        getWeather().then((data) => {
            setWeatherData({loading:false, data})
        });
    }, [setWeatherData]);
    return(
        <div>
            {weatherData?.data?.base}
        </div>
    )
}
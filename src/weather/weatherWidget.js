import React, {useEffect, useState} from "react";
import {getWeather} from "../api/api";
import { WiDaySunny, WiCloudy, WiRain } from 'weather-icons-react';

export default function WeatherWidget() {
    const [weatherData, setWeatherData] = useState({loading: true, data: null,});
    const [coord, setCoords] = useState({lat: 0, lon: 0});

    navigator.geolocation.getCurrentPosition(function(position) {
        setCoords({lat: position.coords.latitude, lon: position.coords.longitude});
    });


    useEffect(() => {
    setWeatherData({loading: true});
        getWeather(coord).then((data) => {
            setWeatherData({loading:false, data})
        });
    }, [setWeatherData]);
    return(
        <>
            <div className={"title"}><h1>Weather</h1></div>
            <div className={"body"}>
                <h2>{weatherData.loading ? "-" : Math.round(weatherData?.data?.main?.temp - 273.15)} degrees</h2>
                <h2>{weatherData.loading ? "-" : weatherData?.data?.name}</h2>
                <h2>{weatherData.loading ? "-" : icon(weatherData?.data?.weather[0].main)}</h2>
            </div>

        </>
    )
}

function icon(weather){
    console.log(weather);
    switch(weather){
        case "Clouds":
            return <WiCloudy size={50} color='#000' />;
        case "Sun":
            return <WiDaySunny size={50} color='#000' />;
        case "Rain":
            return <WiRain size={50} color='#000' />;
        default:
            return weather;
    }


    return "Test"
}

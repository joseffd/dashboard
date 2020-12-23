import React, {useEffect, useState} from "react";
import {getWeather} from "../api/api";
import { WiDaySunny, WiCloudy, WiRain } from 'weather-icons-react';

export default function WeatherWidget() {
    const [weatherData, setWeatherData] = useState({loading: true, data: null,});

    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
    });
    useEffect(() => {
    setWeatherData({loading: true});
        getWeather().then((data) => {
            setWeatherData({loading:false, data})
        });
    }, [setWeatherData]);
    console.log(weatherData.data)
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
            return <WiCloudy size={24} color='#000' />;
        case "Sun":
            return <WiDaySunny size={24} color='#000' />;
        case "Rain":
            return <WiRain size={24} color='#000' />;
        default:
            return weather;
    }


    return "Test"
}

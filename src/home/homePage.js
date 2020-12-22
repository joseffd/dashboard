import React from "react";
import {useParams} from 'react-router-dom';
import WeatherWidget from "../weather/weatherWidget";
import NewsWidget from "../news/newsWidget";

export default function HomePage() {
    let { username } = useParams();
    return(
        <div>
            {username}
            <WeatherWidget />
            <NewsWidget />
        </div>
    )
}
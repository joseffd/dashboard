import React from "react";
import {useParams} from 'react-router-dom';
import WeatherWidget from "../weather/weatherWidget";
import NewsWidget from "../news/newsWidget";
import './homePage.css';
import TasksWidget from "../tasks/tasksWidget";

export default function HomePage() {
    let { username } = useParams();
    return(
        <div>
            <div className={"widgets"}>
                <div className={"widget"}>
                    <WeatherWidget />
                </div>
                <div className={"widget"}>
                    <NewsWidget />
                </div>
                <div className={"widget"}>
                    <TasksWidget />
                </div>

            </div>
        </div>
    )
}
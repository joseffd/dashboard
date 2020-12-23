import React from "react";
import {useParams} from 'react-router-dom';
import WeatherWidget from "../weather/weatherWidget";
import NewsWidget from "../news/newsWidget";
import './homePage.css';
import TasksWidget from "../tasks/tasksWidget";
import ClothesWidget from "../clothes/clothesWidget";
import ls from "local-storage";
import {getIndex} from "../login/login";

export default function HomePage() {
    let { username } = useParams();
    const users = ls.get('users');
    const userIndex = getIndex(username, users);
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
                    <TasksWidget userIndex={userIndex} />
                </div>

                <div className={"widget"}>
                    <ClothesWidget />
                </div>

            </div>
        </div>
    )
}
import {handleError, handleResponse} from "./apiUtils";

const APIkey = 'd0a10211ea3d36b0a6423a104782130e';
const lat = 51;
const lon = -3;


export function getWeather(){
    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`).then(handleResponse).catch(handleError);
}


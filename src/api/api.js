import {handleError, handleResponse} from "./apiUtils";


const APIkey = 'd0a10211ea3d36b0a6423a104782130e';
let lat = 40;
let lon = -0.1278;


export function getWeather(){
    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`).then(handleResponse).catch(handleError);
}

export function getClothes(){
    return fetch(`https://therapy-box.co.uk/hackathon/clothing-api.php?username=swapnil`).then(handleResponse).catch(handleError);
}


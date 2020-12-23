import React from "react";
import {clothes} from '../api/clothes'
import {PieChart} from 'react-minimal-pie-chart';

export default function ClothesWidget() {
    let countRaincoat = 0;
    let countBlazer = 0;
    let countJacket = 0;
    let countHoodie = 0;
    let countJumper = 0;
    let countSweater = 0;
    clothes.payload.forEach((day) => {
        switch (day.clothe){
            case "raincoat":
                countRaincoat++;
                break;
            case "jacket":
                countJacket++;
                break;
            case "blazer":
                countBlazer++;
                break;
            case "hoodie":
                countHoodie++;
                break;
            case "jumper":
                countJumper++;
                break;
            case "sweater":
                countSweater++;
                break;
        }
    })
    return(
        <>
            <h1>Clothes</h1>
            <PieChart data={[
                {title: 'Raincoat', value: countRaincoat, color: '#E38627'},
                {title: 'Jacket', value: countJacket, color: '#C13C37'},
                {title: 'Blazer', value: countBlazer, color: '#6A2135'},
                {title: 'Hoodie', value: countHoodie, color: '#212d6a'},
                {title: 'Jumper', value: countJumper, color: '#63216a'},
                {title: 'Sweater', value: countSweater, color: '#63216a'}
            ]}
                      label={({ dataEntry }) => dataEntry.title + "," + dataEntry.value}
                      labelStyle={() => ({
                          fontSize: '4.5px',
                          fontFamily: 'sans-serif',
                      })}
            />
        </>
    )
}
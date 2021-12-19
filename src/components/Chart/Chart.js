import {Container} from "@material-ui/core";
import React from "react";
import {useStyles} from "./useStyles";

const Chart = ({hourlyDetails}) => {

    const classes = useStyles();

    const hourlyTemp24 = hourlyDetails.hourly.slice(0, 25);
    const minTempItem = hourlyDetails.hourly.slice(0, 25).reduce((acc, curr) => acc.temp < curr.temp ? acc : curr)
    const minTemp = Math.round(minTempItem.temp - 273.15)

    return (
        <Container className={classes.root}>
            {hourlyTemp24.map((hour) => {
                let timeHour = new Date(hour.dt * 1000).getHours();

                if (timeHour < 10) {
                    timeHour = `0${timeHour}`;
                }

                const red = 125;
                const green = 125;
                const blue = 255;

                const r = Math.floor(((255 - 125) * (hour.temp - 273)) / 10);
                const temp = Math.round(hour.temp - 273)
                const signTemp = temp > 0 ? `+${temp}`:temp

                return (
                    <div key={hour.dt} className={classes.item}>
                        <div style={{
                            backgroundColor: `rgb(${red + r}, ${green}, ${blue - r})`,
                            marginBottom: ` ${-5 * (minTemp) + 5 * Math.round(hour.temp - 273) + 5}px`,
                            textAlign: 'center',
                        }}>{signTemp}</div>
                        <div>{timeHour}:00</div>
                    </div>
                );
            })}
        </Container>
    )
}
export default Chart

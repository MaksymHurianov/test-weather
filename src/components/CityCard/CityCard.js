import {useDispatch} from "react-redux";
import {DELETE_CITY, updateWeatherTC} from "../../redux/cityWeatherReducer";
import {Button, Card, CardActionArea, CardContent, Grid, Typography} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {useStyles} from "./useStyles";
import React from "react";


const CityCard = ({name, temp, description, date, id, icon, main}) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const deleteCity = () => {
        dispatch({type: DELETE_CITY, id})
    }
    const updateData = () => {
        dispatch(updateWeatherTC(id))
    }
    const signTemp = temp > 0 ? `+${temp}` : temp

    return (
        <Grid className={classes.wrapper}>
            <Card className={classes.cardStyle}>
                <CardActionArea component={Link} to={`/cityDetails/${id}`}>
                    <CardContent>
                        <Typography align="center" gutterBottom variant="h5"
                                    component="h2">{`${name} ${signTemp}C`}&deg;</Typography>
                        <img
                            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                            alt={description}
                            className={classes.imageStyle}
                        />
                        <Typography align="center" variant="body2" color="textSecondary" component="p">
                            {main}
                        </Typography>
                        <Typography
                            style={{marginTop: 10}}
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            align="center"
                        >
                            Last update {date}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Grid container justifyContent={"space-evenly"}>
                    <Button className={classes.buttonStyle} color={"secondary"} onClick={deleteCity}>delete</Button>
                    <Button className={classes.buttonStyle} onClick={updateData}>update</Button>
                </Grid>
            </Card>
        </Grid>
    )
}

export default CityCard

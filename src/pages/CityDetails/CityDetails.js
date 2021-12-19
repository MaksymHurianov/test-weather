import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {getCityDetailsTC} from "../../redux/cityWeatherDetailsReducer";
import {Card, CardContent, Container, Grid, IconButton, Typography} from "@material-ui/core";
import {fullTime} from "../../utils/Date";
import Loader from "../../components/Loader";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import ErrorSnackbar from "../../components/ErrorSnackbar";
import {useStyles} from "./useStyles";
import Chart from "../../components/Chart";


const CityDetails = () => {

    const classes = useStyles();
    const {cityId} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCityDetailsTC(cityId))
    }, [cityId, dispatch])

    const cityDetails = useSelector((state) => state.cityDetails)
    const hourlyDetails = useSelector((state) => state.hourlyDetails)
    const status = useSelector((state) => state.app.status)

    const isLoading = status === 'loading'
    const mainTemp = Math.round(cityDetails.main.temp - 273.15)
    const mainTempPlus = mainTemp > 0 ? `+${mainTemp}` : mainTemp

    if(!cityDetails.isLoaded){
        return <ErrorSnackbar/>
    }
    return (
        <>
            {isLoading
                ? <Loader/>
                : <>
                    <Container maxWidth="md" component="main">
                        <Card className={classes.cardStyle}>
                            <CardContent>
                                <Grid container justifyContent='space-between' alignItems='center'>
                                    <Grid item>
                                        <Link to="/">
                                            <IconButton>
                                                <ArrowBackSharpIcon/>
                                            </IconButton>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            {cityDetails.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            {mainTempPlus}&deg;C
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <img
                                            src={`https://openweathermap.org/img/wn/${cityDetails.weather[0].icon}@2x.png`}
                                            alt={cityDetails.weather[0].description}
                                        />
                                    </Grid>
                                </Grid>

                                <Typography variant="subtitle1" align="center">
                                    {`sunrise ${fullTime(new Date(cityDetails.sys.sunrise * 1000))}`}
                                </Typography>
                                <Typography variant="subtitle1" align="center">
                                    {`sunset ${fullTime(new Date(cityDetails.sys.sunset * 1000))}`}
                                </Typography>
                                <Typography variant="subtitle1" align="center">
                                    {`${Math.floor((cityDetails.main.pressure * 7.464) / 10)} mm.Hg`}
                                </Typography>
                                <Typography variant="subtitle1" align="center">
                                    {`wind speed ${cityDetails.wind.speed}m/s`}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Container>
                    <Chart hourlyDetails={hourlyDetails}/>
                    <ErrorSnackbar/>
                </>
            }
        </>
    )
}

export default CityDetails

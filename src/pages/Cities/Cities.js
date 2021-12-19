import React, {useEffect} from "react";
import SearchCity from "../../components/SearchCity";
import CityCard from "../../components/CityCard";
import {useDispatch, useSelector} from "react-redux";
import {fullTime} from "../../utils/Date";
import {Grid} from "@material-ui/core";
import ErrorSnackbar from "../../components/ErrorSnackbar";
import Loader from "../../components/Loader";
import {GET_CITIES_LIST} from "../../redux/cityWeatherReducer";


const Cities = () => {

    const {city: cityWeatherList} = useSelector((state) => state.cityWeatherList)
    const status = useSelector((state) => state.app.status)
    const dispatch = useDispatch()

    useEffect(() => {
        const data = localStorage.getItem('citiesList')
        if (data) {
            dispatch({type: GET_CITIES_LIST, data: JSON.parse(data)})
        }

    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('citiesList', JSON.stringify(cityWeatherList))
    }, [cityWeatherList])

    const isLoading = status === 'loading'

    return (
        <>
            {
                isLoading && cityWeatherList.length
                    ? <Loader/>
                    : (<>
                        <SearchCity/>
                        <ErrorSnackbar/>
                        <Grid container justifyContent='space-evenly'>
                            {cityWeatherList.map((cityData) => {
                                const date = fullTime(new Date(cityData.dt * 1000))
                                return (
                                    <CityCard
                                        key={cityData.id}
                                        id={cityData.id}
                                        name={cityData.name}
                                        temp={Math.round(cityData.main.temp)}
                                        description={cityData.weather[0].description}
                                        main={cityData.weather[0].main}
                                        icon={cityData.weather[0].icon}
                                        date={date}
                                    />
                                )
                            })}
                        </Grid>
                    </>)
            }
        </>
    );
}
export default Cities


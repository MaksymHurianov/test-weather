import {useDispatch} from "react-redux";
import {useState} from "react";
import {cityWeatherReducerTC} from "../../redux/cityWeatherReducer";
import SearchIcon from "@material-ui/icons/Search";
import {Button, InputBase} from "@material-ui/core";
import {setErrorAC} from "../../redux/appReducer";
import {useStyles} from "./useStyles";


const SearchCity = () => {
    const classes = useStyles();
    const [cityName, setCityName] = useState('')
    const dispatch = useDispatch()

    const addCity = (e) => {
        e.preventDefault();

        if (!cityName.trim().length) {
            dispatch(setErrorAC("Field is empty"))
            return
        }
        dispatch(cityWeatherReducerTC(cityName.trim()))
        setCityName("");
    };

    return (
        <form className={classes.search} onSubmit={addCity}>
            <InputBase
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                placeholder="Enter the city…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
            />
            <Button type="submit">
                <SearchIcon/>
            </Button>
        </form>
    )
}

export default SearchCity

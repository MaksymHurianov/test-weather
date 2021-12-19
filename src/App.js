import React from 'react';
import {Container, Grid} from "@material-ui/core";
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Cities from "./pages/Cities";
import CityDetails from "./pages/CityDetails";
import PageNotFound from "./pages/PageNotFound";


function App() {

    return (
        <Router>
            <Grid container alignItems='center' justifyContent='center'>
                <Grid item>
                    <Container maxWidth="lg" style={{marginTop: '25px'}}>
                        <Routes>
                            <Route path="/" element={<Cities/>}/>
                            <Route path="/cityDetails/:cityId" element={<CityDetails/>}/>
                            <Route path="*" element={<PageNotFound/>}/>
                        </Routes>
                    </Container>
                </Grid>
            </Grid>
        </Router>
    );
}

export default App;

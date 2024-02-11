import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import styled from "styled-components"
import axios from "axios"
import Navbar from "../../Components/Navbar"

const Container = styled.div`
& .calendar{
    border : solid 1.5px ; 
    margin : 0 ; 
    background : #cacdcd;
    margin : 100px ;
    &:hover{
        transform: scale(1.1);
        transition : .8s;
        box-shadow: -10px 10px 10px #00000067 ;
    }
}
`
const api = {
    key: '386df2f61f35d2858d5be09b6280d379',
    base: "https://api.openweathermap.org/data/2.5"
}

function Calendar() {

    const [weather, setWeather] = React.useState({})
    const [long, setLong] = React.useState(0)
    const [lat, setLat] = React.useState(0)

    React.useEffect(() => {
        const pos = navigator.geolocation.getCurrentPosition(
            coords => {
                setLong(coords.coords.longitude)
                setLat(coords.coords.latitude)
            });
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=a1bf7473e99051f08ca2498e42caf209`)
            .then(res => console.log(res.data))
            .then(res => setWeather(res.data))
            .catch(err => err)
    }, [])

    return (
        <Container>
            <Navbar />
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DateCalendar className='calendar' />
            </LocalizationProvider>
        </Container >
    )
}

export default Calendar
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css'
import { useState } from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("")
    let [error,setError]=useState(false);
    const api_url="https://api.openweathermap.org/data/2.5/weather";
    const api_key="6b6a85df1e4d318169e0746c8a2d8500"

    let getWeather=async()=>{
     try{
        let response=await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`)
        let jsonResponse=await response.json()
        console.log(jsonResponse);
        let res={
          city:city,
          temp: jsonResponse.main.temp,
          tempMin:jsonResponse.main.temp_min,
          tempMax:jsonResponse.main.temp_max,
         humidity: jsonResponse.main.humidity,
         feelsLike:jsonResponse.main.feels_like,
         weather:jsonResponse.weather[0].description,
  
        }
        console.log(res);
        return res;
     }catch(err){
        throw err;
     }
    }


let handleChange=(event)=>{
    setCity(event.target.value);
}

let handleSubmit=async(event)=>{
  try{
    event.preventDefault();
  console.log(city);
  setCity("")
  let newInfo=await getWeather();
  updateInfo(newInfo);
  setError(false)
  }catch(err){
    setError(true)
  }
}

    return (
        <div className='searchBox'>
            <TiWeatherPartlySunny />
       
        <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="City Name"onChange={handleChange} value={city}  variant="outlined" required />  
        <br /><br />
        <Button variant="contained" type="submit">
        Search
      </Button>
  {error &&  <p style={{color:"red"}}>No such place Exists</p> }
          </form>
        </div>
    )
}
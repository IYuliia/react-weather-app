import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';

export default function Weather(props) {

    
    const [weatherData, setWeatherData] = useState ({ready : false});

    function handleResponse (response) {
        console.log (response.data);
        setWeatherData ({
            ready: true,
            desription: response.data.weather[0].description,
            iconUrl: "https://www.iconspng.com/images/weather.jpg",
            temperature: response.data.main.temp,
            date: "Tuesday 10:08",
            pressure: response.data.main.pressure,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
        });
    }

   
if (weatherData.ready) {
  return (
    <div>
      <div className="Weather">
        <form className="search-form" id="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city..."
                autoFocus="on"
                autoComplete="off"
                className="form-control shadow-sm"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-outline-primary shadow-sm"
              />
            </div>
            <div className="col-3">
              <button className="btn btn-outline-secondary w-100">
                Current Location
              </button>
            </div>
          </div>
        </form>

        <h1> {weatherData.city} </h1>

        <ul>
          <li> {weatherData.date} </li>

          <li className = "text-capitalize"> {weatherData.description} </li>
        

 
         <li className = "clearfix">
          <img 
          src= {weatherData.iconUrl} 
          alt={weatherData.description} 
          className = "float-left"
          />
          </li>



        <li className="temperature">
            {Math.round(weatherData.temperature)}
            <span className="unit">˚C</span>  
        </li>
         
      
</ul>
        <hr />
        <div className="buttons">
          <div className="row">
            <div className="col-4">
              <span className="badge rounded-pill bg-primary">
                PRESSURE:
                <br />
                {weatherData.pressure}
              </span>
            </div>

            <div className="col-4">
              <span className="badge rounded-pill bg-primary">
                HUMIDITY: <br />
                {weatherData.humidity} %
              </span>
            </div>
            <div className="col-4">
              <span className="badge rounded-pill bg-primary">
                WIND SPEED: <br />
                {weatherData.wind} km/h
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
} else {
    const apiKey = "3c6fa7eb1509f433df6d22a9b1a8b999";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 

    return "Loading...";
}
}

import React from 'react';
import './Weather.css';

export default function Weather() {
   let weatherData = {
    city: "New York",
    date: "Tuesday 10:08",
    description: "Clear Sky",
    temperature: "26",
    imgUrl: "https://www.freeiconspng.com/images/sun",
    pressure: "1017",
    humidity: "17",
    wind: "7"
  };

  return (
    <div>
      <div className="Weather">
        <form className="search-form" id="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city..."
                autofocus="on"
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

        <h1> {weatherData.city}</h1>

        <p>
          {weatherData.date}

          <div id="description"> </div>
          <img src={weatherData.imgUrl} alt={weatherData.description} />
        </p>

        <h2>
          <div className="weather-temperature">
            {weatherData.temperature}
            <span className="units">˚C</span>
          </div>
        </h2>
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
}
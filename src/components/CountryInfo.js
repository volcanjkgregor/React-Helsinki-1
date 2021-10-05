import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ weather }) => {
	return (
		<div className="">
			<p>
				<strong>temperature: </strong>
				{weather.current.temperature} Celsius
			</p>
			<img src={weather.current.weather_icons[0]} alt="weather icon" />
			<p>
				<strong>Wind:</strong> {weather.current.wind_speed} km/h direction{' '}
				{weather.current.wind_dir}
			</p>
		</div>
	);
};

const CountryInfo = ({ country }) => {
	const [weather, setWeather] = useState({});

	useEffect(() => {
		axios
			.get(
				`http://api.weatherstack.com/current?access_key=
			${process.env.REACT_APP_WEATHER_KEY}&
			query=${country.capital}`
			)
			.then((response) => {
				setWeather(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	console.log(weather);
	return (
		<div>
			<h2>{country.name}</h2>
			<p>capital {country.capital}</p>
			<p>population {country.population}</p>
			<h3>Spoken languages</h3>
			<ul>
				{country.languages.map((lang, i) => {
					<li key={i}>{lang.name}</li>;
				})}
			</ul>
			<img src={country.flag} width="200" alt={`${country.name} flag`} />
			<div className="">
				{weather === {} ? 'No data' : <Weather weather={weather} />}
			</div>
		</div>
	);
};

export default CountryInfo;

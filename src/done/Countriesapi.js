import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import CountryInfo from './components/CountryInfo';
import Country from './components/Country';

const Form = ({ country, setCountry }) => {
	const handleOnChange = (event) => {
		setCountry(event.target.value);
	};

	return (
		<div className="">
			<form>
				find countries
				<input type="text" onChange={handleOnChange} value={country} />
			</form>
		</div>
	);
};

const App = () => {
	console.log(`Predstavljam ${process.env.REACT_APP_WEATHER_KEY}`);
	const [countries, setCountries] = useState('');
	const [search, setSearch] = useState('');

	useEffect(() => {
		axios
			.get(`https://restcountries.eu/rest/v2/all`)
			.then((response) => setCountries(response.data))
			.catch((error) => console.log(error));
	}, []);

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	const countriesToShow =
		search === ''
			? []
			: countries.filter((country) =>
					country.name.toLowerCase().includes(search.toLowerCase())
			  );

	if (countriesToShow.length === 1) {
		return (
			<div className="">
				Find countries <input onChange={handleSearchChange} />
				<div>
					<CountryInfo country={countriesToShow[0]} />
				</div>
			</div>
		);
	}

	return (
		<div>
			Find countries <input onChange={handleSearchChange} />
			<div>
				{countriesToShow.length > 10
					? 'Too many matches, specifyt another filter'
					: countriesToShow.map((country, i) => (
							<div key={i}>
								<Country country={country} />
							</div>
					  ))}
			</div>
		</div>
	);
};

export default App;

import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);

    const [visitedCountries, setVisitedCountries] = useState([]);

    

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }
    return (
        <div>
            <h1>Traveling Countries </h1>
            <h4>Total Countries: {countries.length}</h4>
            <h5>Traveled So Far: {visitedCountries.length}</h5>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.cca3} 
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
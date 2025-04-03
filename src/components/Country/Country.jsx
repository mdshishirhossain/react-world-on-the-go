import React, { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountries }) => {
    const { name, flags, independent, capital, population } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // if(visited === true){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true)
        // }

        setVisited(!visited);
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Independent: {independent ? "Free" : "Not Free"}</p>
            <p>Population: {population}</p>
            <p>Capital: {capital}</p>
            <button onClick={handleVisited}>{visited ? "Visited":"Not Visited"}</button>
        </div>
    );
};

export default Country;
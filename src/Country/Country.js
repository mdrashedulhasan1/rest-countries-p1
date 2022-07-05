import React from 'react';
import './Country.css';
const Country = (props) => {
    return (
        <div className='country-container'>
            <h1>Name:{props.name}</h1>
            <h3>Capital:{props.capital}</h3>
            <h4>Population:{props.population}</h4>
        </div>
    );
};

export default Country;
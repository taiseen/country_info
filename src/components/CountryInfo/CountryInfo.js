import React from 'react';

const CountryInfo = (props) => {

    const { countryObject } = props;
    const { name, flags, capital, population, region, languages } = countryObject;


    return (
        <>
            <img src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <h5>capital : {capital || 'Missing'}</h5>
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <p>Language : {Object.keys(languages).map(lan => languages[lan] + '\n')} </p>
        </>
    );
};

export default CountryInfo;
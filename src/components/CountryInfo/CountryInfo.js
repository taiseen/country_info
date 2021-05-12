import React from 'react';

const CountryInfo = (props) => {

    const { countryObject } = props;
    const { name: CountryName, flag, capital, population, region, languages } = countryObject;

    return (
        <>
            <img src={flag} alt="" />
            <h2>{CountryName}</h2>
            <h5>capital : {capital || 'Missing'}</h5>
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <p>Language : {languages?.map(lan => lan.name + ' ')} </p>
        </>
    );
};

export default CountryInfo;
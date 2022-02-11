import React from 'react';

const CountryHolder = ({ countryObject, userClick }) => {

    const { name, flags } = countryObject;

    return (
        <div className="country_holder" onClick={() => userClick(countryObject)}>
            <img src={flags.png} alt="" />
            <h3>{name.common}</h3>
        </div>
    );
};

export default CountryHolder;
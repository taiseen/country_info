import React from 'react';

const CountryHolder = (props) => {
    const { countryObject, userClick } = props;
    const { name, flag } = countryObject;

    return (
        <div className="country_holder" onClick={() => userClick(countryObject)}>
            <img src={flag} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default CountryHolder;
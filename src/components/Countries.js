import React, { useEffect, useState } from 'react';
import './Countries.css';
import CountryHolder from './CountryHolder/CountryHolder';
import CountryInfo from './CountryInfo/CountryInfo';

//10-May-2021

const Countries = () => {
    // Logic || BackEnd

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState({});
    const [searchCountry, setSearchCountry] = useState();
    const [getSearchCountry, setGetSearchCountry] = useState([]);
    const [showInfo, setShowInfo] = useState(false);


    // for get all countries
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(err => console.log(err))
    }, []);

    
    // for get only searching country
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${searchCountry}`
        fetch(url)
            .then(res => res.json())
            .then(data => setGetSearchCountry(data))
            .catch(err => console.log(err))
    }, [searchCountry]);


    // after user click, display divide into Two section | logic...
    const handleClick = (country) => {
        if (country) {
            setShowInfo(true);
            setCountry(country);
        }
    }

    // after user click outside, display marge into One section | logic...
    const handleClickOutside = (event) => {
        if (showInfo && event.target.tagName !== 'IMG') {
            setShowInfo(false);
        }
    }

    // user input for searching country
    const handleSearch = (e) => {
        setSearchCountry(e.target.value);
    }

    // after user click, this inline css apply
    const halfWidth = {
        width: '70%',
    }


    // HTML DOM ==> Node's || FontEnd
    return (
        <div className="container" onClick={(e) => handleClickOutside(e)}>

            <div className="header">
                <h1>Country Info</h1>
                <h3>Total Countries : {countries.length}</h3>
            </div>

            <div className="search_area">
                <input onChange={handleSearch} type="text" placeholder="Search Country" />
            </div>

            <div className="country_container" >

                {
                    !showInfo
                        ? <div className="all_country">
                            {
                                getSearchCountry.length > 0 ?
                                    getSearchCountry?.map(country =>
                                        <CountryHolder
                                            key={country.alpha3Code}
                                            countryObject={country}
                                            userClick={handleClick} />
                                    )
                                    :
                                    countries?.map(country =>
                                        <CountryHolder
                                            key={country.alpha3Code}
                                            countryObject={country}
                                            userClick={handleClick} />
                                    )
                            }
                        </div>
                        : <div className="all_country" style={halfWidth}>
                            {

                                getSearchCountry.length > 0 ?
                                    getSearchCountry?.map(country =>
                                        <CountryHolder
                                            key={country.alpha3Code}
                                            countryObject={country}
                                            userClick={handleClick} />
                                    )
                                    :
                                    countries?.map(country =>
                                        <CountryHolder
                                            key={country.alpha3Code}
                                            countryObject={country}
                                            userClick={handleClick} />
                                    )
                            }
                        </div>


                }
                {
                    showInfo &&
                    <div className="country_info">
                        <CountryInfo countryObject={country} />
                    </div>
                }
            </div>

        </div>
    );
};

export default Countries;
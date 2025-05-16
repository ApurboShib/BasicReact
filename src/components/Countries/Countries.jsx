import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  // normally state jekhane declare korbo sekhane onClick thala lage and function tao thaka lage,
  // but jodi onno jayga theke click kori taile jekhan theke dekhate cai sekhane etake as a
  // props hisebe niye ashte hbe.
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add to your visited country");
    // console.log(country);
    // amra ekhane jodio array but, (push ba pop func) use korte parbo na.
    // new ekta array banaiye kaj kora lagbe. and sob country gulake copy kora lagbe.
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h3>Hello from Countries.</h3>
      <h3>Countries : {countries.length} </h3>
      <div>
        <h3>
          <i>Overall Visited Country :{visitedCountries.length} </i>
        </h3>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      {countries.map((country, index) => (
        <Country
          key={country.cca3 || index}
          country={country}
          handleVisitedCountry={handleVisitedCountry}
        />
      ))}

      {/* {
              countries.map(country => <Country country = {country} ></Country>)
          } */}
    </div>
  );
};

export default Countries;

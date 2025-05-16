import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setCountries(data));
  }, []);

  return (
    <div >
      <h3>Hello from Countries.</h3> 
          <h3>Countries : {countries.length} </h3>
          {
              countries.map((country, index) => (
                <Country key={country.cca3 || index} country={country} />
              ))
          }

          {/* {
              countries.map(country => <Country country = {country} ></Country>)
          } */}
    </div>
  );
};

export default Countries;

import "./Country.css";
import { useState } from "react";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, capital, languages, cca3 } = country;

  // visited countries er jonno amra kichu functionality add krte cai,

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    //  amra set korechi je click korlei man ta true hoyr jabe
    // setVisited(true);
    // amra caile toggle korate pari, je ekbar click korle true hoye jabe, abar click korle false hoye jabe
    setVisited(!visited);
    console.log("Visited");
  };

  // Convert languages object to a comma-separated string
  const languageList = languages ? Object.values(languages).join(", ") : "N/A";

  return (
    <div className="country">
      <h3>{name?.common}</h3>
      <img src={flags?.png} alt={`${name?.common} flag`} />
      <p>Capital: {capital ? capital.join(", ") : "N/A"}</p>
      <p>Languages: {languageList}</p>
      <p>
        <small>Code : {cca3} </small>
      </p>
      <button onClick={handleVisited}>{visited ? "visited" : "Going"}</button>

      {/* this is the one way to do this. */}
      {visited ? (
        <p className="btnColour"> i Have Visited</p>
      ) : (
        <p className="btnColour">Not Visited</p>
      )}
      {/* this is the another way to do this. */}
      {/* {visited && "I have visited this country."} */}
    </div>
  );
};

export default Country;

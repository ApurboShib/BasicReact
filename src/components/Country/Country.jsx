import "./Country.css";
import { useState } from "react";
const Country = ({ country, handleVisitedCountry }) => {
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
  // show that je amader eita add hoise kina.
  // console.log(handleVisitedCountry);

  // eitar jonno amra ekta arrow-function likhe felbo jar though te amra kaj ta korte parbo.
  // const passWithPara = () => {
  //   handleVisitedCountry(country);
  //   // console.log(country);
  //   // ekhane amra country ta pass kore dibo.
  //  }

  return (
    <div className={`country ${visited ? "visited" : ""}`}>
      {/* visited class ta jodi true hoye jaye tahole visited class ta add hoye jabe */}
      {/* visited class ta css e use kore amra visited countries er background color change kore dibo */}

      <h3 style={{ color: visited ? "purple" : "white" }}>{name?.common}</h3>
      <img src={flags?.png} alt={`${name?.common} flag`} />
      <p>Capital: {capital ? capital.join(", ") : "N/A"}</p>
      <p>Languages: {languageList}</p>
      <p>
        <small>Code : {cca3} </small>
      </p>
      <br />
      {/* there is an different way to write this. */}
      {/* <button onClick={passWithPara}>Mark Visited</button> */}
      {/* directly amra onClick(er moddhe arrow-function tao diye dite pari) */}
      {/* eventHandeler er moddhe perameter pathaite hole arrow-func dite pathate hoy. */}
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      {/* handleVisitedCountry() eta always kaj korbe na, eita dile sob gula country er jonno call hoye jabe. */}

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

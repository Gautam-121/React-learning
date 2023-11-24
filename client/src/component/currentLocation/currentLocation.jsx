import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CurrentLocation = () => {

  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [locationFetch, setLocationFetch] = useState(false);

  const [searchArea, setSearchArea] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");

  const navigate = useNavigate()

  const currentLocationHandler = () => {
    setLocationFetch(true);
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position?.coords?.latitude);
      setLongitude(position?.coords?.longitude);
    });
  };

  useEffect(() => {
    if (latitude != "" && longitude != "") {
      const data = JSON.stringify({"latitude" : latitude , "longitude" : longitude})
      localStorage.setItem("location" , data) 
     }
  }, [latitude, longitude]);


  useEffect(() => {
    const timer = setTimeout(() => {
      getCurrentAddress();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchArea]);

  const getCurrentAddress = async () => {
    try {
      const address = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchArea}`
      );
      const jsonAddress = await address.json();
      setCurrentAddress(jsonAddress);
    } catch (error) {
      console.log(`Error fetching place suggestion`, error);
    }
  };

  return locationFetch === false ? (
    <div>
      <button onClick={currentLocationHandler}> Get CurrentLocation</button>
      <input
        type="text"
        placeholder="Search By Area , Street"
        onChange={(e) => setSearchArea(e.target.value)}
        value={searchArea}
      />
    </div>
  ) : (
    (latitude=="" && longitude=="") ? <div>Fetching Restaurent</div> : navigate("/")
  );
};

export default CurrentLocation;

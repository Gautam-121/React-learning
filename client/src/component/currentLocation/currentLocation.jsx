import { useEffect, useState } from "react";
import useRestaurent from "../../utils/useRestaurent";

const apiKey = "";

const CurrentLocation = () => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [searchArea, setSearchArea] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [restaurent, setRestaurent] = useState([]);
  const [locationFetch, setLocationFetch] = useState(false);

  const currentLocationHandler = () => {
    setLocationFetch(true);
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      setLatitude(position?.coords?.latitude);
      setLongitude(position?.coords?.longitude);
    });
  };

  useEffect(() => {
    if (latitude != "" && longitude != "") {
      fetchCurrentRestaurent();
    }
  }, [latitude, longitude]);

  const fetchCurrentRestaurent = async () => {
    const getCureentRestaurent = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
    const currentLocationArea = await getCureentRestaurent.json()
    localStorage.setItem({"latitude" : latitude , "longitude" : longitude})
    console.log(currentLocationArea)
  };

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
    (latitude=="" && longitude=="") ? <div>Fetching Restaurent</div> : <div>Restaurent Fetch Done</div>
  );
};

export default CurrentLocation;

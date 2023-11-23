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
    const getCureentRestaurent = await fetch(
      `https://www.swiggy.com/mapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}`
    );
    const jsonRestaurent = await getCureentRestaurent.json();
    setRestaurent(jsonRestaurent?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(jsonRestaurent?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
    restaurent.length == 0 ? <div>Fetching Restaurent</div> : <div>Restaurent Fetch Done</div>
  );
};

export default CurrentLocation;

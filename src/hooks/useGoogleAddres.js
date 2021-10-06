import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddres = address => {

    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAP_API_KEY}`;

    useEffect(async () => {

         const response = await axios(API);
         setMap(response.data.results[0].geometry.location);

    }, []);

    return map;

}

export default useGoogleAddres;
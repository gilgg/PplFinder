import { useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint import/no-webpack-loader-syntax: off
import axios from "axios";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const useMap = (index, location, setIsLoading) => {
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState([]);
  const [isMarkerAdded, setIsMarkerAdded] = useState(false);

  const getCoords = async () => {
    setIsLoading(true);
    const coords = (
      await axios.get(`${process.env.REACT_APP_API_URL}/coords/${location}`)
    ).data;
    setCoords(coords);
    setIsLoading(false);
    return coords;
  };

  useEffect(async () => {
    const coords = await getCoords();

    setMap(
      new mapboxgl.Map({
        container: index,
        style: "mapbox://styles/mapbox/streets-v11",
        center: coords,
        zoom: 3,
      })
    );
  }, [index]);

  // we'll add a marker in case the map was just rendered and no marker was added yet
  if (map && !isMarkerAdded) {
    new mapboxgl.Marker().setLngLat(coords).addTo(map);
    setIsMarkerAdded(true);
  }
};

export default useMap;

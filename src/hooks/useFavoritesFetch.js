import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const useFavoritesFetch = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    const favs = (await axios.get(`${process.env.REACT_APP_API_URL}/favorites`)).data;
    dispatch({ type: "INIT_FAVS", favs });
  }, []);
};

export default useFavoritesFetch;

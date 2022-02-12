import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";

export const usePeopleFetch = () => {
  const dispatch = useDispatch();
  const nations = useSelector((state) => state.nations);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    const favs = (await axios.get(`${process.env.REACT_APP_API_URL}/favorites`)).data;
    dispatch({ type: "INIT_FAVS", favs });
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [nations]);

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.post(`${process.env.REACT_APP_API_URL}`, { nations });
    setIsLoading(false);
    setUsers(response.data);
  }

  return { users, isLoading, fetchUsers };
};

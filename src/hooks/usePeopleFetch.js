import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import useFavoritesFetch from "./useFavoritesFetch";

export const usePeopleFetch = (dispatch, pageNum) => {
  const nations = useSelector((state) => state.nations);
  const [isLoading, setIsLoading] = useState(false);

  useFavoritesFetch();

  useEffect(() => {
    fetchUsersByNation();
  }, [nations]);

  useEffect(() => {
    if (pageNum > 1) {
      fetchUsersByPage();
    }
  }, [pageNum]);

  const fetchUsers = async () => {
    setIsLoading(true);
    const response = (
      await axios.post(`${process.env.REACT_APP_API_URL}`, {
        nations,
        pageNum,
      })
    ).data;
    setIsLoading(false);
    return response;
  };

  async function fetchUsersByNation() {
    const response = await fetchUsers();
    dispatch({ type: "REMOVE_ALL_USERS" });
    dispatch({ type: "ADD_USERS", users: response });
  }

  async function fetchUsersByPage() {
    if (pageNum > 1) {
      const response = await fetchUsers();
      dispatch({ type: "ADD_USERS", users: response });
    }
  }

  return { isLoading };
};

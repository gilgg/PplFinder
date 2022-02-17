import axios from "axios";

const updateDB = async (dispatch, user, action) => {
  let fav;

  if (action === "add") {
    fav = (await axios.post(`${process.env.REACT_APP_API_URL}/favorites`, { user }))
      .data;
    dispatch({ type: "ADD_FAV", fav });
  } else {
    fav = (
      await axios.delete(`${process.env.REACT_APP_API_URL}/favorites/${user._id}`)
    ).data;
    dispatch({ type: "REMOVE_FAV", fav });
  }
  return fav;
};

export { updateDB };

import { createStore } from "redux";

const initState = {
  nations: [],
  favs: [],
};

const reducer = (state = initState, action) => {
  let newNationsArr, newFavsArr;

  switch (action.type) {
    case "ADD_NATION":
      newNationsArr = [...state.nations];
      newNationsArr.push(action.nat);
      return {
        nations: newNationsArr,
        favs: [...state.favs],
      };
    case "REMOVE_NATION":
      const nationsCopy = [...state.nations];
      newNationsArr = nationsCopy.filter((nation) => nation !== action.nat);
      return {
        nations: newNationsArr,
        favs: [...state.favs],
      };
    case "INIT_FAVS":
      return {
        nations: [],
        favs: action.favs,
      };
    case "ADD_FAV":
      newFavsArr = [...state.favs];
      newFavsArr.push(action.fav);
      return {
        nations: state.nations,
        favs: newFavsArr,
      };
    case "REMOVE_FAV":
      const favsCopy = [...state.favs];
      newFavsArr = favsCopy.filter((fav) => fav._id !== action.fav._id);
      return {
        nations: state.nations,
        favs: newFavsArr,
      };
    default:
      return state;
  }

  return state;
};

const store = createStore(reducer);

export default store;

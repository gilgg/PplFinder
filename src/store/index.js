import { createStore } from "redux";

const initState = {
  nations: [],
  allUsers: [],
  filteredUsers: [],
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
        filteredUsers: [],
        allUsers: [...state.allUsers],
        favs: [...state.favs],
      };
    case "REMOVE_NATION":
      const nationsCopy = [...state.nations];
      newNationsArr = nationsCopy.filter((nation) => nation !== action.nat);
      return {
        nations: newNationsArr,
        filteredUsers: [],
        allUsers: [...state.allUsers],
        favs: [...state.favs],
      };
    case "INIT_USERS":
      return {
        nations: state.nations,
        allUsers: action.users,
        favs: state.favs,
      };
    case "ADD_USERS":
      return {
        nations: state.nations,
        filteredUsers: [],
        allUsers: [...state.allUsers, ...action.users],
        favs: state.favs,
      };
    case "REMOVE_ALL_USERS":
      return {
        nations: state.nations,
        filteredUsers: [],
        allUsers: [],
        favs: state.favs,
      };
    case "SET_FILTERED_USERS":
      return {
        nations: state.nations,
        filteredUsers: action.users,
        allUsers: [],
        favs: state.favs,
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
        filteredUsers: [...state.filteredUsers],
        allUsers: [...state.allUsers],
        favs: newFavsArr,
      };
    case "REMOVE_FAV":
      const favsCopy = [...state.favs];
      newFavsArr = favsCopy.filter((fav) => fav._id !== action.fav._id);
      return {
        nations: state.nations,
        filteredUsers: [...state.filteredUsers],
        allUsers: [...state.allUsers],
        favs: newFavsArr,
      };
    default:
      return state;
  }

  return state;
};

const store = createStore(reducer);

export default store;

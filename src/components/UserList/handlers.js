import { updateDB } from "helpers/helpers";

const handleMouseEnter = (index, setHoveredUserId) => {
  setHoveredUserId(index);
};

const handleMouseLeave = (setHoveredUserId) => {
  setHoveredUserId();
};

const handleFavClick = async (dispatch, index, users) => {
  users[index].isFav = !users[index].isFav;

  if (users[index].isFav) {
    const favUser = await updateDB(dispatch, users[index], "add");
    users[index] = favUser;
  } else {
    await updateDB(dispatch, users[index], "delete");
  }
};

export { handleMouseEnter, handleMouseLeave, handleFavClick };

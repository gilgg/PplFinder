import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Text from "components/Text";
import Spinner from "components/Spinner";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import axios from "axios";

const UserList = ({ users, isLoading }) => {
  const dispatch = useDispatch();
  const [hoveredUserId, setHoveredUserId] = useState();

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const updateDB = async (user, action) => {
    let fav;

    if (action === "add") {
      fav = (await axios.post(`${process.env.REACT_APP_API_URL}/favorites`, { user })).data;
      dispatch({ type: "ADD_FAV", fav });
    } else {
      fav = (await axios.delete(`${process.env.REACT_APP_API_URL}/favorites/${user._id}`))
        .data;
      dispatch({ type: "REMOVE_FAV", fav });
    }
    return fav;
  };

  const handleFavClick = async (index) => {
    users[index].isFav = !users[index].isFav;

    if (users[index].isFav) {
      const favUser = await updateDB(users[index], "add");
      users[index] = favUser;
    } else {
      await updateDB(users[index], "delete");
    }
  };

  return (
    <S.UserList>
      <S.List>
        {users.map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.nameTitle} {user?.nameFirst} {user?.nameLast}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.streetNumber} {user?.streetName}
                </Text>
                <Text size="14px">
                  {user?.city} {user?.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper isVisible={index === hoveredUserId || user.isFav}>
                <IconButton onClick={() => handleFavClick(index)}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;

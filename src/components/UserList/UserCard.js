import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Text from "components/Text";

const UserCard = ({
  index,
  user,
  hoveredUserId,
  handleFavClick,
  showMap,
  setShowMap,
}) => {
  return (
    <>
      <S.UserCard>
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
        <S.ArrowIconWrapper onClick={() => setShowMap((prevState) => !prevState)}>
          {showMap ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </S.ArrowIconWrapper>
        <S.IconButtonWrapper isVisible={index === hoveredUserId || user.isFav}>
          <IconButton onClick={() => handleFavClick(index)}>
            <FavoriteIcon color="error" />
          </IconButton>
        </S.IconButtonWrapper>
      </S.UserCard>
    </>
  );
};

export default UserCard;

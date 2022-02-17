import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./style";
import { handleMouseEnter, handleMouseLeave, handleFavClick } from "./handlers";
import UserCard from "./UserCard";
import Map from "components/Map/Map";

const User = ({ index, users, lastUserRef }) => {
  const dispatch = useDispatch();
  const [hoveredUserId, setHoveredUserId] = useState();
  const [showMap, setShowMap] = useState(false);

  if (users.length === index + 1) {
    return (
      <>
        <S.User
          key={index}
          onMouseEnter={() => handleMouseEnter(index, setHoveredUserId)}
          onMouseLeave={() => handleMouseLeave(setHoveredUserId)}
          ref={lastUserRef}
        >
          <UserCard
            index={index}
            user={users[index]}
            hoveredUserId={hoveredUserId}
            handleFavClick={() => handleFavClick(dispatch, index, users)}
            showMap={showMap}
            setShowMap={setShowMap}
          />
          {showMap && <Map index={index} user={users[index]} />}
        </S.User>
      </>
    );
  } else {
    return (
      <>
        <S.User
          key={index}
          onMouseEnter={() => handleMouseEnter(index, setHoveredUserId)}
          onMouseLeave={() => handleMouseLeave(setHoveredUserId)}
        >
          <UserCard
            index={index}
            user={users[index]}
            hoveredUserId={hoveredUserId}
            handleFavClick={() => handleFavClick(dispatch, index, users)}
            showMap={showMap}
            setShowMap={setShowMap}
          />
          {showMap && <Map index={index} user={users[index]} />}
        </S.User>
      </>
    );
  }
};

export default User;

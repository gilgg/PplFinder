import React, { useRef, useCallback } from "react";
import * as S from "./style";
import User from "./User";
import SpinnerWrapper from "components/Spinner/SpinnerWrapper";
import { useSelector } from "react-redux";

const UserList = ({
  type,
  isLoading = false,
  setPageNum,
  scrollToTop,
  setScrollToTop,
}) => {
  const usersFromState = useSelector((state) => state.allUsers);
  const favsFromState = useSelector((state) => state.favs);
  let usersArr;

  if (type === "favorites") {
    usersArr = favsFromState;
  } else {
    usersArr = usersFromState;
  }

  const listRef = useRef();
  let lastUserRef = null;

  if (scrollToTop) {
    listRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollToTop(false);
  }

  if (type === "users") {
    const observer = useRef();
    lastUserRef = useCallback(
      (node) => {
        if (isLoading) return;

        if (observer.current) {
          observer.current.disconnect();
        } else {
          observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
              setPageNum((prevPageNumber) => prevPageNumber + 1);
            }
          });
        }

        if (node) {
          observer.current.observe(node);
        }
      },
      [isLoading]
    );
  }

  return (
    <S.UserList>
      <S.List ref={listRef}>
        {usersArr &&
          usersArr.map((__, index) => {
            return (
              <User
                key={index}
                index={index}
                users={usersArr}
                lastUserRef={lastUserRef}
              />
            );
          })}
        {isLoading && <SpinnerWrapper />}
      </S.List>
    </S.UserList>
  );
};
export default UserList;

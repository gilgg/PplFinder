import React, { useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import * as SGeneral from "../style";
import CheckboxesRow from "components/CheckBox/CheckboxesRow";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1);
  const [scrollToTop, setScrollToTop] = useState(false);
  const { isLoading } = usePeopleFetch(dispatch, pageNum);

  return (
    <S.Home>
      <SGeneral.Content>
        <SGeneral.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </SGeneral.Header>
        <CheckboxesRow setScrollToTop={setScrollToTop} setPageNum={setPageNum} />
        <UserList
          type="users"
          isLoading={isLoading}
          setPageNum={setPageNum}
          scrollToTop={scrollToTop}
          setScrollToTop={setScrollToTop}
        />
      </SGeneral.Content>
    </S.Home>
  );
};

export default Home;

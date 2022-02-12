import React from "react";
import { useSelector } from "react-redux";
import Text from "../../components/Text/Text";
import UserList from "../../components/UserList/UserList";
import * as S from "./style";
import * as SGeneral from "../style";

const Favorites = () => {
  const favs = useSelector((state) => state.favs);

  return (
    <S.Favs>
      <SGeneral.Content>
        <SGeneral.Header>
          <Text size="64px" bold>
            My Favorites
          </Text>
        </SGeneral.Header>
        <UserList users={favs} />
      </SGeneral.Content>
    </S.Favs>
  );
};

export default Favorites;

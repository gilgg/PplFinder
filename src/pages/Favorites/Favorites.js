import React from "react";
import Text from "../../components/Text/Text";
import UserList from "../../components/UserList/UserList";
import * as S from "./style";
import * as SGeneral from "../style";

const Favorites = () => {
  return (
    <S.Favs>
      <SGeneral.Content>
        <SGeneral.Header>
          <Text size="64px" bold>
            My Favorites
          </Text>
        </SGeneral.Header>
        <UserList type="favorites" />
      </SGeneral.Content>
    </S.Favs>
  );
};

export default Favorites;

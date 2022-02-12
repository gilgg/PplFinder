import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import * as SGeneral from "../style";
import CheckboxesRow from "components/CheckBox/CheckboxesRow";

const Home = () => {
  const { users, isLoading } = usePeopleFetch();

  return (
    <S.Home>
      <SGeneral.Content>
        <SGeneral.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </SGeneral.Header>
        <CheckboxesRow />
        <UserList users={users} isLoading={isLoading} />
      </SGeneral.Content>
    </S.Home>
  );
};

export default Home;

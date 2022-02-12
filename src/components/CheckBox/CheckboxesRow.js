import React from "react";
import CheckBox from "components/CheckBox";
import * as S from "./style";


const CheckboxesRow = () => {
  return (
    <S.Filters>
      <CheckBox value="BR" label="Brazil" />
      <CheckBox value="AU" label="Australia" />
      <CheckBox value="CA" label="Canada" />
      <CheckBox value="DE" label="Germany" />
      <CheckBox value="FR" label="France" />
    </S.Filters>
  );
};

export default CheckboxesRow;

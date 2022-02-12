import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as S from "./style";
import { useDispatch } from "react-redux";

const CheckBox = ({ isChecked, onChange, label, value }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.checked) {
      dispatch({ type: "ADD_NATION", nat: value });
    } else {
      dispatch({ type: "REMOVE_NATION", nat: value });
    }
    onChange && onChange(value);
  };
  return (
    <S.CheckBox>
      <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={handleChange} color="primary" />}
        label={label}
      />
    </S.CheckBox>
  );
};

export default CheckBox;

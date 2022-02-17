import React from "react";
import * as S from "./style";
import Spinner from ".";

const SpinnerWrapper = () => {
  return (
    <S.SpinnerWrapper>
      <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
    </S.SpinnerWrapper>
  );
};

export default SpinnerWrapper;

import React from "react";
import CheckBox from "components/CheckBox";
import * as S from "./style";

const CheckboxesRow = ({ setScrollToTop, setPageNum }) => {
  return (
    <S.Filters>
      <CheckBox
        value="BR"
        label="Brazil"
        setScrollToTop={setScrollToTop}
        setPageNum={setPageNum}
      />
      <CheckBox
        value="AU"
        label="Australia"
        setScrollToTop={setScrollToTop}
        setPageNum={setPageNum}
      />
      <CheckBox
        value="CA"
        label="Canada"
        setScrollToTop={setScrollToTop}
        setPageNum={setPageNum}
      />
      <CheckBox
        value="DE"
        label="Germany"
        setScrollToTop={setScrollToTop}
        setPageNum={setPageNum}
      />
      <CheckBox
        value="FR"
        label="France"
        setScrollToTop={setScrollToTop}
        setPageNum={setPageNum}
      />
    </S.Filters>
  );
};

export default CheckboxesRow;

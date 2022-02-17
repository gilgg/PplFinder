import React, { useState } from "react";
import useMap from "hooks/useMap";
import * as S from "./style";
import Text from "components/Text";
import SpinnerWrapper from "components/Spinner/SpinnerWrapper";

const Map = ({ index, user }) => {
  const [isLoading, setIsLoading] = useState(false);
  let location = `${user.city},${user.country}`;

  if (!/^[a-zA-Z, ]+$/.test(location)) {
    location = "invalid";
  }

  if (location !== "invalid") {
    useMap(index.toString(), location, setIsLoading);
  }

  return (
    <>
      {isLoading && <SpinnerWrapper />}
      {location === "invalid" && (
        <S.MapUnavailable>
          <Text size="28px">No map available.</Text>
        </S.MapUnavailable>
      )}
      {location !== "invalid" && <S.MapContainer id={index.toString()} />}
    </>
  );
};

export default Map;

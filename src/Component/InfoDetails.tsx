import React from "react";
import { useLocation } from "react-router-dom";

const InfoDetails = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <pre>{JSON.stringify(location.state, null, 2)}</pre>
    </div>
  );
};

export default InfoDetails;

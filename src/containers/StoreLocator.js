import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import SoloMap from "../components/SoloMap";

const StoreLocator = () => {
  return (
    <div>
      <Header />
      <div>
        <Button />
        <Button />
      </div>
      <SoloMap />
    </div>
  );
};

export default StoreLocator;

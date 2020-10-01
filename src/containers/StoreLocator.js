import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import SoloMap from "../components/SoloMap";

const StoreLocator = () => {
  const [shops, setShops] = useState([
    {
      location: "Portland",
      address: "123 Portland Drive",
    },
    {
      location: "Astoria",
      address: "123 Astoria Drive",
    },
    {
      location: "",
      address: "",
    },
  ]);

  return (
    <div>
      <Header />
      <div>
        {shops.map((shop, id) => (
          <Button key={id} location={shop.location} />
        ))}
      </div>
      <SoloMap />
    </div>
  );
};

export default StoreLocator;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import bitcoin from "../media/bitcoin.png";
import dogecoin from "../media/dogecoin.png";
import ethereum from "../media/ethereum.png";

function PriceViget(props) {
  const [price, setPrice] = useState(0);

  const symbol = props.symbol;

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`
    )
      .then((res) => res.json())
      .then((data) => {
        setPrice(data[symbol]["usd"]);
      });
  });

  function setIcon() {
    if (props.symbol === "bitcoin") {
      return bitcoin;
    } else if (props.symbol === "dogecoin") {
      return dogecoin;
    } else {
      return ethereum;
    }
  }

  return (
    <div className="w-full bg-white h-fit p-5 rounded-2xl flex">
      <img src={setIcon()} alt="" className="h-20" />
      <div className="ml-5 mt-2">
        <h5 className="text-2xl">{props.symbol}</h5>
        <h6 className="text-lg">{price} $</h6>
      </div>
    </div>
  );
}

export default PriceViget;

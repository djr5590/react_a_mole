import React from "react";
import { useEffect } from "react";
import molehill from "../images/molehill.png";

function EmptySlot({ handleClick, toggle }) {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      toggle(true);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div className="container">
      <img style={{ width: "15vw" }} src={molehill} onClick={handleClick} />
    </div>
  );
}

export default EmptySlot;
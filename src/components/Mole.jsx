import React, { useEffect } from "react";
import moleImg from "../images/mole.png";

function Mole({ handleClick, toggle }) {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 10000);
    let timer = setTimeout(() => {
      toggle(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div className="container">
      <img style={{ width: "15vw" }} src={moleImg} onClick={handleClick} />
    </div>
  );
}

export default Mole;
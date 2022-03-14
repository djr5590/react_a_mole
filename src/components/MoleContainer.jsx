import React from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";
import { useState } from "react";

function MoleContainer({ setScore, score }) {
  // Displaymole boolean variable goes here
  const [mole, setMole] = useState(false);

  const handleAddClick = (e) => {
    setScore(score + 1);
    // setMole(false);
  };

  const handleDeleteClick = (e) => {
    setScore(score - 1);
    // setMole(true);
  };

  const displayMole = mole ? (
    <Mole setScore={setScore} toggle={setMole} handleClick={handleAddClick} />
  ) : (
    <EmptySlot toggle={setMole} handleClick={handleDeleteClick} />
  );

  return (
    <div style={{ display: "inline-block", width: "17vw" }}>{displayMole}</div>
  );
}

export default MoleContainer;
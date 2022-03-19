import MoleContainer from "./components/MoleContainer";
import { useState } from "react";

import "./App.css";

function App() {
  // State variable goes here (score)
  let [score, setScore] = useState(0);
  let number = 10;

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < number; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />);
    }
    return <div>{hills}</div>;
  };

  return (
    <>
      <div className="App">
        {" "}
        <h1>React a Mole!</h1>
        {score}
      </div>
      <div>
        <div>{createMoleHill()}</div>
      </div>
    </>
  );
}

export default App;
import { useMemo, useState } from "react";
import "./App.css";

const defGrowth = 150;
const defWeight = 50;

function App() {
  const [growth, setGrowth] = useState(defGrowth);
  const [weight, setWeight] = useState(defWeight);

  function onGrowthChange(event) {
    const inputGrowth = event.target.value;
    setGrowth(inputGrowth);
  }

  function onWeightChange(event) {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo(() => {
    const calculatedGrowth = growth / 100;
    return (weight / (calculatedGrowth * calculatedGrowth)).toFixed(1);
  }, [weight, growth]);

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          type="text"
          placeholder="50"
          onChange={onWeightChange}
        />
        <p className="slider-output">Growth: {growth} cm</p>
        <input
          className="input-slider"
          type="text"
          placeholder="150"
          onChange={onGrowthChange}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

export default App;

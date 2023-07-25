import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Statistic from "./components/Statistic";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    console.log(good);
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    console.log(neutral);
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    console.log(bad);
    setBad(bad + 1);
  };

  const header = [
    {
      name: "Give Feedback",
    },
    {
      name: "Statistics",
    },
  ];

  return (
    <div>
      <Header name={header[0].name} />
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Header name={header[1].name} />
      <Statistic text="Good: " number={good} />
      <Statistic text="Neutral: " number={neutral} />
      <Statistic text="Bad: " number={bad} />
    </div>
  );
};
export default App;

import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Statistic from "./components/Statistic";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const handleGoodClick = () => {
    setGood(good + 1);
    setFeedbackGiven(!feedbackGiven);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setFeedbackGiven(!feedbackGiven);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setFeedbackGiven(!feedbackGiven);
  };

  const header = [
    {
      name: "Give Feedback",
    },
    {
      name: "Statistics",
    },
  ];

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    <div>
      <Header name={header[0].name} />
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Header name={header[1].name} />
      {total > 0 ? (
        <div>
          <Statistic text="Good: " number={good} />
          <Statistic text="Neutral " number={neutral} />
          <Statistic text="Bad " number={bad} />
          <Statistic text="Average " number={average} />
          <Statistic text="Positive: " number={positive + "%"} />
        </div>
      ) : (
        <Statistic text="No feedback given." feedbackGiven={feedbackGiven} />
      )}
    </div>
  );
};
export default App;

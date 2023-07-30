import { useEffect, useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
//import Points from "./components/Points";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [voteArray, setVote] = useState(new Uint8Array(anecdotes.length)); //new Uint8Array(7);  <-- this creates an array with a length of 7
  const [topQuoteIndex, setTopQuoteIndex] = useState(0);

  // Randomizes an indexed anecdote
  const randomAnecdoteIndex = () => {
    const anecdotesLength = anecdotes.length;
    return Math.floor(Math.random() * anecdotesLength);
  };

  //Purpose: Any state within the [selected] array is affected, run the function. Displays the anecdote presently since setSelected() is asynchronous
  // useEffect(() => {

  //   console.log(anecdotes[selected]);
  // }, [selected]);

  // user can view the next anecdote
  const nextButton = () => {
    setSelected(randomAnecdoteIndex());
  };

  // user can vote for their fav. quote
  const voteButton = () => {
    // this displays anectoes with their respective votes
    const updatedVotes = [...voteArray];
    updatedVotes[selected] += 1;
    setVote(updatedVotes);

    const highestVoteIndex = updatedVotes.indexOf(Math.max(...updatedVotes));
    setTopQuoteIndex(highestVoteIndex);
  };

  // this displays the best anecote with their respective vote
  //const bestVotes = voteArray.indexOf(Math.max(...voteArray));

  return (
    <div>
      <div>
        <Header text="Anecdote of the Day" />
      </div>
      <div>{anecdotes[selected]}</div>
      <div>has {voteArray[selected]} votes!</div>
      <div>
        <Button handleClick={voteButton} text="Vote" />
        <Button handleClick={nextButton} text="Next Anecdote" />
      </div>
      <div>
        <Header text="Anecdote with most Votes" />
        <div>{anecdotes[topQuoteIndex]}</div>
        <div>has {voteArray[topQuoteIndex]} votes!</div>
      </div>
    </div>
  );
};

export default App;

const Total = ({ parts }) => {
  const totalSum = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <b>total of {totalSum} exercises</b>
    </div>
  );
};
export default Total;

/*

const Total = (props) => {
  let totalSum = 0;

  props.parts.forEach((part) => {
    totalSum += part.exercises;
  });

  return (
    <div>
      <p>
        <b>Number of exercises {totalSum}</b>
      </p>
    </div>
  );
};
*/

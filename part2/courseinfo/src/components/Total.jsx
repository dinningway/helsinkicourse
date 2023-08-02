const Total = ({ parts }) => {
  const totalSum = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <b>total of {totalSum} exercises</b>
    </div>
  );
};
export default Total;

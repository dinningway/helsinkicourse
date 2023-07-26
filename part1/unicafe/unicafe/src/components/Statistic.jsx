const Statistic = ({ text, number }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{number}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistic;

const Totals = ({ dailyTotal, overallTotal }) => {
  return (
    <div className="formStyle">
      <h2 className="headingStyle">Totals</h2>
      <ul className="listStyle">
        <li className="itemStyle">
          Daily Total: <span>${dailyTotal.toFixed(2)}</span>
        </li>
        <li className="itemStyle">
          Overall Total:<span> ${overallTotal.toFixed(2)}</span>
        </li>
      </ul>
    </div>
  );
};

export default Totals;

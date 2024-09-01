import { dailyExpenseData, dateFormat } from "../utils";

export default function DateWise({ expenses }) {
  let data = dailyExpenseData(expenses);
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    marginBottom: "10px",
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
    borderRadius: "4px",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const headingStyle = {
    fontSize: "1.5em",
    marginBottom: "10px",
    color: "#333",
  };
  if (data.length === 0) return null;
  return (
    <div style={formStyle}>
      <h2>Datewise Expenses</h2>
      <table>
        <thead>
          <tr style={itemStyle}>
            <th>Date</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((daily, index) => (
            <tr key={index} style={itemStyle}>
              <td>{dateFormat(daily.date)}</td>
              <td>{daily.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

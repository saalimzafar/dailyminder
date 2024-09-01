import { dailyExpenseData, dateFormat } from "../utils";

export default function DateWise({ expenses }) {
  let data = dailyExpenseData(expenses);

  if (data.length === 0) return null;
  return (
    <div className="formStyle">
      <h2>Datewise Expenses</h2>
      <table>
        <thead>
          <tr className="itemStyle">
            <th>Date</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((daily, index) => (
            <tr key={index} className="itemStyle">
              <td>{dateFormat(daily.date)}</td>
              <td>{daily.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

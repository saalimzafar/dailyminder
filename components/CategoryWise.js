import { dailyExpenseCategory } from "../utils";
const CategoryWise = ({ expenses }) => {
  let data = dailyExpenseCategory(expenses);
  if (data.length === 0) return null;
  return (
    <div className="formStyle">
      <h2>Item Wise Expenses</h2>
      <table>
        <thead>
          <tr className="listStyle l2">
            <th>Item</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((expense, index) => (
            <tr key={index} className="itemStyle">
              <td className="one">{expense.cat}</td>
              <td className="two">{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryWise;

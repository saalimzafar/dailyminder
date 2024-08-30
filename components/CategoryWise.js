import { dailyExpenseCategory } from "../utils";
const CategoryWise = ({ expenses }) => {
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
  const listStyle = {
    listStyleType: "none",
    padding: "10px",
    margin: "0",
    display: "flex",
    justifyContent: "space-between",
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
    borderRadius: "4px",
    marginBottom: "5px",
  };
  const one = { width: "30%" };
  const two = { width: "20%" };

  const headingStyle = {
    fontSize: "1.5em",
    marginBottom: "10px",
    color: "#333",
  };

  let data = dailyExpenseCategory(expenses);
  if(data.length===0) return null
  return (
    <div style={formStyle}>
      <h2>Item Wise Expenses</h2>
      <table>
        <thead>
          <tr style={listStyle}>
            <th>Item</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((expense, index) => (
            <tr key={index} style={itemStyle}>
              <td style={one}>{expense.cat}</td>
              <td style={two}>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryWise;

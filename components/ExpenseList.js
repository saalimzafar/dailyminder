import { dailyExpenseCategory, dateFormat } from "../utils";
const ItemList = ({ expenses }) => {
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

  const one = { width: "40%" };
  const two = { width: "20%" };

  const headingStyle = {
    fontSize: "1.5em",
    marginBottom: "10px",
    color: "#333",
  };

  const listItemsDatewise = (items) => {
    return items.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  let dailyExpense = (expenses) => {
    let data = listItemsDatewise(expenses);
    let uniqueDates = [...new Set(data.map((item) => item.date))];
    let latestExpense = data.filter(
      (item) => item.date === uniqueDates[uniqueDates.length - 1]
    );
    let uniqueCat = [...new Set(latestExpense.map((item) => item.item))];
    let catWise = [];
    for (let i of uniqueCat) {
      catWise.push({
        item: i,
        amount: data
          .filter(
            (it) =>
              it.item === i && it.date === uniqueDates[uniqueDates.length - 1]
          )
          .map((item) => Number(item.amount))
          .reduce((a, c) => a + c, 0),
        date: dateFormat(uniqueDates[uniqueDates.length - 1]),
      });
    }
    return catWise;
  };
  let data = dailyExpense(expenses);
  if(data.length===0) return null
  return (
    <div style={formStyle}>
      <h2>Today's Expenses</h2>
      <table>
        <thead>
          <tr style={listStyle}>
            <th>Item</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((expense, index) => (
            <tr key={index} style={itemStyle}>
              <td style={one}>{expense.item}</td>
              <td style={two}>{expense.amount}</td>
              <td style={one}>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;

import { dailyExpenseCategory, dateFormat } from "../utils";
const ItemList = ({ expenses }) => {
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
  if (data.length === 0) return null;
  return (
    <div className="formStyle">
      <h2>Today's Expenses</h2>
      <table>
        <thead>
          <tr className="listStyle l2">
            <th>Item</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((expense, index) => (
            <tr key={index} className="itemStyle">
              <td className="one">{expense.item}</td>
              <td className="two">{expense.amount}</td>
              <td className="one">{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;

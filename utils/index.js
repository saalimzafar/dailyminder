const dailyTotalAmountFn = (expenses) => {
  const today = new Date().toLocaleDateString();
  return expenses
    .filter((expense) => expense.date === today)
    .reduce((acc, expense) => acc + expense.amount, 0);
};

const overallTotalAmountFn = (expenses) => {
  return expenses.reduce((acc, expense) => acc + expense.amount, 0);
};




let dailyExpenseData = (expenses) => {
  let duplicateVal = expenses.map((item) => item.date);
  let uniqueVal = [...new Set(duplicateVal)];
  const perDay = (day) => {
    let dailyExpense = expenses.filter((item) => item.date === day);
    return dailyExpense;
  };
  let sum = (total, { amount }) => total + amount;
  let dailyExpense = [];
  uniqueVal.map((item) =>
    dailyExpense.push({ date: item, amount: perDay(item).reduce(sum, 0) })
  );

  return dailyExpense;
};

let dailyExpenseCategory = (expenses) => {
  let category = [...new Set(expenses.map((cat) => cat.item))];

  let expense = [];
  for (let i of category) {
    expense.push({
      cat: i,
      amount: expenses
        .filter((itm) => itm.item === i)
        .map((item) => Number(item.amount))
        .reduceRight((a, c) => a + c, 0),
    });
  }
  return expense;
};

let jsonString = (val) => JSON.stringify(val);

let dateFormat = (date) => {
  let dt = new Date(date).toDateString();
  dt = dt.split(" ");
  return `${dt[2]}-${dt[1]}-${dt[3]}`;
};

const dateFormatX = (date) => {
  date = new Date(date)
  const options = { day: '2-digit', month: 'short', year: '2-digit' };
  return new Intl.DateTimeFormat('en-GB', options).format(date);
};



const exportToJsonFile = (data, filename = "data.json") => {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const link = document.createElement("a");
  link.download = filename;
  link.href = window.URL.createObjectURL(blob);
  link.click();
};

module.exports = {
  dailyTotalAmountFn,
  overallTotalAmountFn,
  dailyExpenseData,
  dailyExpenseCategory,
  jsonString,
  dateFormat,
  exportToJsonFile,
};

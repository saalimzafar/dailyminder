import { useState } from "react";

const ExpenseForm = ({ addExpense, onSuccess }) => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item && amount) {
      addExpense({
        item,
        amount: parseFloat(amount),
        date: date
          ? new Date(date).toLocaleDateString()
          : new Date().toLocaleDateString(),
      });
      setItem("");
      setAmount("");
      setDate("");
      onSuccess();
    }
  };

  return (
    <form className="formStyle" onSubmit={handleSubmit}>
      <div className="formGroupStyle">
        <label htmlFor="item" className="labelStyle">
          Expense:
        </label>
        <input
          type="text"
          id="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="inputStyle"
          placeholder="Enter expense item"
        />
      </div>
      <div className="formGroupStyle">
        <label htmlFor="amount" className="labelStyle">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="inputStyle"
          placeholder="Enter amount"
        />
      </div>
      <div className="formGroupStyle">
        <label htmlFor="date" className="labelStyle">
          Date:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="inputStyle"
        />
      </div>

      <button type="submit" className="buttonStyle">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;

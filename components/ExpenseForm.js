import React, { useState } from "react";

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
      onSuccess()
    }
  };

  // Inline styles
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

  const formGroupStyle = {
    marginBottom: "1rem",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "90%",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    margin: "0 auto",
  };

  const buttonStyle = {
    padding: "0.75rem",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#28a745",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#218838",
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <div style={formGroupStyle}>
        <label htmlFor="item" style={labelStyle}>
          Expense:
        </label>
        <input
          type="text"
          id="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          style={inputStyle}
          placeholder="Enter expense item"
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="amount" style={labelStyle}>
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={inputStyle}
          placeholder="Enter amount"
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="date" style={labelStyle}>
          Date:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={inputStyle}
        />
      </div>

      <button
        type="submit"
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;

import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const FloatButton = ({ addExpense }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSuccess = () => {
    setIsFormVisible(false); // Close the form on successful submission
  };

  return (
    <>
      <div
        className={`overlay ${isFormVisible ? "show" : ""}`}
        onClick={toggleForm}
        aria-hidden={!isFormVisible}
      ></div>

      <button
        className="floating-button"
        onClick={toggleForm}
        aria-label="Add Expense"
      >
        +
      </button>

      <div className={`form-popup ${isFormVisible ? "show" : ""}`}>
        <button
          className="close-button"
          onClick={toggleForm}
          aria-label="Close Form"
        >
          ×
        </button>
        <ExpenseForm addExpense={addExpense} onSuccess={handleSuccess} />
      </div>
      <style jsx>{`
        .floating-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background-color: #28a745;
          color: white;
          border-radius: 50%;
          border: 2px solid #28a745;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          z-index: 1000;
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .floating-button:focus {
          outline: none;
          transform: scale(1.1);
          border-color: #218838;
        }

        .form-popup {
          position: fixed;
          bottom: 120px;
          right: 30px;
          width: 80%;
          max-width: 400px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
          z-index: 999;
          display: none;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .form-popup.show {
          display: block;
          opacity: 1;
          transform: translateY(0);
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 998;
          display: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .overlay.show {
          display: block;
          opacity: 1;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: transparent;
          border: none;
          font-size: 24px;
          cursor: pointer;
          z-index: 1001;
        }

        .close-button:focus {
          outline: none;
        }
      `}</style>
    </>
  );
};

export default FloatButton;

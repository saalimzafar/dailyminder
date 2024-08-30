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
      ></div>

      <div className="floating-button" onClick={toggleForm}>
        +
      </div>

      <div className={`form-popup ${isFormVisible ? "show" : ""}`}>
        <ExpenseForm addExpense={addExpense} onSuccess={handleSuccess} />
      </div>
      <style jsx>{`
        .floating-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background-color: #28a745; /* #007bff: "#28a745", this to your preferred color */
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          z-index: 1000;
          font-size: 20px;
          transition: transform 0.3s ease;
        }

      

        .form-popup {
          position: fixed;
          bottom: 120px;
          right: 30px;
          width: 80%;
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
          transition: opacity 0.3s ease;
          display: none;
        }

        .overlay.show {
          display: block;
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default FloatButton;

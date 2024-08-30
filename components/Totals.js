const Totals = ({ dailyTotal, overallTotal }) => {
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

  const headingStyle = {
    fontSize: "1.5em",
    marginBottom: "10px",
    color: "#333",
  };

  const listStyle = {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
    borderRadius: "4px",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  return (
    <div style={formStyle}>
      <h2 style={headingStyle}>Totals</h2>
      <ul style={listStyle}>
        <li style={itemStyle}>
          Daily Total: <span>${dailyTotal.toFixed(2)}</span>
        </li>
        <li style={itemStyle}>
          Overall Total:<span> ${overallTotal.toFixed(2)}</span>
        </li>
        
      </ul>
    </div>
  );
};

export default Totals;

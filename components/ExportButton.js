import { exportToJsonFile } from "../utils";
const ExportButton = ({ data }) => {
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

  const handleExport = () => {
    exportToJsonFile(data, "expens_data.json");
  };

  return (
    <button style={buttonStyle} onClick={handleExport}>
      Export Expense Data as JSON
    </button>
  );
};

export default ExportButton;

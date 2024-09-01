import styles from "../styles/Totals.module.css";
const Totals = ({ dailyTotal, overallTotal }) => {
  
  return (
    <div className={styles.formStyle}>
      <h2 className={styles.headingStyle}>Totals</h2>
      <ul className={styles.listStyle}>
        <li className={styles.itemStyle}>
          Daily Total: <span>${dailyTotal.toFixed(2)}</span>
        </li>
        <li className={styles.itemStyle}>
          Overall Total:<span> ${overallTotal.toFixed(2)}</span>
        </li>
      </ul>
    </div>
  );
};

export default Totals;

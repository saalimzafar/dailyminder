import { useState, useEffect } from "react";
import Head from "next/head";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Totals from "../components/Totals";
import DateWise from "../components/DateWise";
import CategoryWise from "../components/CategoryWise";
import FloatButton from "../components/FloatButton";
import ExportButton from "../components/ExportButton";
import InstallButton from '../components/InstallButton';
//import { deleteDB } from "idb";
import {
  dailyTotalAmountFn,
  overallTotalAmountFn,
  jsonString,
  dailyAverage,
} from "../utils";

import {
  addItem,
  getItems,
  updateItem,
  deleteItem,
  deleteDatabase,
} from "../lib/db";

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [dailyTotal, setDailyTotal] = useState(0);
  const [overallTotal, setOverallTotal] = useState(0);
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const storedExpenses = await getItems();
      setExpenses(storedExpenses);
      setCat(storedExpenses);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setDailyTotal(dailyTotalAmountFn(expenses));
    setOverallTotal(overallTotalAmountFn(expenses));
  }, [expenses]);

 const  checkQuota = () =>  {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      navigator.storage.estimate().then(({usage, quota}) => {
        const usedInMB = usage / (1024 * 1024);
        const quotaInMB = quota / (1024 * 1024);
        const remainingInMB = (quota - usage) / (1024 * 1024);
        
        alert(`Used storage: ${usedInMB.toFixed(2)} MB`);
        alert(`Total quota: ${quotaInMB.toFixed(2)} MB`);
        alert(`Remaining storage: ${remainingInMB.toFixed(2)} MB`);
      });
    } else {
      alert('Storage estimation API is not supported in this browser.');
      this.estimateUsage();
    }
  }
 

  const addExpense = async (expense) => {
    await addItem(expense);
    setExpenses([...expenses, expense]);
  };
  const NoExpenses = () => (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} onSuccess={() => {}} />
    </>
  );

  if (expenses.length === 0) return <NoExpenses />;
  return (
    <div>
      <Head>
        <title>Expense Tracker</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <h1>Expense Tracker</h1>
      <Totals dailyTotal={dailyTotal} overallTotal={overallTotal} />
      <ExpenseList expenses={expenses} />
      <DateWise expenses={expenses} />
      <CategoryWise expenses={expenses} />
      <FloatButton addExpense={addExpense} />
      <InstallButton/>
     </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import Head from "next/head";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Totals from "../components/Totals";
import DateWise from "../components/DateWise";
import CategoryWise from "../components/CategoryWise";
import FloatButton from "../components/FloatButton";
import ExportButton from "../components/ExportButton";
import { deleteDB } from "idb";
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
      alert(storedExpenses)
    };
    fetchData();
    let check = async () => {
      if (navigator.storage && navigator.storage.estimate) {
        const quota = await navigator.storage.estimate();
        // quota.usagse -> Number of bytes used.
        // quota.quota -> Maximum number of bytes available.
        const percentageUsed = (quota.usage / quota.quota) * 100;
        alert(`You've used ${percentageUsed}% of the available storage.`);
        const remaining = quota.quota - quota.usage;
        alert(`You can write up to ${remaining} more bytes.`);
      }
    };
  }, []);

  useEffect(() => {
    setDailyTotal(dailyTotalAmountFn(expenses));
    setOverallTotal(overallTotalAmountFn(expenses));
  }, [expenses]);

  const addExpense = async (expense) => {
    await addItem(expense);
    setExpenses([...expenses, expense]);
  };
  if (expenses.length === 0)
    return (
      <>
        <h1>Expense Tracker</h1>
        <ExpenseForm addExpense={addExpense} onSuccess={() => {}} />
      </>
    );
  return (
    <div>
      <Head>
        <title>Expense Tracker</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <h1>Expense Tracker</h1>

      {/* <ExpenseForm addExpense={addExpense} />*/}
      <ExpenseList expenses={expenses} />
      <Totals dailyTotal={dailyTotal} overallTotal={overallTotal} />
      <DateWise expenses={expenses} />
      <CategoryWise expenses={expenses} />
      <FloatButton addExpense={addExpense} />
      {/*  <ExportButton data={expenses} />*/}
    </div>
  );
};

export default Home;

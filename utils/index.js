const dailyTotalAmountFn = (expenses) => {
  const today = new Date().toLocaleDateString();
  return expenses
    .filter(({ date }) => date === today)
    .reduce((acc, { amount }) => acc + amount, 0);
};

const overallTotalAmountFn = (expenses) => {
  return expenses.reduce((acc, { amount }) => acc + amount, 0);
};

const dailyExpenseData = (expenses) => {
  const expenseMap = new Map();
  
  expenses.forEach(({ date, amount }) => {
    expenseMap.set(date, (expenseMap.get(date) || 0) + amount);
  });
  
  return Array.from(expenseMap, ([date, amount]) => ({ date, amount }));
};

const dailyExpenseCategory = (expenses) => {
  const categoryMap = new Map();

  expenses.forEach(({ item, amount }) => {
    categoryMap.set(item, (categoryMap.get(item) || 0) + Number(amount));
  });

  return Array.from(categoryMap, ([cat, amount]) => ({ cat, amount }));
};

const jsonString = JSON.stringify;

const dateFormat = (date) => {
  return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: '2-digit' })
    .format(new Date(date));
};

const exportToJsonFile = (data, filename = "data.json") => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.download = filename;
  link.href = URL.createObjectURL(blob);
  link.click();
};

const requestPersistentStorage = async () => {
  if ('storageManager' in navigator) {
    try {
      const granted = await navigator.storage.persist();
      console.log('Persistent storage granted:', granted);

      const persisted = await navigator.storage.persisted();
      console.log('Storage is persistently stored:', persisted);

      return { granted, persisted };
    } catch (error) {
      console.error('Failed to handle persistent storage:', error);
      return { granted: false, persisted: false };
    }
  } else {
    console.warn('StorageManager API is not supported in this browser.');
    return { granted: false, persisted: false };
  }
};




module.exports = {
  dailyTotalAmountFn,
  overallTotalAmountFn,
  dailyExpenseData,
  dailyExpenseCategory,
  jsonString,
  dateFormat,
  exportToJsonFile,
  requestPersistentStorage
};

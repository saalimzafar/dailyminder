import { openDB, deleteDB } from 'idb';

const DB_NAME = 'my-database';
const STORE_NAME = 'my-expenses';

// Initialize the database
export const initDB = async () => {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { autoIncrement: true });
      }
    },
  });
  return db;
};

// Add an item to the store
export const addItem = async (item) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.add(item);
  await tx.done;
};

// Get all items from the store
export const getItems = async () => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const allItems = await store.getAll();
  await tx.done;
  return allItems;
};

// Update an item in the store
export const updateItem = async (id, updatedData) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);

  // Get the current item
  const currentItem = await store.get(id);
  if (currentItem) {
    // Merge current data with updated data
    const updatedItem = { ...currentItem, ...updatedData };
    await store.put(updatedItem);  // Use put to update the item
  }

  await tx.done;
};

// Delete an item from the store
export const deleteItem = async (id) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.delete(id);
  await tx.done;
};



export const deleteDatabase = async (DB_NAME) => {
  try {
    await deleteDB(DB_NAME);
    console.log(`Database ${dbName} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting database ${DB_NAME}:`, error);
  }
};


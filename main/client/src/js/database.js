import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
try {
  const db = await openDB('jate', 1);
const tx = db.transaction('jate', 'readwrite'); 
const store = tx.objectStore('jate'); 
const request = store.add({ content }); 

await tx.done;

request.onsuccess = () => {
  console.log('Content added to the database successfully');
};

request.onerror = (event) => {
  console.error('Error adding content to the database:', event.target.error);
};
} catch (error) {
console.error('Error:', error);
}
};

export const getDb = async () => {
  try {
    const db = await openDB('jate', 1); 

    if (!db.objectStoreNames.contains('jate')) {
      console.error('jate object store does not exist');
      return [];
    }

    const tx = db.transaction('jate', 'readonly'); 
    const store = tx.objectStore('jate'); 
    const request = store.getAll(); 
    await tx.done;

    request.onsuccess = (event) => {
      const allData = event.target.result;
      console.log('All content retrieved from the database:', allData);
    };

    request.onerror = (event) => {
      console.error('Error retrieving content from the database:', event.target.error);
    };
  } catch (error) {
    console.error('Error:', error);
  }
};

initdb();

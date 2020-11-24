const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransactionNew = transaction => {
  const delay = randomIntegerFromInterval(200, 500);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve([transaction.id, delay]);
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};

// const logSuccess = (id, time) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

const logSuccess = arr => {
  console.log(`Transaction ${arr[0]} processed in ${arr[1]} ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 * Работает так
 */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */
makeTransactionNew({ id: 70 }).then(logSuccess).catch(logError);
makeTransactionNew({ id: 71 }).then(logSuccess).catch(logError);
makeTransactionNew({ id: 72 }).then(logSuccess).catch(logError);
makeTransactionNew({ id: 73 }).then(logSuccess).catch(logError);

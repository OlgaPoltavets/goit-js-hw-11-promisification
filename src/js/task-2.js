const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

const logger = updatedUsers => console.table(updatedUsers);

// /*
//  * Сейчас работает так
//  */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

const toggleUserStateNew = (allUsers, userName) => {
  return new Promise(resolve => {
    resolve(
      allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
      ),
    );
  });
};

/*
 * Должно работать так
 */
toggleUserStateNew(users, 'Mango').then(logger);
toggleUserStateNew(users, 'Lux').then(logger);

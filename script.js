const users = [
    { name: "Alice", eyeColor: "brown", gender: "female", isActive: true, email: "alice@gmail.com", age: 25 },
    { name: "Bob", eyeColor: "green", gender: "male", isActive: false, email: "bob@gmail.com", age: 30 },
    { name: "Charlie", eyeColor: "blue", gender: "male", isActive: true, email: "charlie@gmail.com", age: 28 },
    { name: "Diana", eyeColor: "brown", gender: "female", isActive: false, email: "diana@gmail.com", age: 17 },
    { name: "Eva", eyeColor: "green", gender: "female", isActive: true, email: "eva@gmail.com", age: 23 },
  ];
  const getUserNames = (users) => users.map(user => user.name);
console.log(getUserNames(users));

// Завдання 2: 
// Отримати масив об'єктів користувачів за кольором очей
const getUsersByEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
console.log(getUsersByEyeColor(users, "blue"));

// Завдання 3: 
// Отримати масив імен користувачів за статтю
const getUserNamesByGender = (users, gender) => users.filter(user => user.gender === gender).map(user => user.name);
console.log(getUserNamesByGender(users, "female"));

// Завдання 4:
// Отримати масив тільки неактивних користувачів
const getInactiveUsers = (users) => users.filter(user => !user.isActive);
console.log(getInactiveUsers(users));

// Завдання 5: 
// Отримати користувача за email
const getUserByEmail = (users, email) => users.find(user => user.email === email);
console.log(getUserByEmail(users, "bob@example.com"));

// Завдання 6:
//  Отримати масив користувачів у віковій категорії від min до max років
const getUsersByAgeRange = (users, min, max) => users.filter(user => user.age >= min && user.age <= max);
console.log(getUsersByAgeRange(users, 25, 35));
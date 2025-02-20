//! TASK 1
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так - виведіть повідомлення 'Вірно' у alert().
//    Якщо ні - виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number()

// const number = Number(prompt('Введіть число:'));
// if (number === 10) {
//   alert('Вірно');
// } else {
//   alert('Не вірно');
// }

// const number = Number(prompt('Введіть число:'));
// const result = number === 10 ? alert('Вірно') : alert('Не вірно');

//! TASK 2

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min >= 0 && min < 15) {
//   alert(`${min} потрапляє у I чверть години`);
// } else if (min >= 15 && min < 30) {
//   alert(`${min} потрапляє у II чверть години`);
// } else if (min >= 30 && min < 45) {
//   alert(`${min} потрапляє у III чверть години`);
// } else {
//   alert(`${min} потрапляє у IV чверть години`);
// }

//! TASK 3

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = Number(prompt('Введіть число від 1 до 4'));
// let result;
// switch (num) {
//   case 1:
//     result = 'Зима';
//     break;
//   case 2:
//     result = 'Весна';
//     break;
//   case 3:
//     result = 'Літо';
//     break;
//   case 4:
//     result = 'Осінь';
//     break;
//   default:
//     result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
// }
// console.log(result);

//! TASK 4

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

// const min = prompt('Введіть кількість хвилин');
// const hours = Math.floor(min / 60);
// const minutes = min % 60;
// const hoursFormat = String(hours).padStart(2, 0);
// const minutesFormat = String(minutes).padStart(2, 0);
// console.log(`${hoursFormat}:${minutesFormat}`);

// const value = Number(prompt('Введіть кількість хвилин'));
// if (isNaN(value)) {
//   alert('ERROR!');
// } else {
//   const hours = String(Math.floor(value / 60)).padStart(2, 0);
//   const minutes = String(value % 60).padStart(2, 0);
//   console.log(`${hours}:${minutes}`);
// }

//! TASK 5

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt('Введіть логін:');
// let password;
// if (login === 'Адмін') {
//   password = prompt('Введіть пароль:');
// } else if (login === '' || login === null) {
//   alert('Скасовано');
// } else {
//   alert('Я вас не знаю');
// }
// if (password === 'Я головний') {
//   alert('Добрий день!');
// } else {
//   alert('Невірний пароль!');
// }

//! TASK 6

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let i = 0;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }

//! TASK 7

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// let total = 0;
// function getNumbers(min, max) {
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }
//   return total;
// }

// console.log(getNumbers(2, 5));
// console.log(getNumbers(5, 13));

//! TASK 8

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   let min;
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     min = 'Not a number';
//   } else {
//     if (a < b) {
//       min = `Minimal value is ${a}`;
//     } else {
//       min = `Minimal value is ${b}`;
//     }
//   }
//   return min;
// }

// console.log(min(undefined, 5));
// console.log(min(5, true));
// console.log(min(4, 5));
// console.log(min(12, 5));

//! TASK 9

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   let confirmation;
//   if (age >= 18) {
//     confirmation = true;
//   } else {
//     if (confirm('Підтвердіть свій вік. Вам більше 18 років?') === true) {
//       confirmation = true;
//     } else {
//       confirmation = false;
//     }
//   }
//   return confirmation;
// }

// console.log(isAdult(17));

//* 9.2

// function isAdult(age) {
//   let confirmation;
//   if ((age = prompt('Введіть ваш вік')) >= 18) {
//     confirmation = true;
//   } else {
//     if (confirm('Підтвердіть свій вік. Вам більше 18 років?') === true) {
//       confirmation = true;
//     } else {
//       confirmation = false;
//     }
//   }
//   return confirmation;
// }

// console.log(isAdult());

//! TASK 10

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (!(i % 3) && !(i % 5)) {
//       console.log(`${i} - fizzbuzz`);
//     } else if (!(i % 3)) {
//       console.log(`${i} - fizz`);
//     } else if (!(i % 5)) {
//       console.log(`${i} - buzz`);
//     } else {
//       console.log(`${i} - is not fizz/buzz/fizzbuzz`);
//     }
//   }
// }

// fizzBuzz(15);
// fizzBuzz(9);

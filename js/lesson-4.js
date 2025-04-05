//! TASK 1

// 1 - отримай body елемент і виведи його в консоль;
const body = document.querySelector('body');

// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector('#title');

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector('.list');

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopic = document.querySelectorAll('[data-topic]');
console.log(dataTopic);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstTopic = document.querySelector('[data-topic]');
console.log(firstTopic);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastTopic = dataTopic[dataTopic.length - 1];
console.log(lastTopic);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
console.log(title.nextElementSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const headerThird = document.querySelectorAll('h3');
console.log(headerThird);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
headerThird.forEach(header => header.classList.add('active'));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navigation = document.querySelector('[data-topic = "navigation"]');
console.log(navigation);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navigation.setAttribute('style', 'background-color: yellow');

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const paragraph = navigation.querySelector('p');
paragraph.textContent = 'Я змінив тут текст!';

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const currentTopicEl = document.querySelector(`[data-topic=${currentTopic}]`);
console.log(currentTopicEl);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
currentTopicEl.setAttribute('style', 'background-color: blue');

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedHeader = document.querySelector('.completed');
console.log(completedHeader);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
completedHeader.closest('li').remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
title.insertAdjacentHTML(
  'afterend',
  "<p>Об'єктна модель документа (Document Object Model)</p>"
);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML"
// а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const liEl = document.createElement('li');
const titleEl = document.createElement('h3');
const pEl = document.createElement('p');

titleEl.textContent = 'Властивість innerHTML';
pEl.textContent =
  'Ще один спосіб створити DOM - елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';

liEl.appendChild(titleEl);
liEl.appendChild(pEl);

list.append(liEl);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const headerInList = 'Властивість innerHTML';
const paragraphInList =
  'Ще один спосіб створити DOM - елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';

list.insertAdjacentHTML(
  'beforeend',
  `<li><h3>${headerInList}</h3><p>${paragraphInList}</p></li>`
);

// 20 - очисти список

list.innerHTML = '';

//! TASK 2

// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const div = document.querySelector('.number-container');

const fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
  const number = randomNumber();
  const block = document.createElement('div');
  block.classList.add('number');
  block.textContent = number;
  if (!(number % 2)) {
    block.classList.add('even');
  } else {
    block.classList.add('odd');
  }
  fragment.append(block);
}
div.append(fragment);

//! TASK 3

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

const form = document.querySelector('.contact-form');
const formInput = document.querySelector('.contact-form-input');
const usernameInCheckbox = document.querySelector('.js-username-output');
const checkbox = document.querySelector('.contact-form-checkbox');

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

formInput.addEventListener('input', event => {
  if (event.target.value.length >= 6) {
    formInput.classList.add('success');
    formInput.classList.remove('error');
  } else {
    formInput.classList.add('error');
    formInput.classList.remove('success');
  }
});

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

formInput.addEventListener('focus', event => {
  if (event.target.value.length === 0) {
    formInput.style.outline = '3px solid red';
  } else {
    formInput.style.outline = '3px solid green';
  }
});

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

formInput.addEventListener('blur', event => {
  if (event.target.value.length === 0) {
    formInput.style.outline = '3px solid red';
  } else {
    formInput.style.outline = '3px solid lime';
  }
});

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const formUser = {
  userName: 'Anonymous',
};
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (!checkbox.checked || formInput.value == '') {
    alert('Please fill all form field!');
    return;
  }
  formUser.userName = formInput.value;
  usernameInCheckbox.textContent = formInput.value;
  form.reset();
}

//!TASK 4

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector('.box');
const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');

let boxSize = 50;

decreaseBtn.addEventListener('click', decreaseBox);
function decreaseBox() {
  if (boxSize >= 20) {
    boxSize -= 20;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
  }
}
increaseBtn.addEventListener('click', increaseBox);
function increaseBox() {
  boxSize += 20;
  box.style.width = `${boxSize}px`;
  box.style.height = `${boxSize}px`;
}

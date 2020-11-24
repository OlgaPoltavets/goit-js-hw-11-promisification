const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${ms}`);
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

const inputMsE1 = document.querySelector('.input-ms');
const delayTimeE1 = document.querySelector('.time-ms');
const btnE1 = document.querySelector('.btn-ms');

let inputValue = '';

inputMsE1.addEventListener('blur', e => {
  inputValue = +e.target.value;
});

btnE1.addEventListener('click', () => {
  delay(inputValue).then(value => (delayTimeE1.textContent = value));
});

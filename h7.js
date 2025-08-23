/* Задание 1 */ 
console.log('Задание 1')

const rev = ['js']
const upRev = rev[0].toUpperCase();
console.log(upRev);

/* Задание 2 */ 
console.log('Задание 2')

function taskThree(before, after) {
  const taskAfter = after.toLowerCase();
  return before.filter(item => item.toLowerCase().startsWith(taskAfter));
}

console.log(taskThree(['Qwerty', 'qdWerty', 'qwyyyyy', 'QW'], 'qw'));

/* Задание 3 */ 
console.log('Задание 3')

const number = 32.58884;
const floorNumber = Math.floor(number);
const ceilNumber = Math.ceil(number);
const roundNumber = Math.round(number);
console.log(floorNumber); 
console.log(ceilNumber);  
console.log(roundNumber); 

/* Задание 4 */ 
console.log('Задание 4')

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

/* Задание 5 */ 
console.log('Задание 5')

function teskFive() {
   return Math.floor((Math.random() * 10) + 1);
}

console.log(teskFive())

/* Задание 6 */ 
console.log('Задание 6')

function taskSix(randomNumber) {
  
  let ourMass = []

  for (let i = 0; i < randomNumber / 2; i++) {
    ourMass.push(Math.floor(Math.random() * randomNumber));
  }
  return ourMass;
}

console.log(taskSix(10))

/* Задание 7 */ 
console.log('Задание 7')

function teskSeven(start,end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

console.log(teskSeven(110,12))

//Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

/* Задание 8 */ 
console.log('Задание 8')

console.log(new Date());

/* Задание 9 */ 
console.log('Задание 9')

const teskNine = new Date();
teskNine.setDate(teskNine.getDate() + 73 );

console.log(teskNine);


/* Задание 10 */ 
console.log('Задание 10')

function formatDate(date) {
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}




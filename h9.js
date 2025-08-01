/* Задание 1 */ 

const title = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click', function() {
  if (title.style.display === 'none') {
    console.log('клик - показать текст');
    title.style.display = 'block';
    button.textContent = 'Скрыть заголовок';
  } else {
    console.log('клик - скрыть текст');
    title.style.display = 'none';
    button.textContent = 'Показать заголовок';
  }
});

/* Задание 2 */ 

const paragrafOne = document.querySelector('.paragraf_one');
const paragrafButton = document.querySelector('.paragraf_button');

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

paragrafButton.addEventListener('click', function() {
  console.log('изменить цвет');
  paragrafOne.style.color = randomColor();
});

/* Задание 3 */ 

const title_button_Two = document.querySelector('.title_button_Two');

let isChanged = false; // Флаг для отслеживания состояния текста

title_button_Two.addEventListener('click', function() {
  console.log('изменить текст');
  if (!isChanged) {
    title.textContent = 'Домашняя работа 9';
    isChanged = true;
  } else {
    title.textContent = 'Home Work 9'; 
    isChanged = false;
  }
});

/* Задание 4 и Задание 5*/ 

const discription = document.querySelectorAll('.discription');
const discription_button = document.querySelector('.discription_button');

let isChangedDiscription = false; // Флаг для отслеживания состояния текста

discription_button.addEventListener('click', function() {
  console.log('изменить текст discription');
  if (!isChangedDiscription) {
    discription.forEach(item => {
      item.textContent = 'Измененный текст';
      item.style.color = '#ff0062';
    });
    isChangedDiscription = true;
  } else {
    discription.forEach(item => {
      item.textContent = 'Я исчезну';
      item.style.color = '';
    });
    isChangedDiscription = false;
  }
});

/* Задание 6 */ 

const discription_button_delete = document.querySelector('.discription_button_delete');
const discription_no = document.querySelector('.discription_no');



discription_button_delete.addEventListener('click', function() {
  discription_no.remove();
});



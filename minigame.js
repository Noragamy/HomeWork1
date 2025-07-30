function goClick() {
    alert('В разработке!!!');
}

/*_______Угадай число________*/
function gouessNumber() {
    let namRd = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    console.log(`Подсказака, это точно не ${namRd}`);
    let namUs = Number(prompt("Я загадал число от 1 до 100, попробуй его отгадать!"));

    while(namUs !== namRd) {
        if (isNaN(namUs)) {
            alert(`Что за шутки, ${namUs} - неверное значение!`);
        } else if (Math.abs(namUs - namRd) > 50) {
            alert(`Нет нет нет, ${namUs} безумно холодно!`);
        } else if (Math.abs(namUs - namRd) > 25) {
            alert(`Ой-ой, ${namUs} холодно!`);
        } else if (Math.abs(namUs - namRd) > 10) {
            alert(`Так, ${namUs} это прохладненько!`); 
        } else if (Math.abs(namUs - namRd) > 5) {
            alert(`У-ууух, ${namUs} тепло!`);
        } else if (Math.abs(namUs - namRd) > 3) {
            alert(`Да-да, ${namUs} горячо!`);
        } else if (Math.abs(namUs - namRd) >= 1) {
            alert(`Ааааа, ${namUs} ЖАРКО!`); 
        } 
        namUs = Number(prompt("Я загадал число от 1 до 100, попробуй его отгадать еще разок, я буду плдсказывать!"));
    }  
    alert(`Бу-га-гашеньки, ты угадал, я правда загадал ${namUs}`);
}

/*______Простая арифметика______*/ 

function simpleArithmetic() {
    alert('Здравствуйте! Готовы порешать примеры?');
    let a = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    let b = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  
    const exp = ['+', '-', '*', '/'];
    let randomIndex = Math.floor(Math.random() * exp.length); // Генерируем случайное число от 0 до размера массива
    let operation = exp[randomIndex];
  
    function calculateOperation(a, b, operation) {
      if (operation === '+') {
        return a + b;
      } else if (operation === '-') {
        return a - b;
      } else if (operation === '*') {
        return a * b;
      } else {
        // Проверка деления на 0 
        if (b !== 0) {
          return (a / b).toFixed(2);
        }
      }
    }
  
    let result = calculateOperation(a, b, operation);
  
    console.log(`Случайный элемент массива: ${operation}`);
    console.log(`${a} ${operation} ${b} = ${result}`);
  
    // Проверяем ответ пользователя
    let userInput = Number(prompt(`Решите простой арифметический пример ${a} ${operation} ${b}`));
    console.log(userInput);
    if (userInput === result) { //.toFixed(1) хочу чтобы пользователь мог считать с точностью до 2 знака
      alert(`${a} ${operation} ${b} = ${userInput}, абсолютно верно!`);
    } else {
      alert(`${a} ${operation} ${b} не равно ${userInput}, Ошибка!`);
    }
  }



/*______Переверни текст______*/ 

function reversedText() {
  alert('Здравствуйте! Перевернуть ваш текст?');
  const inputText = prompt('Введите текст:');
  const reversedText = inputText.split('').reverse().join('');
  console.log(reversedText);
  alert(`Вот, что получилось "${reversedText}"`)
}


/*______Викторина_____*/ 

const quiz = [
{
  question: "Какой компанией основан сервис онлайн-образования 'skypro' ?",
  options: [" 1. MMM ", " 2. skypro ", " 3. skyeng ", " 4. mail.ru "],
  correctAnswer: 3
},
{
  question: "В каком году основан 'skypro'?",
  options: [" 1. 2012 ", " 2. 2020 ", " 3. 2021 ", " 4. 2015 "],
  correctAnswer: 3
},
{
  question: "Какой компании или организации пренадлежат права на язык программирования JavaScript",
  options: [" 1. Oracle ", " 2. Java ", " 3. Microsoft ", " 4. Никому не пренадлежит "],
  correctAnswer: 4
},
{
  question: "Что общего у `JavaScript` и `Java`",
  options: [" 1. Часть названия ", " 2. Общее ядро ", " 3. Одинаковый синтаксис ", " 4. языки front-end разработки "],
  correctAnswer: 1
}
];

function startQuiz() {
let correctCount = 0;

for (let i = 0; i < quiz.length; i++) {
  const question = quiz[i];
  alert(`${question.question} \n ${question.options}`);

  const userAnswer = parseInt(prompt("Введите номер правильного ответа:"));

  if (userAnswer === question.correctAnswer) {
    correctCount++;
  }
}

    alert("Вы правильно ответили на " + correctCount + " из " + quiz.length + " вопросов.");
}


/*______Камень, ножницы, бумага_____*/ 

const ssp = ["камень", "ножницы", "бумага"]

function stoneScissorsPaper() {

alert("Сыграем в камень, ножницы, бумага?");

let userChois = prompt(`введите с клавиатуры "камень", "ножницы" или "бумагу"!`);

console.log(userChois);

while (!ssp.includes(userChois.toLowerCase())) {

  alert(`Не могу прочесть`);

  userChois = prompt(`введите с клавиатуры "камень", "ножницы" или "бумагу"!`);
}

let randomIndex = Math.floor((Math.random() * (2 - 0 + 1) + 0 ));
console.log(randomIndex);

let programChoise =  ssp[randomIndex];

console.log(programChoise);



let whoIsWinner = (userChois, programChoise) => {

  if (userChois === programChoise) {

      alert(`Цу-е-фа Вы ${userChois} а я ${programChoise} \n итого НИЧЬЯ`)

  }

  else if ((userChois === ssp[0] && programChoise === ssp[1]) || (userChois === ssp[1] && programChoise === ssp[2]) || (userChois === ssp[2] && programChoise === ssp[0])) {

      alert(`Цу-е-фа Вы ${userChois} а я ${programChoise} \n Поздравляю, Вы победили!`)

  }

  else if ((programChoise === ssp[0] && userChois === ssp[1]) || (programChoise === ssp[1] && userChois === ssp[2]) || (programChoise === ssp[2] && userChois === ssp[0])) {

      alert(`Цу-е-фа Вы ${userChois} а я ${programChoise} \n Я победил, не огорчайтесь!`)

  }

}

whoIsWinner(userChois, programChoise)

}


/*______Случайный цвет_____*/ 





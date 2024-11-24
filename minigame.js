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

/*______Простая арифметика___*/ 

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
          return a / b;
        }
      }
    }
  
    let result = calculateOperation(a, b, operation);
  
    console.log(`Случайный элемент массива: ${operation}`);
    console.log(`${a} ${operation} ${b} = ${result}`);
  
    // Проверяем ответ пользователя
    let userInput = Number(prompt(`Решите простой арифметический пример ${a} ${operation} ${b}`));
    console.log(userInput);
    if (userInput.toFixed(2) === result.toFixed(2)) { //.toFixed(1) хочу чтобы пользователь мог считать с точностью до 2 знака
      alert(`${a} ${operation} ${b} = ${userInput}, абсолютно верно!`);
    } else {
      alert(`${a} ${operation} ${b} не равно ${userInput}, Ошибка!`);
    }
  }

// /*______Простая арифметика(Код упрощен с помощью GTP)___*/ 
//   function simpleArithmetic() {
//     alert('Здравствуйте! Готовы порешать примеры?');
//     let a = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//     let b = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

//     const exp = ['+', '-', '*', '/'];
//     let randomIndex = Math.floor(Math.random() * exp.length); // Генерируем случайное число от 0 до размера массива
//     let operation = exp[randomIndex];
//     console.log(`Случайный элемент массива: "${operation}"`);
    
//     // Создаём функцию для выполнения операции и проверки ответа пользователя
//     function calculateAndCheck(a, b) {
//         let result = a + '' + operation + '' + b; // как это вообще работает...
//         console.log(`${a} ${operation} ${b} = ${result}`);
//         let userInput = Number(prompt(`Решите простой арифметический пример ${result}`));// GTP не ставит нигде Number =)
//         console.log(`Ответ пользователя: ${userInput}`);
//         if (userInput === result) {
//             alert(`${a} ${operation} ${b} = ${userInput}, абсолютно верно!`);
//         } else {
//             alert(`${a} ${operation} ${b} не равно ${userInput}, Ошибка!`);
//         }
//     }

//     calculateAndCheck(a, b);
// }
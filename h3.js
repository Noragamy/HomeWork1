
//Задание 1
let password = 'пароль';
let aut = prompt('Задание 1 \n \n \n Введите пароль');
if (aut === password) {
    alert('Пароль введен верно');
    console.log('Пароль введен верно');
} else {
    alert('Пароль введен не верно!');
    console.log('Пароль введен не верно!');
}

//Задание 2
let c = prompt('Задание 2 \n \n Введите любое чило')
if (c >= 0 && c <= 10) {
    alert('Верно');
    console.log('Верно');
} else {
    alert('Неверно')
    console.log('Неверно')
}

//Задание 3 
let d = prompt('Задание 3 \n \n Введите любое число');
let e = prompt('Введите любое другое (или это же) число еще раз')
if (d >= 100 || e >= 100) {
    alert('Верно');
    console.log('Верно');
} else {
    alert('Неверно');
    console.log('Неверно');
}

//Заданеи 4
let a = '2';
let b = '3';

a = Number(2);
b = Number(3);

alert(`Задание 4 \n \n ${a + b}`);
console.log(a + b);

//Задание 5
let monthNumber = prompt('Задание 5 \n \n Введите число месяца');
//if (monthNumber < 1 || monthNumber > 12) {
 //   alert('Вы ввели некорректное значение, или забыли, что 13го месяца не существует')
  //  console.log('Вы ввели некорректное значение, или забыли, что 13го месяца не существует')
//} else {
    switch (monthNumber) {
        case '1':
            alert('Зима');
            console.log('Зима');
           break;
        case '2':
            alert('Зима');
            console.log('Зима');
           break;
        case '3':
            alert('Весна');
            console.log('Весна');
           break;
        case '4':
            alert('Весна');
            console.log('Весна');
           break;
        case '5':
            alert('Весна');
            console.log('Весна');
           break;
        case '6':
            alert('Лето');
            console.log('Лето');
           break;
        case '7':
            alert('Лето');
            console.log('Лето');
           break;
        case '8':
            alert('Лето');
            console.log('Лето');
           break;
        case '9':
            alert('Осень');
            console.log('Осень');
           break;
        case '10':
            alert('Осень');
            console.log('Осень');
           break;
        case '11':
            alert('Осень');
            console.log('Осень');
           break;
        case '12':
            alert('Зима');
            console.log('Зима');
           break;  
        default:
            alert('Вы ввели некорректное число, или забыли, что 13го месяца не существует');
           console.log('Вы ввели некорректное число, или забыли, что 13го месяца не существует');
     }     
//}



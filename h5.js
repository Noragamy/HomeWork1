//Задание 1 

function chooseLess(a, b) {

if (a > b) {
    return a < b ? a : b; 
}
}

//Задание 2 

function parity(n) {

    if (n % 2 == 0) {
      console.log("Число чётное");
    } else {
      console.log("Число нечётное");
    }
  }


//Задание 3

function square(g) {
    a = g ** 2;
    console.log(a);
}

function squareRet(u) {
    return u ** 2;
}


//Задание 4 (C помощью GTP)


function user() {
    const userAge = Number(prompt("Сколько вам лет?"));

    if (isNaN(userAge)) {
        console.log("Вы ввели неверное значение!");
    } else if (userAge < 0) {
        console.log("Возраст не может быть отрицательным!");
    } else {
        if (userAge >= 0 && userAge <= 12) {
            console.log("Привет, друг!");
        } else if (userAge >= 13 && userAge < 99) {
            console.log("Добро пожаловать!");
        } else if (userAge >= 99) {
            console.log("Шутите? Или же, Вы действительно хорошо сохранились");
        }
    }
}
user();

//Задание 5 

function exam(e, r) {
    if (isNaN(e) || isNaN(r)) {
        console.log("Одно или оба значения не являются числом");
    } else {
        return e + r;
    }
}


//Задание 6 

function goNam() {

    const j = Number(prompt("Введите число j"));
    if (isNaN(j)) {
        alert(`Переданный параметр не является числом`);
    } else {
    let k = j ** 3; 
    alert(`j в кубе равняется ${k}`)
    }
}

//Задание 7 
function getArea() {
    return Math.PI * this.radius ** 2;
};

function getPerimeter() {
    return 2 * Math.PI * this.radius;
};


const Circal1 = {
    radius: 55,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const Circal2 = {
    radius: 99,
    getArea: getArea,
    getPerimeter: getPerimeter,
}



//Задание 1
for (let a = 0; a < 2; a++) {
    console.log('Привет');
}

//Задание 2 
for (let i = 1; i < 6; i++) {
    console.log(i);
}

//Задание 3
for (let i = 7; i < 24; i++) {
    console.log(i);
}

//Задание 4
const obj = {
"Коля" : '200',
"Вася" : '300',
"Петя" : '400'
}

for (let key in obj) {
    console.log(`Сотрудник ${key} зарабатывет ${obj[key]} $`); }


//Задание 5
for (let n = 1000; n >= 50; n = n / 2) {
    
    if (n <= 50) {
        break;
    }
    console.log(n);
}

//Задание 6

for (let day = 5; day <= 31; day += 7) {
    if (day ===5 || day % 5) {
        console.log(`сегодня пятница ${day}е число, пора готовить еженедельный отчет`);
    }
}
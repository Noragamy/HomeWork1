alert('Доброго времени суток!')

/*Задание 1 */
console.log('Задание 1')
const masOne = [1, 5, 4, 10, 0, 3]

for (let i = 0; i < masOne.length; i++) {
    if (masOne[i] === 10) {
      console.log(masOne[i]);
      break;
    } else {
      console.log(masOne[i]);
    }
  }

/*Задание 2 */
console.log('Задание 2')
let masTwo = [1, 5, 4, 10, 0, 3];
let index = masTwo.indexOf(4);
console.log(index);

/*Задание 3 */
console.log('Задание 3')
let masThree = [1, 3, 5, 10, 20];
console.log(masThree.join(' '));

/*Задание 4 */
console.log('Задание 4')
let masFour = [];

for (let i = 0; i < 3; i++) {
  let submasFour = [];
  for (let j = 0; j < 3; j++) {
    submasFour.push(1);
  }
  masFour.push(submasFour);
}
console.log(JSON.stringify(masFour)); //JSON.stringify() подсказала нейросеть 

/*Задание 5 */
console.log('Задание 5')
let masFive = [1, 1, 1];

masFive.push(2, 2, 2);
console.log(masFive);

/*Задание 6 */
console.log('Задание 6')
let masSix = [9, 8, 7, 'a', 6, 5];

masSix.sort().indexOf('a');

console.log(masSix.pop());
console.log(masSix);

/*Задание 7 */
console.log('Задание 7')
let masSeven = [9, 8, 7, 6, 5];
console.log(masSeven);
let userInput = Number(prompt("Попробуйте угадать число!"));
console.log(userInput);

if (masSeven.includes(userInput)) {
  alert("Угадал");
} else {
  alert("Не угадал");
}

/*Задание 8 */
console.log('Задание 8');
let str = 'abcdef';
let masEight = str.split('').reverse();
console.log(masEight.join(''));

/*Задание 9 */
console.log('Задание 9')
const masNine = [[1, 2, 3], [4, 5, 6]];
console.log(masNine.flat());

/*Задание 10 */
console.log('Задание 10')
const masTen = [];
for (let i = 1; i <= 10; i++) {
  masTen.push(i);
}

let sum = 0;
for (let i = 0; i < masTen.length - 1; i++) {
  sum = masTen[i] + masTen[i + 1];
  console.log(sum);
}

/*Задание 11 */
console.log('Задание 11')
function squaredMas(masEleven) {
  const squaredNumbers = [];
  for (let i = 0; i < masEleven.length; i++) {
    squaredNumbers.push(Math.pow(masEleven[i], 2));
  }
  return squaredNumbers;
}
/*Задание 12 */
console.log('Задание 12')

function massfirt(mass) {
  return mass.map(function callback(currentValue, index, array) {
    return array[index].length
  })
}


console.log(massfirt(['mama', 'papa papa']))

/*Задание 13 */
console.log('Задание 13')
function filtarry(filt) {
  return filt.filter(function callback(value, index, array) {
    return array[index] < 0
  })
}

console.log(filtarry([-3, 5, -2, 0]));


/*Задание 14 */
console.log('Задание 14')


function evenNam(){
  const massRandom = []

  for (let i = 0; i < 10; i++) {
    massRandom[i] = Math.floor(Math.random() * (10 - 1)) + 1;
  }

  return massRandom.filter((value, index, array) => value % 2 === 0)
}

console.log(evenNam())

/*Задание 15 */
console.log('Задание 15')

function masslost(){
  
  const massRandom = []

  for (let i = 0; i < 6; i++) {
    massRandom[i] = Math.floor(Math.random() * (10 - 1)) + 1;
  }
  console.log(massRandom);

return (massRandom.reduce((accumulator, currentValue) => accumulator + currentValue) / massRandom.length).toFixed(2)

}
console.log(masslost());
function goClick() {
    alert('В разработке!!!');
}

/*_______Угадай число________*/
function gouessNumber() {
    let namRd = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    let namUs = Number(prompt("Я загадал число от 1 до 100, попробуй его отгадать!"));

    while(namUs !== namRd) {
        if (isNaN(namUs)) {
            alert(`Что за шутки, ${namUs} - неверное значение!`);
            namUs = Number(prompt("Я загадал число от 1 до 100, попробуй его отгадать еще разок, я буду плдсказывать!"));
        } else if (namUs < namRd - 50 || namUs > namRd + 50) {
            alert(`Нет нет нет, ${namUs} безумно холодно!`);
            namUs = Number(prompt("Я загадал число от 1 до 100, попробуй его отгадать еще разок, я буду плдсказывать!"));
        } else if (namUs < namRd - 25 || namUs > namRd + 25) {
            alert(`Ой-ой, ${namUs} холодно!`);
            namUs = Number(prompt("Я загадал число от 1 до 100, попробуй его отгадать еще разок, я буду плдсказывать!"));
        } else if (namUs < namRd - 10 || namUs > namRd + 10) {
            alert(`Так, ${namUs} это прохладненько!`);
            namUs = Number(prompt("Я загадал число от 1 до 100, попробуй его отгадать еще разок, я буду плдсказывать!")); 
        } else if (namUs < namRd - 5 || namUs > namRd + 5) {
            alert(`У-ууух, ${namUs} тепло!`);
            namUs = Number(prompt("Я загадал число от 1 до 100, попробуй его отгадать еще разок, я буду плдсказывать!"));
        } else if (namUs < namRd - 3 || namUs > namRd + 3) {
            alert(`Да-да, ${namUs} горячо!`);
            namUs = Number(prompt("Я загадал число от 1 до 100, попробуй его отгадать еще разок, я буду плдсказывать!")); 
        } else if (namUs < namRd - 1 || namUs > namRd + 1) {
            alert(`Ааааа, ${namUs} ЖАРКО!`);
            namUs = Number(prompt("Я загадал число от 1 до 100, попробуй его отгадать еще разок, я буду плдсказывать!")); 
        } else if (namUs === namRd) {
            
        }
        //alert(`Бу-га-гашеньки, ты угадал, я правда загадал ${namUs}`);
        
    }  
}


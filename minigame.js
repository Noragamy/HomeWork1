function goClick() {
    alert('В разработке!!!');
}

/*_______Угадай число________*/
function gouessNumber() {
    let namRd = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    console.log(namRd);
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


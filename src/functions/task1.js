function getWeekDay(date){
    let days = ['Вс', "Пн", "Вт", "Срд", "Чт", "Пт", "Сб"];
    return days[date.getDay()];
}

let date = new Date();
console.log(getWeekDay(date));
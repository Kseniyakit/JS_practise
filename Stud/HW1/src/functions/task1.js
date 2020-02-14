function getWeekDay(date) {
    if ((date === null) || (date === NaN) || (date === undefined) || (date === "")) {
        return null;
    }
    let days = ['Вс', "Пн", "Вт", "Срд", "Чт", "Пт", "Сб"];
    let res = days[date.getDay()];
    return res;
}

/* let date = new Date();
console.log(getWeekDay(date)); */
function unluckyDays(year) {
    let date = new Date();
    let counter = 0;
    let month;

    for (month = 0; month < 12; month++) {
        date.setFullYear(year, month, 13);
        if (date.getDay() == 5) {
            counter++;
        }
    }

    return counter;
}

console.log(unluckyDays(2065))
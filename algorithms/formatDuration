function formatDuration(sec) {

    if (sec == 0) {
        return 'now'
    }

    const oneMinute = 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const oneYear = oneDay * 365;

    let result = [];

    let years = ~~(sec / oneYear);
    let days = ~~((sec % oneYear) / oneDay)
    let hours = ~~((sec % oneDay) / oneHour)
    let minutes = ~~((sec % oneHour) / oneMinute)
    let seconds = sec % oneMinute;

    let time = [
        [years, days, hours, minutes, seconds], 0, 'start', 'end'
    ]

    time[0].forEach((element, index) => {
        if (element) {
            time[1]++;
            if (time[2] == 'start') {
                time[2] = index
            }
            time[3] = index
        }
    })

    if (years > 0) {
        result.push(`${years} year${years > 1 ? 's' : ''}`)
    }
    if (days > 0) {
        result.push(`${days} day${days > 1 ? 's' : ''}`)
    }
    if (hours > 0) {
        result.push(`${hours} hour${hours > 1 ? 's' : ''}`)
    }
    if (minutes > 0) {
        result.push(`${minutes} minute${minutes > 1 ? 's' : ''}`)
    }
    if (seconds > 0) {
        result.push(`${seconds} second${seconds > 1 ? 's' : ''}`)
    }

    if (time[1] > 1) {
        result.splice(~~(time[1] - 1), 0, ' and ');
    }

    if (time[1] > 2) {

        for (i = 0; i < time[1]; i++) {

            if (i < time[1] - 2) {
                result[i] = result[i] + ', '
            }
        }
    }

    return result.join('')

}

console.log(formatDuration(62)) //"1 hour, 1 minute and 2 seconds" 

console.log(formatDuration(34444442))
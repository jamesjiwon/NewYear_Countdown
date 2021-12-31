const dayEl = document.getElementById('day')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')
const bigEl = document.getElementById('big_countdown')

function countDown(){
    const newYear = new Date(2022, 0, 1)
    const current = new Date()

    const diffTime = Math.abs(newYear-current)

    const days = Math.floor( diffTime/(1000*3600*24) )
    const hours = Math.floor( diffTime/(1000*3600) %24)
    const mins = Math.floor( diffTime/(1000*60) %60)
    const seconds = Math.floor( diffTime/(1000) %60)
    const shows = false
    dayEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)
    if (days == 00) {
        if (hours == 00) {
            if (mins == 00) {
                if (seconds == 10) {
                    dayEl.style.display = "none";
                    hoursEl.style.display = "none";
                    minsEl.style.display = "none";
                    secondsEl.style.display = "none";
                    bigEl.style.display = " ";
                    shows = true;
                }
            }
        }
    }
    if (shows) {
        bigEl.innerHTML = formatTime(seconds)
    }
}
function formatTime(time){
    return time < 10 ? (`0${time}`) : (time);
}
countDown()

setInterval(countDown, 1000)

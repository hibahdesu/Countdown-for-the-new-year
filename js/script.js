const body = document.querySelector('body');
const h2 = document.querySelector('h2');
const year = document.querySelector('.year');
const countdown = document.querySelector('.countdown');
const days = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const date = new Date('Jan 1, 2024 00:00:00').getTime();
console.log(date);

update();

function update() {
    const now = new Date().getTime();
    console.log(now);
    const gap = date - now;
    console.log(gap);

    const sec = 1000;
    console.log(sec);
    const min = sec * 60;
    console.log(min);
    const hou = min * 60;
    console.log(hou);
    const day = hou * 24;
    console.log(day);


    const remDay = Math.floor(gap / day);
    //Math.floor(gap / day)
    console.log(remDay);
    days.innerText = remDay;
    if (remDay === 0 && remHour === 0 && remMin === 0 && remSec === 0) {
        body.style.background = 'url(../images/snowman-g83d1ee22f_1280.jpg)'
        body.style.backgroundSize = 'cover';
        h2.innerHTML = 'Happy New Year'
        h2.style.color = 'white';
        year.style.color = 'red';
        countdown.style.backgroundColor = 'rgba(255, 255 ,255, 0.5)'
    }

    const remHour = Math.floor((gap % day) / hou);
    console.log(remHour);
    hour.innerText = remHour;

    const remMin = Math.floor((gap % hou) / min);
    console.log(remMin);
    minute.innerText = remMin;

    const remSec = Math.floor((gap % min) / sec);
    console.log(remSec);
    second.innerText = remSec;


    setTimeout(() => {
        update();
    }, 1000)

}
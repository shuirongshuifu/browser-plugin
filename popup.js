function updateClock() {
    const clockElement = document.querySelector('#clock')
    const currentTime = new Date();
    clockElement.textContent = currentTime.toLocaleString();
}

setInterval(updateClock, 1000);

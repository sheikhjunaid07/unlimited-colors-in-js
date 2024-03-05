//generate a random color

const randomColor = function () {
    const hexValue = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexValue[Math.floor(Math.random() * 16)];
    }
    return color;
};
console.log(randomColor());

let intervalId;
const startChangingColor = () => {
    if (intervalId == null) {
        intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null; //set intervalId to set because when to click start button they overright intervalId. so after stoping intervalId again set to null.
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

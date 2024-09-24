const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === 'C') {
            display.innerText = '';
        } else if (button.innerText === '=') {
            display.innerText = eval(display.innerText);
        } else {
            display.innerText += button.innerText;
        }
    });
});

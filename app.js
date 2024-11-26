let selectedOption = null;
let lordshang = 0;
let confucius = 0;
let mengzi = 0;
let xunzi = 0;


function handleAnswer(button, philosopher) {
    if (selectedOption) {
        selectedOption.classList.remove('selected');
    }

    button.classList.add('selected');
    selectedOption = button;
}
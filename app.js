const selectedAnswers = {};
const philosopherScores = {
    "Lord Shang": 0,
    "Confucius": 0,
    "Mengzi": 0,
    "Xunzi": 0
};

function handleAnswer(option, questionId) {
    const philosopher = option.getAttribute("philosopher");

    //idk if i need this
    if (selectedAnswers[questionId]) {
        const previousPhilosopher = selectedAnswers[questionId];
        philosopherScores[previousPhilosopher]--; 
    }

    selectedAnswers[questionId] = philosopher;
    philosopherScores[philosopher]++;

    const questionElement = document.getElementById(questionId);
    const options = questionElement.querySelectorAll(".option");
    options.forEach(opt => opt.classList.remove("selected")); 
    option.classList.add("selected"); 
}

function calculateResult() {
    let maxScore = 0;
    let resultPhilosopher = "";

    for (const [philosopher, score] of Object.entries(philosopherScores)) {
        if (score > maxScore) {
            maxScore = score;
            resultPhilosopher = philosopher;
        }
    }

    if (resultPhilosopher) {
        const resultPage = `${resultPhilosopher.toLowerCase().replace(/\s+/g, '')}.html`;
        window.location.href = resultPage;
    } else {
        alert("Please answer all the questions to see your result.");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach(option => {
        option.addEventListener("click", () => {
            const question = option.closest(".question");
            const options = question.querySelectorAll(".option");

            options.forEach(opt => opt.classList.remove("selected"));
            option.classList.add("selected");
        });
    });

    const resultButton = document.getElementById("seeResults");
    resultButton.addEventListener("click", () => {
        window.location.href = "result.html"; 
    });
    resultButton.addEventListener("click", calculateResult);
});
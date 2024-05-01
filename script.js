const questions = [
    {
        question: "What is plagiarism?",
        options: [
            "Copying someone else's work without permission.",
            "Using someone else's ideas without giving credit.",
            "Both A and B.",
            "None of the above."
        ],
        answer: "Both A and B."
    },
    {
        question: "Why is plagiarism unethical?",
        options: [
            "It's against the law.",
            "It undermines academic integrity.",
            "It's considered rude.",
            "All of the above."
        ],
        answer: "It undermines academic integrity."
    },
    // Add more questions here...
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("btn");
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });

    feedbackElement.textContent = "";
    nextButton.style.display = "none";
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    if (selectedOption === correctAnswer) {
        score++;
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Incorrect!";
    }

    nextButton.style.display = "block";
}

function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // Game over
        questionElement.textContent = "Game Over!";
        optionsElement.innerHTML = `<p>Your score: ${score}/${questions.length}</p>`;
        feedbackElement.textContent = "";
        nextButton.style.display = "none";
    }
}

nextButton.addEventListener("click", goToNextQuestion);

// Start the game
displayQuestion();

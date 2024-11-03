let questions = [
    {
        question: "Hány összetevőből áll a hagyományos Mojito koktél ?",    //1
        answers: ["5", "4", "6", "3"],
        correctAnswer: 0, 
    },
    {
        question: "Hány kalória van egy kiló csirkemellben ?",
        answers: ["1000 kcal", "1200 kcal", "1400 kcal", "1600 kcal"],      //2
        correctAnswer: 1
    },
   
];

questions = removeDuplicates(questions);

let currentQuestionIndex = 0;
let lives = 3;
const maxLives = 3;
let usedFelezes = false;
let usedTipp = false;
let usedTelefon = false;
let usedExtraLife = false;
let felezesCount = 0;
let telefonCount = 0;
let tippCount = 0;
const maxLifelineUses = 3;
const maxNormalQuestions = 20;

function startGame() {
    currentQuestionIndex = 0;
    lives = maxLives; 
    shuffleQuestions(questions); 
    updateLives();
    kerdesekmegjelen();
}


function updateLifelineButtons() {
    
    document.getElementById("felezesButton").innerText = `50-50 (${maxLifelineUses - felezesCount})`;
    document.getElementById("telefonButton").innerText = `Telefon (${maxLifelineUses - telefonCount})`;
    document.getElementById("tippButton").innerText = `Tipp (${maxLifelineUses - tippCount})`;
}


function removeDuplicates(array) {
    const uniqueQuestions = [];
    const seenQuestions = new Set();

    array.forEach(questionObj => {
        if (!seenQuestions.has(questionObj.question)) {
            uniqueQuestions.push(questionObj);
            seenQuestions.add(questionObj.question);
        }
    });

    return uniqueQuestions;
}

function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

function kerdesekmegjelen() {
    if (currentQuestionIndex >= questions.length) {
        ujjatek();
        return;
    }

    const questionElement = document.getElementById("question");
    const questionNumberElement = document.getElementById("questionNumber");
    const answerElements = [
        document.getElementById("answer0"),
        document.getElementById("answer1"),
        document.getElementById("answer2"),
        document.getElementById("answer3"),
    ];
    const imageElement = document.getElementById("questionImage");

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    questionNumberElement.innerText = `Kérdés       ${currentQuestionIndex + 1} / ${questions.length}`;

    // Handle image display
    if (currentQuestion.image) {
        imageElement.src = currentQuestion.image;
        imageElement.style.display = "block";
    } else {
        imageElement.style.display = "none";
    }


    currentQuestion.answers.forEach((answer, index) => {
        const element = answerElements[index];
        element.innerText = answer;
        element.classList.remove("correct", "incorrect");
        element.style.pointerEvents = "auto";
        element.style.backgroundColor = "#ff00dd84";
        element.style.border = "5px ridge rgb(157, 72, 225)"  ;
        element.style.display = "block";

        element.onclick = () => {
            checkAnswer(index);
        };
    });
}

function checkAnswer(selectedAnswerIndex) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const answerElements = [
        document.getElementById("answer0"),
        document.getElementById("answer1"),
        document.getElementById("answer2"),
        document.getElementById("answer3"),
    ];

    answerElements.forEach(element => {
        element.style.pointerEvents = "none";
    });

    if (selectedAnswerIndex === correctAnswer) {
        document.getElementById(`answer${selectedAnswerIndex}`).style.backgroundColor = "limegreen";


        if ([19, 39, 59, 79].includes(currentQuestionIndex)) {
            
            if (lives < maxLives) {
                lives++; 
                updateLives(); 
            }

            
            const helpTypes = ["felezes", "telefon", "tipp"];
            let availableHelps = helpTypes.filter(type => {
                if (type === "felezes") return usedFelezes;
                if (type === "telefon") return usedTelefon;
                if (type === "tipp") return usedTipp;
            });
        }

        
        if (currentQuestionIndex === questions.length - 1) {
            endGame(true); 
        } else {
            setTimeout(() => {
                currentQuestionIndex++;
                kerdesekmegjelen();
            }, 1000);
        }
    } else {
        document.getElementById(`answer${selectedAnswerIndex}`).style.backgroundColor = "red";

        
        if (currentQuestionIndex === questions.length - 1) {
            endGame(false); 
        } else {
            setTimeout(() => {
                lives--;
                updateLives();

                if (lives <= 0) {
                    endGame(false); 
                } else {
                    currentQuestionIndex++;
                    kerdesekmegjelen();
                }
            }, 1000);
        }
    }
}

function updateLives() {
    for (let i = 1; i <= maxLives; i++) {
        const lifeElement = document.getElementById(`life${i}`);
        lifeElement.style.visibility = i <= lives ? "visible" : "hidden";
    }
}


function useLifeline(type) {
    const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;
    const answerElements = [
        document.getElementById("answer0"),
        document.getElementById("answer1"),
        document.getElementById("answer2"),
        document.getElementById("answer3"),
    ];

    if (type === "felezes" && felezesCount < maxLifelineUses) {
    
        const incorrectAnswers = [0, 1, 2, 3].filter(i => i !== correctAnswerIndex);
        const answersToRemove = incorrectAnswers.sort(() => Math.random() - 0.5).slice(0, 2);
        answersToRemove.forEach(index => {
            document.getElementById(`answer${index}`).style.display = "none";
        });
        felezesCount++;
        if (felezesCount >= maxLifelineUses) {
            document.getElementById("felezesButton").disabled = true;
        }
    }

    if (type === "telefon" && telefonCount < maxLifelineUses) {

        document.getElementById(`answer${correctAnswerIndex}`).style.backgroundColor = "green";
        telefonCount++;
        if (telefonCount >= maxLifelineUses) {
            document.getElementById("telefonButton").disabled = true;
        }
    }

    if (type === "tipp" && tippCount < maxLifelineUses) {
        let userTip = prompt("Adj meg egy számot: (1-4)!");
        let userIndex = parseInt(userTip) - 1; 

        if (userIndex >= 0 && userIndex < 4) {
            if (userIndex === correctAnswerIndex) {
                document.getElementById(`answer${userIndex}`).style.backgroundColor = "green"; 
            } else {
                document.getElementById(`answer${userIndex}`).style.backgroundColor = "red"; 
            }
            tippCount++;
            if (tippCount >= maxLifelineUses) {
                document.getElementById("tippButton").disabled = true;
            }
        }
    }

    updateLifelineButtons(); // Frissíti a gombok feliratát a használat után
}
    function useExtraLife() {
        if (!usedExtraLife && lives < maxLives) {
            lives++;
            updateLives();
            usedExtraLife = true;
            document.getElementById("extraLifeButton").disabled = true;
        } 
    
        updateLifelineButtons(); 
    }
    

function endGame(won) {
    if (won) {
        window.location.href = "gratulation.html";
    } else {

        
        window.location.href = "loser.html"; 
    }
}

function ujjatek() {
    currentQuestionIndex = 0;
    lives = maxLives;
    usedFelezes = false;
    usedTipp = false;
    usedTelefon = false;
    usedExtraLife = false;
    updateLives();
    startGame();
}


window.onload = function () {
    updateLives();
    updateLifelineButtons(); 
    startGame(); 
};
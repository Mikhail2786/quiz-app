// declaring global variables by targeting sections and buttons
const HOME = document.getElementById("home");
const QUIZ = document.getElementById("quiz");
const RESULTS = document.getElementById("resultsBoard");
const BTN_CHOICES = document.querySelectorAll("button.choices")
const PROGRESS = document.getElementById("progress")
const PLAY_BTN = document.querySelector(".play-btn");
const NEXT_BTN = document.querySelector(".next-btn");
const HOME_BTN = document.querySelector(".home-btn");

const QUESTION_BOARD = document.getElementById("question");
const USER_ANSWER = document.querySelectorAll(".answer");
let currentUserAnswer = null;
let currentCorrectAnswer = null;

let gameState = {
  score: 0,
  questionCounter: 1
};

let selectedQuestions = [];
const ALPHABET = ["A", "B", "C", "D"];

//===================================Questions data bank================================================
//quiz questions, choice of answers and correct answer in an array of objects
const questions = [
  {
    question: "In what year did Wu-Tang release their debut album 'Enter the Wu-Tang (36 Chambers)'?",
    choices:[1991, 1993, 1997, 1995],
    answer: 1
  },

  {
    question: "What was Mobb Deep's original name?", 
    choices: ["The Pharcyde", "Infamous Mobb", "The Warlox", "Poetical Prophets"],
    answer: 3
  },

  {
    question: "Ante Up remix was a hit song released in 2000 featuring Busta Rhymes and Remy Martin, but who are the duo who released the song?", 
    choices: ["C-N-N", "Mobb Deep", "M.O.P", "Method Man & Re]dman"],
    answer: 2
  },

  {
    question: "Lauryn Hill is an amazing singer and rapper, but which group did she start her career with?", 
    choices: ["Fugees", "De La Soul", "The Firm", "The Diplomats"], 
    answer: 0
  },

  {
    question: "The Notorious B.I.G discovered one of the greatest female rappers to ever grace a mic, but what is her name?", 
    choices: ["Foxy Brown", "Eve", "Lil Kim", "Amil"],      
    answer: 2
  },

  {
    question: "Jay-Z, Dame Dash and one other founded Roc-A-Fella Records, who is the third founder?", 
    choices: ["P Diddy", "Irv Gotti", "Kareem 'Biggs' Burke", "Top Dawg"],    
    answer: 2
  },

  {
    question: "What is the name of Nipsey Hussle's first mixtape?", 
    choices: ["The Marathon Continues", "Slauson Boys 2", "Mailbox Money", "Bullets Ain't Got No Name"],
    answer: 3
  },

  {
    question: "What is the Name of of J Coles second album?",
    choices: ["Cole World: The Sideline Story", "Forest Hills Drive", "Friday Night lights", "Born Sinner,"],
    answer: 3
  },

  {
    question: "What is the name of the sub-genre made famous by Dr Dre & Snoop Dogg?", 
    choices: ["C-Funk","G-Funk","B-Funk", "P-Funk"],
    answer: 1
  },

  {
    question: "Where drill music originate from?", 
    choices: ["Ney York", "London", "Paris", "Chicago"],
    answer: 3
  }
];

const MAX_QUESTION = questions.length;
console.log(`${gameState.questionCounter} of ${MAX_QUESTION}`);

const USER_NAME_INPUT = document.getElementById("username");
const REGEX = /^[a-z\d]{3,20}$/i;
PLAY_BTN.disabled = true;

// Validates the username by testing it against the regex pattern
const userNameValidation = (value) => {
  const TEST = REGEX.test(value);
  console.log(value, TEST)
  if (TEST) {
    USER_NAME_INPUT.style.border = "2px solid green"; 
    PLAY_BTN.disabled = false;    
  }
  else if (!TEST) {
    USER_NAME_INPUT.style.border = "2px solid red";
    PLAY_BTN.disabled = true;
    
  }
}

USER_NAME_INPUT.addEventListener("input", (e) => {
  userNameValidation(e.target.value)
})

// When called hides the quiz and results section and shows the home section in the browser.
const startGame = () => {
  HOME.classList.remove("hidden");
  QUIZ.classList.add("hidden");
  RESULTS.classList.add("hidden");
}

//creates random index between 0 and the length of any array passed into it
const getRandomIndex = arr => Math.floor(Math.random() * arr.length);

//uses getRandomIndex to generate select a random object from and array. Also checks to see if the random object has been selected, if not, pushes the question to the empty selectedQuestions array and if selected, loops through its own function with a recursion by calling itself until it finds a question that has not already been pushed to the selectedQuestions array.
const getRandomObject = (arr) => {
  const RANDOM = getRandomIndex(arr);
  if (selectedQuestions.includes(RANDOM)) {
    getRandomObject(arr);
  }
  selectedQuestions.push(RANDOM);
  return arr[RANDOM];
}

//renders the selected array and questions in the correct section of the quiz board.
const randomGenerator = () => {
  const DATA = getRandomObject(questions);
  PROGRESS.textContent = `Question ${gameState.questionCounter} of ${MAX_QUESTION}`
  QUESTION_BOARD.textContent = `Q${gameState.questionCounter}. ${DATA.question}`;
  currentCorrectAnswer = DATA.answer;
  USER_ANSWER.forEach((answer, index) => {
    answer.innerHTML = `${ALPHABET[index]}. ${DATA.choices[index]}`;
  });

  currentUserAnswer = null;
  clearAll()

  gameState.questionCounter++
  NEXT_BTN.disabled = true;

  setDisabledStateForQuizAnswers(false);
  console.log(gameState.questionCounter);
}

//checks to see if the answer selected is correct and renders the colour green or red
const onAnswerSelected = (e, selectedIndex) => {
  currentUserAnswer = selectedIndex ;
  const isCorrect = currentUserAnswer === currentCorrectAnswer;
  if (isCorrect) {
    console.log("correct")
    e.currentTarget.classList.toggle('correct');
    gameState.score++;
  } else {
    e.currentTarget.classList.toggle('wrong');
  }

  NEXT_BTN.disabled = false;
  setDisabledStateForQuizAnswers(true);
}

//once one of the four choices has been selected, setDisabledStateForQuizAnswers function loops through all buttons to disables all the remaining choices choices.
const setDisabledStateForQuizAnswers = (disabled) => {
  for (let index = 0; index < BTN_CHOICES.length; index++) {
    const btnChoice = BTN_CHOICES[index];
    btnChoice.disabled = disabled;
  }
}

//button choices = [element, element, element, element,...]
for (let index = 0; index < BTN_CHOICES.length; index++) {
  const btnChoice = BTN_CHOICES[index];
  btnChoice.onclick = (e) => onAnswerSelected(e, index)
}


//removes the wrong or correct class
const resetAnswersOnBtn = (btn) => {
  btn.classList.remove("correct")
  btn.classList.remove("wrong")
}

//loops through the the buttons which then calls the resetAnswersOnBtn function to then remove the wrong or correct class when the user advances to the next question
const clearAll = () => {  
  for (let index = 0; index < BTN_CHOICES.length; index++) {
    const btnChoice = BTN_CHOICES[index];
    resetAnswersOnBtn(btnChoice)
  }
}

// create function that checks if a question has been answered before moving to the next question
// When called hides the home and results section and shows the quiz section in the browser.
const playQuiz = () => {
  HOME.classList.add("hidden");
  QUIZ.classList.remove("hidden");
  RESULTS.classList.add("hidden");
  // validateUsername();
  randomGenerator();  
}

// When called hides the home and quiz section and shows the result section in the browser.
const getResults = () => {
  HOME.classList.add("hidden")
  QUIZ.classList.add("hidden")
  RESULTS.classList.remove("hidden")
}

// This function runs an if statement to determine which of the three functions should be called based on what button is clicked, 
const displaySection = (btnType) => {
  if (btnType === "play") {
    playQuiz()
    console.log("show quiz")
  } else if (btnType === "next") {
    getResults()
    console.log("next")
  } else {
    console.log("result")
  }
}

// Event listeners that calls the respected functions when triggered. 
PLAY_BTN.addEventListener("click", () => displaySection("play"));

NEXT_BTN.addEventListener("click", () => randomGenerator);
NEXT_BTN.addEventListener("click", () => displaySection("next"));

HOME_BTN.addEventListener("click", () => displaySection("result"));


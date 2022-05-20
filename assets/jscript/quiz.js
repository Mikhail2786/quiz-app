// declaring global variables by targeting sections and buttons
const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const results = document.getElementById("resultsBoard");
const btnChoices = document.querySelectorAll("button.choices")
const progress = document.getElementById("progress")
const playBtn = document.querySelector(".play-btn");
const nextBtn = document.querySelector(".next-btn");
const homeBtn = document.querySelector(".home-btn");

const questionBoard = document.getElementById("question");
const userAnswer = document.querySelectorAll(".answer");
let currentUserAnswer = null;
let currentCorrectAnswer = null;

let gameState = {
  score: 0,
  questionCounter: 1
};

let selectedQuestions = [];
const alphabet = ["A", "B", "C", "D"];

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
    choices: ["Cole World: The Sideline Story", "Forest Hills Drive", "Friday Night lights", "Born Sinner"],
    answer: 3
  },

  {
    question: "What is the name of the sub-genre made famous by Dr Dre & Snoop Dogg?", 
    choices: ["C-Funk","G-Funk","B-Funk", "P-Funk"],
    answer: 1
  },

  {
    question: "Where drill music originate from?", 
    choices: ["New York", "London", "Paris", "Chicago"],
    answer: 3
  },
  {
    question: "What is the name of the collective Future started with?", 
    choices: ["Native Tongue’s", "The Dungeon Family", "Rich Gang", "Digital Underground"],
    answer: 1
  },
  {
    question: "What is Nipsey Hussle’s slogan?", 
    choices: ["The marathon keeps going", "The marathon Doesn’t stops", "The marathon continues", "The marathon forever"],
    answer: 2
  },
  {
    question: "Hip Hop’s founding father is Dj Kool Hurc, but which country was he born?", 
    choices: ["The United States Of America", "England", "Nigeria", "Jamaica"],
    answer: 3
  },
  {
    question: "Giggs undoubtedly made the biggest uk hip hop song with “Talking the hardest”, but who made the original song?", 
    choices: ["Stat Quo", "Bank Roll Fresh", "Rich Boy", "Shawty Low"],
    answer: 0
  },
  {
    question: "What is the name of UK rapper Dave’s debut album?", 
    choices: ["Psychodrama", "We’re All Alone In This Together", "Survival", "Game Over "],
    answer: 0
  }
];

const maxQuestion = questions.length;
console.log(`${gameState.questionCounter} of ${maxQuestion}`);

const userNameInput = document.getElementById("username");
const regex = /^[a-z\d]{3,20}$/i;
playBtn.disabled = true;

// Validates the username by testing it against the regex pattern
const userNameValidation = (value) => {
  const test = regex.test(value);
  console.log(value, test)
  if (test) {
    userNameInput.style.border = "2px solid green"; 
    playBtn.disabled = false;    
  }
  else if (!test) {
    userNameInput.style.border = "2px solid red";
    playBtn.disabled = true;
    
  }
}

userNameInput.addEventListener("input", (e) => {
  userNameValidation(e.target.value)
})

// When called hides the quiz and results section and shows the home section in the browser.
const startGame = () => {
  home.classList.remove("hidden");
  quiz.classList.add("hidden");
  results.classList.add("hidden");
}

//creates random index between 0 and the length of any array passed into it
const getRandomIndex = arr => Math.floor(Math.random() * arr.length);

//uses getRandomIndex to generate select a random object from and array. Also checks to see if the random object has been selected, if not, pushes the question to the empty selectedQuestions array and if selected, loops through its own function with a recursion by calling itself until it finds a question that has not already been pushed to the selectedQuestions array.
const getRandomObject = (arr) => {
  const random = getRandomIndex(arr);
  if (selectedQuestions.includes(random)) {
    getRandomObject(arr);
  }
  selectedQuestions.push(random);
  return arr[random];
}

//renders the selected array and questions in the correct section of the quiz board.
const randomGenerator = () => {
  const data = getRandomObject(questions);
  progress.textContent = `Question ${gameState.questionCounter} of ${maxQuestion}`
  questionBoard.textContent = `Q${gameState.questionCounter}. ${data.question}`;
  currentCorrectAnswer = data.answer;
  userAnswer.forEach((answer, index) => {
    answer.innerHTML = `${alphabet[index]}. ${data.choices[index]}`;
  });

  currentUserAnswer = null;
  clearAll()

  gameState.questionCounter++
  nextBtn.disabled = true;

  setDisabledStateForQuizAnswers(false);
  // console.log(gameState.questionCounter);
}

//checks to see if the answer selected is correct and renders the colour green or red
const onAnswerSelected = (e, selectedIndex) => {
  currentUserAnswer = selectedIndex ;
  const isCorrect = currentUserAnswer === currentCorrectAnswer;
  if (isCorrect) {
    console.log("correct")
    e.currentTarget.classList.toggle('correct');
    gameState.score++;
    console.log(gameState.score)
  } else {
    e.currentTarget.classList.toggle('wrong');
  }

  nextBtn.disabled = false;
  setDisabledStateForQuizAnswers(true);
}

//once one of the four choices has been selected, setDisabledStateForQuizAnswers function loops through all buttons to disables all the remaining choices choices.
const setDisabledStateForQuizAnswers = (disabled) => {
  for (let index = 0; index < btnChoices.length; index++) {
    const btnChoice = btnChoices[index];
    btnChoice.disabled = disabled;
  }
}

//button choices = [element, element, element, element,...]
for (let index = 0; index < btnChoices.length; index++) {
  const btnChoice = btnChoices[index];
  btnChoice.onclick = (e) => onAnswerSelected(e, index)
}


//removes the wrong or correct class
const resetAnswersOnBtn = (btn) => {
  btn.classList.remove("correct")
  btn.classList.remove("wrong")
}

//loops through the the buttons which then calls the resetAnswersOnBtn function to then remove the wrong or correct class when the user advances to the next question
const clearAll = () => {  
  for (let index = 0; index < btnChoices.length; index++) {
    const btnChoice = btnChoices[index];
    resetAnswersOnBtn(btnChoice)
  }
}

// create function that checks if a question has been answered before moving to the next question
// When called hides the home and  section and shows the quiz section in the browser.
const playQuiz = () => {
  home.classList.add("hidden");
  quiz.classList.remove("hidden");
  results.classList.add("hidden");
  randomGenerator();  
}

// When called hides the home and quiz section and shows the result section in the browser.
const getResults = () => {
  home.classList.add("hidden")
  quiz.classList.add("hidden")
  results.classList.remove("hidden")
}


// This function runs an if statement to determine which of the three functions should be called based on what button is clicked, 
const displaySection = (btnType) => {
  if (btnType === "play") {
    playQuiz()
    console.log("show quiz")
  } else if (btnType === "next") {
    getRandomObject()
    console.log("next")
  } else if (btnType === "home"){
    startGame()
    console.log("home")
  }
}

// Event listeners that calls the respected functions when triggered. 
playBtn.addEventListener("click", () => displaySection("play"));

// nextBtn.addEventListener("click", () => displaySection("next"));

nextBtn.addEventListener("click", () => randomGenerator("next"));

homeBtn.addEventListener("click", () => displaySection("home"));

// console.log(randomG)
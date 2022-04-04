// declaring global variables by targeting sections and button
const userName = document.getElementById("username")
const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const results = document.getElementById("resultsBoard");
const playBtn = document.querySelector(".play-btn");
const quizBtn = document.querySelector(".next-btn");
const homeBtn = document.querySelectorAll(".home-btn");

const questionBoard = document.getElementById("question");
const usersAnswer = document.querySelectorAll(".answer");

let selectedQuestions = [];

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

// When called hides the quiz and results section and shows the home section in the browser.
const startGame = () => {
  home.classList.remove('hidden')
  quiz.classList.add('hidden')
  results.classList.add('hidden')

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
  return arr[random]
};
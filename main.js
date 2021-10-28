console.log("Hi there!");
let darkMode = document.body.style.background
//dark/light mode
function toggleFunction(){
  let element = document.body;
  element.classList.toggle("dark-mode"); // toggle används för att multiple 'clicka' typ som hide and show
}

//2. Function to refresh web page ///////////////////////////////////////////////////////////////
function refreshFunction(){
  if(confirm("Are ypu sure, you want to restart Quiz?")){
    location.reload();
  }
}

let quizQuestions = [
  {
    question: "How many times does the average person laughs in a day?",
    answer: ["10 times a day", "13 times a day", "23 times a day"],
    correctAnswer: 1 
  },
  {
    question: "In Georgia (the state), it's illegal to eat that with a fork?",
    answer: ["Fried chicken", "Fried beef", "French fries"],
    correctAnswer: 0
  },
  {
    question: "From witch country does Frech fries originate comes from?",
    answer: ["France", "Italy", "Belgium"],
    correctAnswer: 2 
  },
  {
    question: "Whitch European country eats the most chocolate per capita?",
    answer: ["Switzerland", "Italy", "Sweden"],
    correctAnswer: 0
  },
  {
    question: "Whitch sea creature has three hearts?",
    answer: ["Feather star", "Seahorses", "Octopuses"],
    correctAnswer: 2
  },
  {
    question: "Which world city has the slogan: 'What Happens Here, Stays in Here!'.",
    answer: ["Los Angeles", "Las Vegas", "Los Santos"],
    correctAnswer: 1 
  },
  {
    question: "'www' stands for?",
    answer: ["Worls Web Wide", "World Wide Web", "I don't know"],
    correctAnswer: 1
  },
  {
    question: "The geometric shape that in generally used for stop signs?",
    answer: ["Circle", "Triangle", "Octagon"],
    correctAnswer: 2 
  },
  {
    question: "Is it true that 12 languages are written from right to left?",
    answer: ["True", "False", "Maybe"],
    correctAnswer: 0 
  },
  {
    question: "Which two of these things all the people do?",
    answer: ["Eats", "Sleeps", "Runs"],
    correctAnswer: 0 
  }
];

function init(){
  const quizElement = document.getElementById("quiz");
  
  //loop through the array of questions

  //for each question make some html?
  let quizStr = "";

  quizQuestions.forEach( function(q, qIndex) {
    let answerStr = "";
    q.answer.forEach(function(svar, aIndex) {
      answerStr += `
      <li>
        <label>
            <input type = "radio" name="q-${qIndex}">
            ${svar}
        </label>
      </li>
      `
    })
      //console.log(q.question); //skrivs ut alla frågor i consolen
      //console.log(q.correctAnswer); //shows correct answer place in array i consolen
      quizStr += ` 
      <form>
        <h1>${q.question}</h1>
        <ul>
            ${answerStr}
        </ul>
      </form>
      `
    
     /*
  //let formElement = document.getElementById("myForm");
  let h2 = document.createElement("h2");
  h2.innerHTML = q.question;
  quizElement.appendChild(h2);
  let ul = document.createElement("ul");
  ul.innerHTML = quizQuestions.answerStr;
  //quizStr.appendChild(formElement);
    */


  })

  quizElement.innerHTML = quizStr;
  //quizElement.appendChild(h2);
  //quizElement.innerHTML = h2;
  
  //form
  //    h1
  //    div.alert
  //    ul
  //      li
  //      ....
  //    submit button
}

init() //activate add run it

  


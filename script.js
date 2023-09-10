"use strict";
const frontendMCQQuestions = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Transfer Markup Language",
    b: "Hyper Text Makeup Language",
    c: "Hyperlink and Text Markup Language",
    d: "Hyper Text Markup Language",
    answer: "d",
  },
  {
    question:
      "Which of the following is a CSS pseudo-class used to select elements when they are in a certain state?",
    a: ":hover",
    b: ":active",
    c: ":selected",
    d: ":focus",
    answer: "a",
  },
  {
    question: "What is the purpose of JavaScript?",
    a: "To style web pages",
    b: "To add interactivity to web pages",
    c: "To create web page layouts",
    d: "To define web page structure",
    answer: "b",
  },
  {
    question: "Which HTML tag is used to create an unordered list?",
    a: "<ul>",
    b: "<ol>",
    c: "<li>",
    d: "<ul>",
    answer: "a",
  },
  {
    question: "What does CSS stand for?",
    a: "Cascading Style Sheet",
    b: "Computer Style Sheet",
    c: "Colorful Style Sheet",
    d: "Creative Style Sheet",
    answer: "a",
  },
  {
    question:
      "Which HTML tag is used to embed external content, such as a YouTube video or Google Maps?",
    a: "<embed>",
    b: "<iframe>",
    c: "<object>",
    d: "<code>",
    answer: "b",
  },
  {
    question: "What does API stand for?",
    a: "Application Programming Interface",
    b: "Advanced Program Integration",
    c: "Automated Programming Interface",
    d: "Application Program Integration",
    answer: "a",
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    a: "String",
    b: "Boolean",
    c: "Decimal",
    d: "Object",
    answer: "c",
  },
  {
    question:
      "What is the correct way to comment out multiple lines of code in JavaScript?",
    a: "// This is a comment",
    b: "/* This is a comment */",
    c: "<!-- This is a comment -->",
    d: "' This is a comment",
    answer: "b",
  },
];

const reset = () => {
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
};
let Question = document.getElementById("Question");

let index = 0;
let right = 0;
let wrong = 0;
let total = frontendMCQQuestions.length;
const submitBtn = document.querySelector(".btn");
const options = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index == total) {
    return endQuiz();
  }
  reset();
  const data = frontendMCQQuestions[index];
  Question.innerHTML = `${index + 1}) ${data.question}`;
  options[0].nextElementSibling.textContent = data.a;
  options[1].nextElementSibling.textContent = data.b;
  options[2].nextElementSibling.textContent = data.c;
  options[3].nextElementSibling.textContent = data.d;
  console.log(Question);
};

const submitAns = () => {
  let answer;
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      answer = options[i].value;
    }
  }
  return answer;
};

submitBtn.addEventListener("click", () => {
  const ans = submitAns();
  if (ans === frontendMCQQuestions[index].answer) {
    console.log("Good");
    right++;
  } else {
    console.log("Bad");
    wrong++;
  }
  index++;
  loadQuestion();
});

const endQuiz = () => {
  document.getElementById(
    "main-box"
  ).innerHTML = `<h3>Thanks for Playing the Quiz</h3>
                 <h2>${right} out of ${total} are correct.`;
  document.getElementById("main-box").style.backgroundColor = "#2ecc71";
};

loadQuestion();

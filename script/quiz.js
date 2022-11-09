const quizDB = [
    {
        question: "1. What is HTML?",
        a: "HTML describes the structure of a webpage",
        b: "HTML is the standard markup language mainly used to create web pages",
        c: "HTML consists of a set of elements that helps the browser how to view the content",
        d: "All of the mentioned",
        ans: "ans4"
    },

    {
        question: "2.Who is the father of HTML?",
        a: "Rasmus Lerdorf",
        b: "Tim Berners-Lee",
        c: "Brendan Eich",
        d: "Sergey Brin",
        ans: "ans2"
    },

    {
        question: "3. HTML stands for __________",
        a: "HyperText Markup Language",
        b: "HyperText Machine Language",
        c: "HyperText Marking Language",
        d: "HighText Marking Language",
        ans: "ans2"
    },

    {
        question: "4. What is the correct syntax of doctype in HTML5?",
        a: "</doctype html>",
        b: "<doctype html>",
        c: "<doctype html!>",
        d: "<!doctype html>",
        ans: "ans4"
    },

    {
        question: "5. Which of the following tag is used for inserting the largest heading in HTML?",
        a: "head",
        b: "<h1>",
        c: "<h6>",
        d: "heading",
        ans: "ans2"
    },

    {
        question: "6. In which part of the HTML metadata is contained?",
        a: "head tag",
        b: "title tag",
        c: "html tag",
        d: "body tag",
        ans: "ans1"
    },

    {
        question: "7. Which element is used to get highlighted text in HTML5?",
        a: "<u>",
        b: "<mark>",
        c: "<highlight>",
        d: "<b>",
        ans: "ans2"
    },

    {
        question: "8. Which of the following is not a HTML5 tag?",
        a: "<track>",
        b: "<video>",
        c: "<slider>",
        d: "<source>",
        ans: "ans3"
    },

    {
        question: "9. How do we write comments in HTML?",
        a: "</…….>",
        b: "<!……>",
        c: "</……/>",
        d: "<…….!>",
        ans: "ans2"
    },

    {
        question: "10. Which element is used for or styling HTML5 layout?",
        a: "CSS",
        b: " jQuery",
        c: "JavaScript",
        d: "PHP",
        ans: "ans1"
    },

];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = quizDB[questionCount].question;

    option1.innerText = questionList.a
    option2.innerText = questionList.b
    option3.innerText = questionList.c
    option4.innerText = questionList.d
}

loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answer.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

    }

});
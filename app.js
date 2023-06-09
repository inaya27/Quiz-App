var questions = [
    {
        question: 'HTML stands for ___________________________',
        options: ["HTML", "Hypertext markup language", "javascrit", "ABC"],
        correctAnswer: "Hypertext markup language",
    },

    

    {
        question: 'SQL stands for _________________________',
        options: ["Structured Query Language", "Random Access Memory", "Central Superior Service", "ABC"],
        correctAnswer: "Structured Query Language",
    },

    {
        question: 'How many tags are in a regular element ______',
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
    },

    {
        question: 'CSS stands for ______________________',
        options: ["Cascanding Style Sheet", "CSS", "Abc", "JavaScript"],
        correctAnswer: "Cascanding Style Sheet",
    },

    {
        question: '<body> is this an opening tag or a closing tag ______________________',
        options: ["No", "Yes",],
        correctAnswer: "Yes",
    },

    {
        question: 'How do you declare a JaacaScript variable _____________',
        options: ["variable carname", "var carName", "v carName", "none of these"],
        correctAnswer: "var carName",
    },

    {
        question: 'How to you select an element based on its css class __________________',
        options: ["getElementById", "getelementByClass", "querySelector", "getelementByCss"],
        correctAnswer: "querySelector",
    },

    {
        question: 'How to writ an IF statement in JavaScript?',
        options: ["if(i==5)", "if i==5 then", "if i= 5", "if i = 5 then"],
        correctAnswer: "if(i==5)",
    },

];





var displayQuestion = document.getElementById("displayQuestion");
var currentQuestionNumber = document.getElementById("currentQuestionNumber");
var totalQuestionNumber = document.getElementById("totalQuestionNumber");
var optionParent= document.getElementById("optionParent");


var indexVal = 0;
var mark = 0;


function renderQuestion(){
var que = questions[indexVal];
displayQuestion.innerHTML = que.question;
totalQuestionNumber.innerHTML = questions.length;
currentQuestionNumber.innerHTML = indexVal + 1;


optionParent.innerHTML="";
for ( var i = 0; i < que.options.length; i++){
    optionParent.innerHTML += `<div class="col-md-6">
    <button onclick="checAns('${que.correctAnswer}' , '${que.options[i]}')" class="w-100">
    ${que.options[i]}
    </button>
</div>`
}
}

function nextQue(){
    indexVal++;
    renderQuestion();
}

function checAns(a,b){
    if (a==b){
        marks = mark + 1;
        console.log(a,b);
        console.log(marks);
        nextQue();
    }
}

renderQuestion();



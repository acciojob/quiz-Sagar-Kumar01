//your JS code here. If required.
let questionsobj = [{
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }];

let current = 0;
let score = 0;

let questionh = document.getElementById("question");
let submit = document.getElementById("submit");

let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");

let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");

function setter(indx) {
questionh.textContent = questionsobj[indx].question;
	
a_text.textContent = questionsobj[indx].a;
b_text.textContent = questionsobj[indx].b;
c_text.textContent = questionsobj[indx].c;
d_text.textContent = questionsobj[indx].d;

a.value = questionsobj[indx].a;
b.value = questionsobj[indx].b;
c.value = questionsobj[indx].c;
d.value = questionsobj[indx].d;
	
}
if(current == 0){
	setter(current)
}



const qData = [
    {
        que: "What Year was Javascript launched?",
        a: 1996,
        b: 1995,
        c: 1994,
        d: "none of the above",
        correct: "b",
    },
    {
        que: "Your favorite food ?",
        a: "Idly",
        b: "Dosa",
        c: "Vada",
        d: "none of the above",
        correct: "a",
    },
    {
        que: "What Year was React launched?",
        a: 2011,
        b: 2012,
        c: 2013,
        d: "none of the above",
        correct: "c",
    },
    {
        que: "CSS Stands for?",
        a: "Cascading Style Sheets",
        b: "Cascading symbol Sheets",
        c: "common Style Sheets",
        d: "none of the above",
        correct: "a",
    },
    {
        que: "Is React a framework or a library?",
        a: "library",
        b: "Framework",
        c: "both",
        d: "none of the above",
        correct: "a",
    },
];

const jsqz = document.getElementById("jsqz");
const ansEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("quesAns");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelectAnswers();

    const crntQData = qData[currentQuiz];

    questionEl.innerText = crntQData.que;
    a_text.innerText = crntQData.a;
    b_text.innerText = crntQData.b;
    c_text.innerText = crntQData.c;
    d_text.innerText = crntQData.d;
}

function deSelectAnswers() {
    ansEls.forEach((ansEl) => (ansEl.checked = false));
}

function getSelected() {
    let answer;

    ansEls.forEach((ansEl) => {
        if (ansEl.checked) {
            answer = ansEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    console.log(answer);

    if (answer) {
        if (answer === qData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < qData.length) {
            loadQuiz();
        } else {
            jsqz.innerHTML = `<h2> You Answered ${score}/${qData.length} questions correctly</h2>
        
        <button onclick="location.reload()">Reload</button>
        `;
        }
    }
});

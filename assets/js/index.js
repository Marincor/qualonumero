import getNumber from "./service/api.js";

let number = null;

await getNumber().then(data => number = data.value)

const form = document.querySelector(".gameForm");

form.addEventListener('submit', (e) =>{

e.preventDefault();
const numberTyped = e.target[0].value;
    console.log(numberTyped)
})

// display //

const firstDigit = document.getElementById("first");

const secondDigit = document.getElementById("second");
secondDigit.classList.add('hidden')
const thirdDigit = document.getElementById("third");
thirdDigit.classList.add('hidden')


console.log(form)
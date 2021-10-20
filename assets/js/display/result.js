
import { winNumber } from "./digit.js";
// button and input guess //


const btnGuess = document.querySelector(".gameForm__button");
const inputGuess = document.querySelector(".gameForm__input");



function disableGuess() {
    btnGuess.classList.add("disable")
    inputGuess.classList.add("disable")

}


// button play again //

const btnAgain = document.querySelector(".boxForms__buttonAgain");

btnAgain.addEventListener("click", (e) =>{
e.preventDefault();
window.location.reload()

})

function showBtnAgain () {

    btnAgain.classList.remove("hiddenBtn");
}



// text result //
const resultText = document.querySelector(".boxDisplay__result");


export default function renderResultText(numberTyped, rightNumber) {
   
    // initial message without error //
  if (numberTyped === undefined) {
    resultText.textContent = "";
  }

    // initial message with error //

  if (numberTyped === undefined && rightNumber.Error !== undefined) {
    resultText.textContent = "Erro";
    resultText.classList.add("fail");
    showBtnAgain()
    disableGuess()
  }


  //  wrong guess to more //
  if (numberTyped > rightNumber) {
    resultText.classList.remove("fail");
    resultText.textContent = "É menor";
  }

   //  wrong guess to less //
  if (numberTyped < rightNumber) {
    resultText.classList.remove("fail");
    resultText.textContent = "É maior";
  }

   //  right guess  //
  if (numberTyped === rightNumber) {
    resultText.textContent = "Você acertou!!!";
    resultText.classList.add("congrats");
    showBtnAgain()
    disableGuess()
    winNumber("first")
    winNumber("second")
    winNumber("third")
  
  }
}



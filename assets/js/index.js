import getNumber from "./service/api.js";

let number = null;


/* dashs of svg led - 7 */

const dashA = document.getElementById("a") 
const dashB = document.getElementById("b") 
const dashC = document.getElementById("c") 
const dashD = document.getElementById("d") 
const dashE = document.getElementById("e") 
const dashF = document.getElementById("f") 
const dashG = document.getElementById("g") 


function resetClass () {

    dashA.classList.add('a');
    dashB.classList.add('b');
    dashC.classList.add('c');
    dashD.classList.add('d');
    dashE.classList.add('e');
    dashF.classList.add('f');
    dashG.classList.remove('g')
}


function removeClass(constLetter, className) {

 constLetter.classList.remove(className)


}

function addClass (constLetter, className) {

    constLetter.classList.add(className)
}
/* --- */ 

await getNumber().then(data => number = data.value)

const form = document.querySelector(".gameForm");

form.addEventListener('submit', (e) =>{

e.preventDefault();
const numberTyped = JSON.parse(e.target[0].value);


    console.log(numberTyped)


    if (numberTyped < 10) {

        switch(numberTyped) {

            case 1: resetClass();removeClass(dashA, "a"); removeClass(dashD, "d");removeClass(dashE, "e"); removeClass(dashF, "f"); 
            break;
            case 2 :resetClass(); removeClass(dashF, "f"); removeClass(dashC, "c"); addClass(dashG, "g");
            break;
            case 3 : resetClass();removeClass(dashF, "f");removeClass(dashE, "e");addClass(dashG, "g");
            break;
            case 4 : resetClass();removeClass(dashA, "a"); removeClass(dashE, "e"); removeClass(dashD, "d"); addClass(dashG, "g");
            break;
            case 5 : resetClass();removeClass(dashB, "b");removeClass(dashE, "e"); addClass(dashG, "g");
            break;
            case 6 : resetClass();removeClass(dashB, "b");addClass(dashG, "g");
            break;
            case 7 : resetClass();removeClass(dashF, "f");removeClass(dashE, "e");removeClass(dashD, "d");
            break;
            case 8 : resetClass();addClass(dashG, "g");
            break;
            case 9 : resetClass();removeClass(dashE, "e");removeClass(dashD, "d");addClass(dashG, "g");
            break;
            default: resetClass();
            break;
        }
    }

})

// display //

const firstDigit = document.getElementById("first");

const secondDigit = document.getElementById("second");
secondDigit.classList.add('hidden')
const thirdDigit = document.getElementById("third");
thirdDigit.classList.add('hidden')


console.log(number)
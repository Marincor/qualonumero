import {
  renderNumber,
  initialDisplay,
  renderDigit,
  hiddenDigit,
  errorNumbered,
} from "./display/digit.js";
import renderResultText from "./display/result.js";
import turnOffLoading from "./loading/setLoading.js";
import typeWriter from "./loading/type.js";
import getNumber from "./service/api.js";

/* -Api Req-- */

let number = null;
await getNumber().then((data) =>
  data.value ? (number = data.value) : (number = data)
);



    // initial loading of Page // 

    typeWriter()

    setTimeout(()=>{

      turnOffLoading()
      
    }, 4000)
    
/* -------------------- initial display --------------------------------------- */

      


        // if error requisition ocurred //
            const numberError = number.StatusCode;
            const firstNumberError = numberError? JSON.parse(
            JSON.stringify(number.StatusCode).substr(0, 1)
            ): false;
            const secondNumberError = numberError?  JSON.parse(
            JSON.stringify(number.StatusCode).substr(1, 1)
            ): false;
            const thirdNumberError = numberError? JSON.parse(
            JSON.stringify(number.StatusCode).substr(0, 1)
            ): false;

            // -- led display -- //
         
            // only one digit //

            function renderErrorNumber(){
                if (numberError < 10) {
                    hiddenDigit("second");
                    hiddenDigit("third");
                    renderNumber(firstNumberError, secondNumberError);
                    errorNumbered("first")
                    }
        
                    //  two digit //
                    else if (numberError > 9 && numberError < 100) {
                    hiddenDigit("third");
                    renderDigit("second");
                    renderNumber(firstNumberError, secondNumberError);
                    errorNumbered("first");
                    errorNumbered("second");
                   
                    }
                    //  three digit //
                    else {
                    renderDigit("second");
                    renderDigit("third");
                    renderNumber(firstNumberError, secondNumberError, thirdNumberError);
                    errorNumbered("first");
                    errorNumbered("second");
                    errorNumbered("third");
                    }

            }


            initialDisplay();
            renderResultText(undefined, number);
            if(numberError) {

                renderErrorNumber()
            }
         

            
/* form */

const form = document.querySelector(".gameForm");

// Guess //

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // typed number //
  const numberTyped = JSON.parse(e.target[0].value);
  const firstNumberTyped = JSON.parse(e.target[0].value.substr(0, 1));
  const secondNumberTyped =
    numberTyped > 9 ? JSON.parse(e.target[0].value.substr(1, 1)) : false;
  const thirdNumberTyped =
    numberTyped > 99 ? JSON.parse(e.target[0].value?.substr(2, 1)) : false;

  // text result //

 

  renderResultText(numberTyped, number);

  // -- led display -- //

  // only one digit //
  if (numberTyped < 10) {
    hiddenDigit("second");
    hiddenDigit("third");
    renderNumber(firstNumberTyped, secondNumberTyped);
    e.target[0].value = "";
  }

  //  two digit //
  else if (numberTyped > 9 && numberTyped < 100) {
    hiddenDigit("third");
    renderDigit("second");
    renderNumber(firstNumberTyped, secondNumberTyped);
    e.target[0].value = "";
  }
  //  three digit //
  else {
    renderDigit("second");
    renderDigit("third");
    renderNumber(firstNumberTyped, secondNumberTyped, thirdNumberTyped);
    e.target[0].value = "";
  }
});

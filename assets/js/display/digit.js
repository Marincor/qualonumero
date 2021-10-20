import { dashes } from "./dashes.js";

// display initial state//

const secondDigit = document.getElementById("second");
const thirdDigit = document.getElementById("third");

export function initialDisplay() {
  secondDigit.classList.add("hidden");

  thirdDigit.classList.add("hidden");
}

// turn on the digit //
export function renderDigit(digit) {
  switch (digit) {
    case "second":
      secondDigit.classList.remove("hidden");
      break;
    case "third":
      thirdDigit.classList.remove("hidden");
      break;
    default:
      false;
  }
}

// turn off the digit //
export function hiddenDigit(digit) {
  switch (digit) {
    case "second":
      secondDigit.classList.add("hidden");
      break;
    case "third":
      thirdDigit.classList.add("hidden");
      break;
    default:
      false;
  }
}

/* classes css */

function resetClass(digit) {
  if (digit === "first") {
    dashes.a.classList.add("a");
    dashes.b.classList.add("b");
    dashes.c.classList.add("c");
    dashes.d.classList.add("d");
    dashes.e.classList.add("e");
    dashes.f.classList.add("f");
    dashes.g.classList.remove("g");
  } else if (digit === "second") {
    dashes.a2.classList.add("a");
    dashes.b2.classList.add("b");
    dashes.c2.classList.add("c");
    dashes.d2.classList.add("d");
    dashes.e2.classList.add("e");
    dashes.f2.classList.add("f");
    dashes.g2.classList.remove("g");
  } else {
    dashes.a3.classList.add("a");
    dashes.b3.classList.add("b");
    dashes.c3.classList.add("c");
    dashes.d3.classList.add("d");
    dashes.e3.classList.add("e");
    dashes.f3.classList.add("f");
    dashes.g3.classList.remove("g");
  }
}

function removeClass(constLetter, className) {
  constLetter.classList.remove(className);
}

function addClass(constLetter, className) {
  constLetter.classList.add(className);
}



// error class included //

export function errorNumbered(digit) {
  if (digit === "first") {
    dashes.a.classList.add("error");
    dashes.b.classList.add("error");
    dashes.c.classList.add("error");
    dashes.d.classList.add("error");
    dashes.e.classList.add("error");
    dashes.f.classList.add("error");
    dashes.g.classList.add("error");
  } else if (digit === "second") {
    dashes.a2.classList.add("error");
    dashes.b2.classList.add("error");
    dashes.c2.classList.add("error");
    dashes.d2.classList.add("error");
    dashes.e2.classList.add("error");
    dashes.f2.classList.add("error");
    dashes.g2.classList.add("error");
  } else {
    dashes.a3.classList.add("error");
    dashes.b3.classList.add("error");
    dashes.c3.classList.add("error");
    dashes.d3.classList.add("error");
    dashes.e3.classList.add("error");
    dashes.f3.classList.add("error");
    dashes.g3.classList.add("error");
  }
}

// congratulation class included //

export function winNumber(digit) {
  if (digit === "first") {
    dashes.a.classList.add("right");
    dashes.b.classList.add("right");
    dashes.c.classList.add("right");
    dashes.d.classList.add("right");
    dashes.e.classList.add("right");
    dashes.f.classList.add("right");
    dashes.g.classList.add("right");
   
  } else if (digit === "second") {
    dashes.a2.classList.add("right");
    dashes.b2.classList.add("right");
    dashes.c2.classList.add("right");
    dashes.d2.classList.add("right");
    dashes.e2.classList.add("right");
    dashes.f2.classList.add("right");
    dashes.g2.classList.add("right");
  } else {
    dashes.a3.classList.add("right");
    dashes.b3.classList.add("right");
    dashes.c3.classList.add("right");
    dashes.d3.classList.add("right");
    dashes.e3.classList.add("right");
    dashes.f3.classList.add("right");
    dashes.g3.classList.add("right");
  }
}
/* class controller - to show de numberFormat */

function renderFirstDigit(firstNumberTyped) {
  switch (firstNumberTyped) {
    case 1:
      resetClass("first");
      removeClass(dashes.a, "a");
      removeClass(dashes.d, "d");
      removeClass(dashes.e, "e");
      removeClass(dashes.f, "f");
      break;
    case 2:
      resetClass("first");
      removeClass(dashes.f, "f");
      removeClass(dashes.c, "c");
      addClass(dashes.g, "g");
      break;
    case 3:
      resetClass("first");
      removeClass(dashes.f, "f");
      removeClass(dashes.e, "e");
      addClass(dashes.g, "g");
      break;
    case 4:
      resetClass("first");
      removeClass(dashes.a, "a");
      removeClass(dashes.e, "e");
      removeClass(dashes.d, "d");
      addClass(dashes.g, "g");
      break;
    case 5:
      resetClass("first");
      removeClass(dashes.b, "b");
      removeClass(dashes.e, "e");
      addClass(dashes.g, "g");
      break;
    case 6:
      resetClass("first");
      removeClass(dashes.b, "b");
      addClass(dashes.g, "g");
      break;
    case 7:
      resetClass("first");
      removeClass(dashes.f, "f");
      removeClass(dashes.e, "e");
      removeClass(dashes.d, "d");
      break;
    case 8:
      resetClass("first");
      addClass(dashes.g, "g");
      break;
    case 9:
      resetClass("first");
      removeClass(dashes.e, "e");
      removeClass(dashes.d, "d");
      addClass(dashes.g, "g");
      break;
    default:
      resetClass("first");
      break;
  }
}

function renderSecondDigit(secondNumberTyped) {
  switch (secondNumberTyped) {
    case 1:
      resetClass("second");
      removeClass(dashes.a2, "a");
      removeClass(dashes.d2, "d");
      removeClass(dashes.e2, "e");
      removeClass(dashes.f2, "f");
      break;
    case 2:
      resetClass("second");
      removeClass(dashes.f2, "f");
      removeClass(dashes.c2, "c");
      addClass(dashes.g2, "g");
      break;
    case 3:
      resetClass("second");
      removeClass(dashes.f2, "f");
      removeClass(dashes.e2, "e");
      addClass(dashes.g2, "g");
      break;
    case 4:
      resetClass("second");
      removeClass(dashes.a2, "a");
      removeClass(dashes.e2, "e");
      removeClass(dashes.d2, "d");
      addClass(dashes.g2, "g");
      break;
    case 5:
      resetClass("second");
      removeClass(dashes.b2, "b");
      removeClass(dashes.e2, "e");
      addClass(dashes.g2, "g");
      break;
    case 6:
      resetClass("second");
      removeClass(dashes.b2, "b");
      addClass(dashes.g2, "g");
      break;
    case 7:
      resetClass("second");
      removeClass(dashes.f2, "f");
      removeClass(dashes.e2, "e");
      removeClass(dashes.d2, "d");
      break;
    case 8:
      resetClass("second");
      addClass(dashes.g2, "g");
      break;
    case 9:
      resetClass("second");
      removeClass(dashes.e2, "e");
      removeClass(dashes.d2, "d");
      addClass(dashes.g2, "g");
      break;
    default:
      resetClass("second");
      break;
  }
}

function renderThirdDigit(thirdNumberTyped) {
  switch (thirdNumberTyped) {
    case 1:
      resetClass("third");
      removeClass(dashes.a3, "a");
      removeClass(dashes.d3, "d");
      removeClass(dashes.e3, "e");
      removeClass(dashes.f3, "f");
      break;
    case 2:
      resetClass("third");
      removeClass(dashes.f3, "f");
      removeClass(dashes.c3, "c");
      addClass(dashes.g3, "g");
      break;
    case 3:
      resetClass("third");
      removeClass(dashes.f3, "f");
      removeClass(dashes.e3, "e");
      addClass(dashes.g3, "g");
      break;
    case 4:
      resetClass("third");
      removeClass(dashes.a3, "a");
      removeClass(dashes.e3, "e");
      removeClass(dashes.d3, "d");
      addClass(dashes.g3, "g");
      break;
    case 5:
      resetClass("third");
      removeClass(dashes.b3, "b");
      removeClass(dashes.e3, "e");
      addClass(dashes.g3, "g");
      break;
    case 6:
      resetClass("third");
      removeClass(dashes.b3, "b");
      addClass(dashes.g3, "g");
      break;
    case 7:
      resetClass("third");
      removeClass(dashes.f3, "f");
      removeClass(dashes.e3, "e");
      removeClass(dashes.d3, "d");
      break;
    case 8:
      resetClass("third");
      addClass(dashes.g3, "g");
      break;
    case 9:
      resetClass("third");
      removeClass(dashes.e3, "e");
      removeClass(dashes.d3, "d");
      addClass(dashes.g3, "g");
      break;
    default:
      resetClass("third");
      break;
  }
}


export function renderNumber(
  firstNumberTyped,
  secondNumberTyped,
  thirdNumberTyped
) {
  renderFirstDigit(firstNumberTyped);

  if (secondNumberTyped && thirdNumberTyped === undefined) {
    return (
      renderFirstDigit(firstNumberTyped), renderSecondDigit(secondNumberTyped)
    );
  } else if (thirdNumberTyped !== undefined) {
    return (
      renderFirstDigit(firstNumberTyped),
      renderSecondDigit(secondNumberTyped),
      renderThirdDigit(thirdNumberTyped)
    );
  }
}

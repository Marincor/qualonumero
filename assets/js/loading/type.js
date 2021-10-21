// text loading typeWriting //


let i = 0;
let txt = 'Loading...';
let speed = 320;


export default function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".loading__text").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}







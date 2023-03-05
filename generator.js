const body = document.body;
const pallete = ("pallete");
const pallete2 = ("pallete2");
const pallete3 = ("pallete3");

//Random Color
function randomColor() {
  let randomize = Math.floor(Math.random() * 16777215).toString(16);
  let randomize2 = Math.floor(Math.random() * 16777215).toString(16);
  let randomize3 = Math.floor(Math.random() * 16777215).toString(16);
  pallete.innerHTML = `#${randomize}`;
  pallete2.innerHTML = `#${randomize}`;
  pallete3.innerHTML = `#${randomize}`;
  body.style.background = `linear-gradient(to right, #${randomize} 0%, #${randomize} 33%, #${randomize2} 33%, #${randomize2} 67%, #${randomize3} 67%, #${randomize3} 100%)`;
}

// Copy Color
const color = document.querySelectorAll(".color");
color.forEach((el) => {
  el.addEventListener("click", copyHex);
});
     
function selectArea() {
  let element = event.target;
  let range;
  if (document.selection) {
    range = document.body.creteTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    range = document.createRange();
    range.selectNode(element);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  }
}

function copyHex() {
  selectArea();
  alert(`Color code ${event.target.innerText} copied in clipboard`);
  document.execCommand("copy");
}
let fInput = document.getElementById("input1");
let sInput = document.getElementById("input2");
let showScreen = document.getElementById("show");

function countdown() {
  if (Number(fInput.value) < Number(sInput.value)) {
    showScreen.innerHTML = "Second Input is greater ";
  } else if (Number(fInput.value) == Number(sInput.value)) {
    showScreen.innerHTML = "Same inputs!";
  } else if (Number(fInput.value) > Number(sInput.value)) {
    let me = setInterval(() => {
      fInput.value--;

      showScreen.innerHTML = fInput.value;

      let count = fInput.value;
      if (count == sInput.value) {
        document.body.style.backgroundColor = "black";
        document.getElementById("h1").style.color = "white";
        clearInterval(me);
        setTimeout(() => {
          alert("Time up!");
        }, 1000);
      }
    }, 1000);
  }
}

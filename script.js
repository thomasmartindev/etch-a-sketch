const pad = document.getElementById("pad");
const colorPicker = document.getElementById("colorPicker");
const colorMode = document.getElementById("colorMode");
const rainbowMode = document.getElementById("rainbowMode");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
const slider = document.getElementById("slider");
const dimensions = document.getElementById("dimensions");
let n = slider.value;

window.addEventListener("load", activateColorMode);
window.addEventListener("load", updatePad);

colorMode.addEventListener("click", activateColorMode);
rainbowMode.addEventListener("click", activateRainbowMode);
eraser.addEventListener("click", activateEraser);

clear.addEventListener("click", clearPad);

slider.addEventListener("click", function(e) {
  if (n != e.target.value) {
    clearPad();
  }
});

slider.addEventListener("mousemove", function(e) {
  updateDimensions(e.target.value);
});

function activateColorMode() {
  colorMode.classList.add("selected");
  rainbowMode.classList.remove("selected");
  eraser.classList.remove("selected");
}

function activateRainbowMode() {
  rainbowMode.classList.add("selected");
  colorMode.classList.remove("selected");
  eraser.classList.remove("selected");
}

function activateEraser() {
  eraser.classList.add("selected");
  colorMode.classList.remove("selected");
  rainbowMode.classList.remove("selected");
}

function clearPad() {
  const divs = document.querySelectorAll(".pad > div");

  for (let i = 0; i < divs.length; i++) {
    pad.removeChild(divs[i]);
  }

  updatePad();
}

function updateDimensions(value) {
  dimensions.textContent = `${value} x ${value}`;
}

function updatePad() {
  n = slider.value;

  for (let i = 0; i < slider.value * slider.value; i++) {
    const div = document.createElement("div");
    div.style.cssText = `height: ${500 / slider.value}px; width: ${500 / slider.value}px;`;
    pad.appendChild(div);
  }

  const divs = document.querySelectorAll(".pad > div");

  divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      if (colorMode.getAttribute("class") === "selected") {
        div.style.backgroundColor = `${colorPicker.value}`;
      }
      else if (rainbowMode.getAttribute("class") === "selected") {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      }
      else {
        div.style.backgroundColor = "white";
      }
    });
  });
}
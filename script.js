const pad = document.getElementById("pad");
const colorMode = document.getElementById("colorMode");
const rainbowMode = document.getElementById("rainbowMode");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
const slider = document.getElementById("slider");
const dimensions = document.getElementById("dimensions");

for (let i = 0; i < slider.value * slider.value; i++) {
  const div = document.createElement("div");
  div.style.cssText = `height: ${500 / slider.value}px; width: ${500 / slider.value}px;`;
  pad.appendChild(div);
}

colorMode.addEventListener("click", activateColorMode);
rainbowMode.addEventListener("click", activateRainbowMode);
eraser.addEventListener("click", activateEraser);

clear.addEventListener("click", clearPad);

slider.addEventListener("click", function(e) {
  updateDimensions(e.target.value);
});

slider.addEventListener("mousemove", function(e) {
  updateDimensions(e.target.value);
});

activateColorMode();

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
}

function updateDimensions(value) {
  dimensions.textContent = `${value} x ${value}`;
}
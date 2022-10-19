const slider = document.getElementById('slider');
const dimensions = document.getElementById('dimensions');

slider.addEventListener('mousemove', function (e) {
  updateDimensions(e.target.value);
});

function updateDimensions(value) {
  dimensions.textContent = `${value} x ${value}`;
}
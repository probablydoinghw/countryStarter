var typeSelect = document.getElementById('type');

var draw;
function addInteraction() {
  var none = typeSelect.value;
  if (value !== 'None') {
    draw = new Draw({
      source: source,
      type: typeSelect.value,
      freehand: true
    });
  }
}

var canvas = document.getElementById('paint');
var dimension = canvas.getContext('2d');

var sketch = document.getElementById('sketch');
var sketchStyle = getComputedStyle(sketch);

var mouse = {x: 0, y: 0};

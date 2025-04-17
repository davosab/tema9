let canvasW;
let canvasH = 600;

const colourfulBoxesCols = 3;
const colourfulBoxesRows = 3;

const matrix1 = [];
const matrix2 = [];
const matrix3 = [];

function setup() {
  canvasW = windowWidth;
  createCanvas(canvasW, canvasH);
  createBoxes(colourfulBoxesCols, colourfulBoxesRows, matrix1, 25, 25);
  createBoxes(colourfulBoxesCols, colourfulBoxesRows, matrix2, 236, 25);
  createBoxes(colourfulBoxesCols, colourfulBoxesRows, matrix3, 447, 25);
}


function draw() {
  background("#bbb");

  for (let i = 0; i < matrix1.length; i++) {
    drawBox(matrix1[i]);
  }
  
  fill(0);
  textSize(60);
  text("+", 200, 100);

  for (let i = 0; i < matrix2.length; i++) {
    drawBox(matrix2[i]);
  }
  
  fill(0);
  textSize(60);
  text("=", 412, 100);

  for (let i = 0; i < matrix3.length; i++) {
    matrix3[i].n = matrix1[i].n + matrix2[i].n;
    drawBox(matrix3[i]);
  }

}

/*** Blocks ******************************************************************/
function drawBox(obj) {
  fill(obj.colour.r, obj.colour.g, obj.colour.b);
  square(obj.x, obj.y, obj.s);
  fill(0);
  textStyle(BOLD);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(obj.n, obj.x + obj.s / 2, obj.y + obj.s / 2);
}

function createBoxes(cols, rows, matrix, boxX, boxY) {
  let x = boxX;
  let y = boxY;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const box = {x: x, y: y, s: 40, colour: {r: Math.floor(Math.random() * 255), g: Math.floor(Math.random() * 255), b: Math.floor(Math.random() * 255)}, n: Math.floor(Math.random() * 20)};
      matrix.push(box);
      drawBox(box);
      x += 50;
    }
    x = boxX;
    y += 50;
  }
}


function windowResized() {
  canvasW = windowWidth;
  resizeCanvas(windowWidth, canvasH);
}
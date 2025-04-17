let canvasW;
let canvasH = 600;

const matrix1Cols = 3;
const matrix1Rows = 2;
const matrix2Cols = 2;
const matrix2Rows = 3;

const matrix1 = [];
const matrix2 = [];
const matrix3 = [];

function setup() {
  canvasW = windowWidth;
  createCanvas(canvasW, canvasH);
  createBoxes(matrix1Cols, matrix1Rows, matrix1, 25, 50);
  createBoxes(matrix2Cols, matrix2Rows, matrix2, 236, 25);
  createBoxes(matrix2Cols, matrix1Rows, matrix3, 397, 50);
}


function draw() {
  background("#bbb");

  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1Cols; j++) {
      drawBox(matrix1[i][j]);
    }
  }
  
  fill(0);
  textSize(60);
  text("x", 200, 95);

  for (let i = 0; i < matrix2.length; i++) {
    for (let j = 0; j < matrix2Cols; j++) {
      drawBox(matrix2[i][j]);
    }
  }
  
  fill(0);
  textSize(60);
  text("=", 362, 100);

  for (let i = 0; i < matrix1.length; i++) {
    totalMatrix(matrix1, matrix2, matrix3);
    for (let j = 0; j < matrix2Cols; j++) {
      drawBox(matrix3[i][j]);
    }
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
    let row = [];
    for (let j = 0; j < cols; j++) {
      const box = {x: x, y: y, s: 40, colour: {r: Math.floor(Math.random() * 255), g: Math.floor(Math.random() * 255), b: Math.floor(Math.random() * 255)}, n: Math.floor(Math.random() * 20)};
      row.push(box);
      drawBox(box);
      x += 50;
    }
    matrix.push(row);
    x = boxX;
    y += 50;
  }
}

function totalMatrix(m1, m2, m3) {
  for (let i = 0; i < matrix1Rows; i++) {
    let sum = 0;
    for (let j = 0; j < matrix1Cols; j++) {
      sum += 0;
    }
  }
}


function windowResized() {
  canvasW = windowWidth;
  resizeCanvas(windowWidth, canvasH);
}
/* Al inicio hay un retardo de un segundo y otro segundo para el armado de la obra.
Sosteniendo apretado el botón del mouse se dibujan cuadrados hasta soltarlo y con la letra "a" las líneas se ponen rojas y con la letra "z"
vuelven a ser negras */

////////////////////////////////////////////////////////////////////////
let radioMayor = 0;
let x = radioMayor;
let velocidad = 5;
let direccion = 1;
let elCuadrado, elCuadrado1;

function setup() {
  createCanvas(320, 390);
  background(30, 1, 1);
  //frameRate(1);
  /*mitadAncho*/ elCuadrado = width;
  /* mitadAlto*/ elCuadrado1 = height;

  fill(120, 10, 10);
  rect(50, 80, 230);
  frameRate(2);
}

function draw() {
  //if (keyIsPressed){
  if (key == "a") {
    stroke(255, 0, 0, 200);
  } else if (key == "z") {
    stroke(0, 0, 0);
  }
  if (mouseIsPressed) {
    elCuadrado = pmouseX;
    elCuadrado1 = pmouseY;
  }
  //Rectangulo interno
  x += velocidad;

  /* push();
   
  //rotate(radians(anguloRotacio));
  translate(x, height / 2);
  fill(120, 210, 10);
  rect(50, 80,30);
  
  pop();*/

  //círculos concentricos

  fill(255, 180, 80);
  ellipse(90, 90, 110);

  if (key == "d") {
    fill(120, 20, 20);
  }
  //rect(elCuadrado, elCuadrado1 + 50, 50, 50);

  // mouse
  if (key == "e") {
    fill(180, 10, 10);
    ellipse(90, 90, 85);
  }
  if (key == "r") {
    fill(50, 10, 10);
    ellipse(90, 90, 50);
  }
  fill(120, 10, 10);
  ellipse(90, 90, 70);
  fill(50, 10, 10);
  ellipse(90, 90, 50);

  //Elípses sobre el tíangulo

  fill(250, 130, 90);
  ellipse(180, 150, 70, 50);

  fill(255, 160, 90);
  ellipse(170, 170, 70, 50);
  ellipse(160, 190, 70, 50);

  //Tríangulo
  if (key == "f") {
    fill(155, 180, 60);
  }
  triangle(180, 210, 90, 300, 130, 180);

  //Paralelas que cruzan el tríangulo

  line(200, 290, 70, 215);
  line(210, 300, 80, 225);
  line(220, 310, 90, 235);

  //Figura del ángulo inferior derecho

  rect(210, 220, 10);
  rect(210, 230, 10);
  rect(210, 240, 10);
  rect(210, 250, 10);
  fill(255, 90, 0);
  rect(220, 230, 10);
  rect(220, 240, 10);
  rect(220, 250, 10);
  rect(220, 260, 10);
  velocidad -= x;

}
document.oncontextmenu = function () {
  return false;
};

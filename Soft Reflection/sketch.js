var xspacing = 5;    // Distance between each horizontal location
var w;                // Width of entire wave
var amplitude_ = 75.0; // Height of wave
var wavelength = 20;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues_;  // Using an array to store height values for the wave
//var k = 1;
var k = 2*Math.PI/wavelength;
var omega_ = 0;
var yvaluesSum = [];
var offset_ = 0;

function setup() {
  /*radio = createRadio();
    soft = radio.option('Soft Reflection');
    radio.position(100,5);
  //radio2 = createRadio();
    hard = radio.option('Hard Reflection');
    radio.position(120,5);
*/
  frameRate(100);
  canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');
  w = width+12;

  dx = (TWO_PI / wavelength) * xspacing;

  yvalues1 = new Array(floor(w/xspacing));
  yvalues2 = new Array(floor(w/xspacing));
  yvalues1plus2 = new Array(floor(w/xspacing));
  yvalues3 = new Array(floor(w/xspacing));
  yvalues2plus3 = new Array(floor(w/xspacing));
}

function draw() {
  background(255);
  t = millis()/1000;


  calcPulse(yvalues1,-35,-4,50);
  calcPulse(yvalues2,0,4,50);
  //calcPulse(yvalues3,-42,-4,50)
  renderWave(yvalues1,color(0,0,0),0);
  renderWave(yvalues2,color(0,0,0),0);
  //renderWave(yvalues3,color(0,0,0),0);
  sum = calcSum(yvalues1,yvalues2,yvalues3);
  renderWave(sum,color(0,0,0),2);
  push();
  strokeWeight(1);
  stroke(0);
  pop();
  fill(100, 100, 240);
  rect(490, 150, 10, 200);
  //fill(250, 250, 250);
  //ellipse(495, 250, 20, 15);
}

function calcPulse(yvalues_,offset_,omega_,amplitude_) {

  x = 0;
  for (var i = 0; i < yvalues_.length; i++) {
    yvalues_[i] = amplitude_*Math.pow(Math.E, -Math.pow((k * (.1*x+offset_) - omega_ * t),2));
    x+=dx;
  }
}
function calcSum(yvalues1_,yvalues2_,yvalues3_) {
  x = 0;
for (var i = 0; i < yvalues1_.length; i++) {
  yvaluesSum[i] = yvalues1_[i]+yvalues2_[i];
  }
return yvaluesSum;
}

function renderWave(yvalues_,color_,weight_) {


  noFill();
  stroke(color_);
  strokeWeight(weight_)
  beginShape();
  for (var x = 0; x < yvalues_.length; x++) {
    curveVertex(x*xspacing, height/2-yvalues_[x]);
  }
  endShape();
}

var xspacing = 5;    // Distance between each horizontal location
var w;                // Width of entire wave
var amplitude = 50.0; // Height of wave
var wavelength = 20;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
//var k = 1;
var k = 2*Math.PI/wavelength;
var omega_ = 0;
var speed;
var offset_ = 10;


function setup() {
frameRate(30);
canvas = createCanvas(400, 400);
canvas.parent('sketch-holder');
w = width+12;
//w = constrain(w,0,300)
x = 0;
dx = (TWO_PI / wavelength) * xspacing;
yvalues_ = new Array(floor(w/xspacing));
//floor(w+12/xspacing);
}
function draw() {
  background(255);
  t = millis()/1000;
  calcPulse(yvalues_,0,offset_,50);

  renderWave(yvalues_,color(0,0,250),1);

  push();
  strokeWeight(1);
  stroke(0);
  //line(0,height/2,width,height/2);
  pop();
  //yvalues_[i].turn();
}
function calcPulse(yvalues_,offset_,omega_,amplitude_) {

  x = 0;
  for (var i = 0; i < yvalues_.length; i++) {
    yvalues_[i] = amplitude_*Math.pow(Math.E, -Math.pow((k * (x+offset_) - omega_ * t),2));
    //yvalues_[i] = amplitude_* (-Math.pow((k * (x+offset_) - omega_ * t),2));
    x+=dx
}
if ( x > width){
offset = !offset_;
}
}
function renderWave(yvalues_,color_,weight_) {

//push();
  noFill();
  stroke(color_);
  strokeWeight(weight_)
  beginShape();
  for (var x = 0; x < yvalues_.length; x++) {
    curveVertex(x*xspacing, height/2-yvalues_[x]);
}
  endShape();
  //pop();
}
/*}
function draw() {
  var w = map(mouseX, 0, width, 0, 1);
  w = constrain(w, 0, 1);
  pulse.width(w)
}*/

var d = 0.0;
var a=0.0;
var l=0.0;
var y;
var theta=0.0;
var int0 = 0.0;
var x = 0.0 ;
var slider;

function setup() {
createCanvas(800, 800);
noFill();

LightWavelength = createElement('z2', 'Wavelength');
LightWavelength.position(20, 30);
slider1 = createSlider(0,1000,10);
slider1.value(600);
slider1.position(150, 30);

DistanceBTNSlits = createElement('z2', 'Distance between slits');
DistanceBTNSlits.position(20,55);
slider2 = createSlider(0,1000,10);
slider2.position(200,55 );
slider2.value(1000);

SlitWidth = createElement('z2', 'Slit Width');
SlitWidth.position(20,80);
slider3 = createSlider(0,1000,10);
slider3.position(150, 80);
slider3.value(50);

CentralMaximum = createElement('z2', 'Central Maximum');
CentralMaximum.position(20, 105);
slider4 = createSlider(0,1000,10);
slider4.position(150, 105);
slider4.value(140);
 y = new Array(700);
}

function draw() {

background(255);
//stroke (255,0,0);
noFill();

l = slider1.value();
a = slider3.value();
int0 = slider4.value();
d = slider2.value();

calcPlot();
renderFunction();
}

function calcPlot(){
  for (var x= 0 ; x< y.length; x+=1){
      theta = map(x,0,y.length,-PI/2,PI/2)
      y[x] = int0 * Math.pow(Math.cos(PI*d*Math.sin(theta)/l),2)*Math.pow(Math.sin(PI*a*Math.sin(theta)/l)/(PI*a*Math.sin(theta)/l),2)
      }
}
function renderFunction() {
push();
noFill();
strokeWeight(4);
for (var i=0; i<255;i++){
if (l < 700 && l> 635){
stroke(255,0,0);
}
else if (l>590 && l<635){
  stroke (204, 102, 0);
}
else if (l>560 && l<590){
  stroke(255, 204, 0);
}
else if(l>520 && l<560){
stroke (0,255,0);
}
else if(l>490 && l<520){
  colorMode(HSB, 100); // Use HSB with scale of 0-100
//c = color(50, 55, 100);
stroke(50, 55, 100);
}
else if (l>450 && l<490) {
  stroke(0,0,255);
}
else if(l>400 && l<450){
stroke (175, 100, 220);
}
else{
  stroke(0);
}}
//stroke(0);
//for (var j = 0; j< y.length; j++){
//  curveVertex(j,height/2-y[j])
//}
beginShape();
for (var j = 0; j< y.length; j++){
  curveVertex(j,height/2-y[j])
}
endShape();
pop();
}

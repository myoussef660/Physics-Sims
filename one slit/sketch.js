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
slider1 = createSlider(400,700,10);
slider1.value(600);
slider1.position(150, 20);
slider1.class("sim-slider gray");

SlitWidth = createElement('z2', 'Slit Width');
SlitWidth.position(20,80);
slider3 = createSlider(3500,5000,10);
slider3.position(150, 70);
slider3.value(4000);
slider3.class("sim-slider gray");

CentralMaximum = createElement('z2', 'Central Maximum');
CentralMaximum.position(20, 130);
slider4 = createSlider(0,200,10);
slider4.position(150, 120);
slider4.value(140);
slider4.class("sim-slider gray");
 y = new Array(700);
}

function draw() {

background(255);
noFill();

l = slider1.value();
a = slider3.value();
int0 = slider4.value();

calcPlot();
renderFunction();
}

function calcPlot(){
    for (var x= 0 ; x< y.length; x+=1){
          theta = map(x,0,y.length,-1.57,1.5)
          y[x] = int0*Math.pow(Math.sin(PI*a*Math.sin(theta)/l)/(PI*a*Math.sin(theta)/l),2)
          }
}
function renderFunction() {
push();
noFill();
strokeWeight(4);
hue = round(map(l,350,700,330,0));
c = color('hsb('+hue+', 100%, 100%)');
stroke(c)

beginShape();
for (var j = 0; j< y.length; j++){
  curveVertex(j,height/2-y[j])
}
endShape();
pop();
}

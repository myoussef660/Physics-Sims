var d = 0.0;
var l=0.0;
var y;
var theta=0.0;
var int0 = 0.0;
var x = 0.0 ;
var slider;
var N = 0;

function setup() {
createCanvas(2000, 1000);
noFill();

LightWavelength = createElement('z2', 'Wavelength');
LightWavelength.position(20, 30);
slider1 = createSlider(400,700,10);
slider1.value(600);
slider1.position(200, 20);
slider1.class("sim-slider gray");

DistanceBTNSlits = createElement('z2', 'Distance between slits');
DistanceBTNSlits.position(20,80);
slider2 = createSlider(525,20000,100);
slider2.position(200,70 );
slider2.value(10000);
slider2.class("sim-slider gray");

CentralMaximum = createElement('z2', 'Central Maximum');
CentralMaximum.position(20, 130);
slider4 = createSlider(0,5,.2);
slider4.position(200, 120);
slider4.value(2);
slider4.class("sim-slider gray");

NSlits = createElement('z2','N-slits');
NSlits.position(20,180);
slider5 = createSlider(2,15,5);
slider5.position(200,170);
slider5.value(10);
slider5.class("sim-slider gray");

 y = new Array(700);
}

function draw() {

background(255);
noFill();

l = slider1.value();
int0 = slider4.value();
d = slider2.value();
N = slider5.value();
calcPlot();
renderFunction();
}

function calcPlot(){
  for (var x= 0 ; x< y.length; x+=1){
    theta = map(x,0,y.length,-.133,.1)
    y[x] = int0*Math.pow(Math.sin(N*Math.PI*d*Math.sin(theta)/l),2)/(Math.pow(Math.sin(Math.PI*d*Math.sin(theta)/l),2))
    //constrain(y[x],0,200);
}
//constrain(y[x],0,200);
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

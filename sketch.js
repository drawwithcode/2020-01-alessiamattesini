function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background('black');
  angleMode(DEGREES);
  // put setup code here
}

function draw() {
  // put drawing code here
  push();
  var incremento= frameCount*0.2;
  var r=0.1+incremento;
  var x = cos(frameCount)*r;
  var y = sin(frameCount)*r;
  noFill();
  stroke(lerpColor( color(224, 141, 172), color(106, 127, 219),frameCount/700));
  strokeWeight(0.1);
  translate(width/2, height/2);
  scale(0.01*frameCount);
  ellipse(x, y, 40, 40);
  pop();


  if(frameCount==700) {
    background('black');
}
if(frameCount>700){
    push();
    var incremento1= (frameCount-700)*0.2;
    var r1=0.1+incremento1;
    var x1 = sin(frameCount-700)*r1;
    var y1 = cos(frameCount-700)*r1;
    noFill();
    stroke(lerpColor( color(239, 118, 122), color(275, 227, 71),(frameCount-700)/1400));
    strokeWeight(0.1);
    translate(width/2, height/2);
    scale(0.01*(frameCount-700));
    ellipse(x1, y1, 40, 40);
    pop();

    push();
    var x2 = cos(frameCount-700)*r1;
    var y2 = sin(frameCount-700)*r1;
    noFill();
    stroke(lerpColor( color(0, 99, 93), color(8, 164, 189), (frameCount-700)/1400));
    strokeWeight(0.1);
    translate(width/2, height/2);
    scale(0.01*(frameCount-700));
    ellipse(x2, y2, 40, 40);
    pop();


  }if(frameCount==1400) {
    background('black');
}
if(frameCount>1400){
    push();
    var incremento2= (frameCount-1400)*0.2;
    var r2=0.1+incremento2;
    var x3 = -sin(frameCount-1400)*r2;
    var y3 = -cos(frameCount-1400)*r2;
    noFill();
    stroke(lerpColor( color(67, 87, 173), color(72, 169, 166),(frameCount-1400)/2100));
    strokeWeight(0.1);
    translate(width/2, height/2);
    scale(0.01*(frameCount-1400));
    ellipse(x3, y3, 40, 40);
    pop();

    push();
    var x4 = -cos(frameCount-1400)*r2;
    var y4 = -sin(frameCount-1400)*r2;
    noFill();
    stroke(lerpColor( color(72, 169, 166), color(67, 87, 173), (frameCount-1400)/2100));
    strokeWeight(0.1);
    translate(width/2, height/2);
    scale(0.01*(frameCount-1400));
    ellipse(x4, y4, 40, 40);
    pop();

    push();
    var x5 = sin(frameCount-1400)*r2;
    var y5 = cos(frameCount-1400)*r2;
    noFill();
    stroke(lerpColor( color(245, 166, 230), color(184, 74, 98),(frameCount-1400)/2100));
    strokeWeight(0.1);
    translate(width/2, height/2);
    scale(0.01*(frameCount-1400));
    ellipse(x5, y5, 40, 40);
    pop();

    push();
    var x6 = cos(frameCount-1400)*r2;
    var y6 = sin(frameCount-1400)*r2;
    noFill();
    stroke(lerpColor( color(184, 74, 98), color(245, 166, 230), (frameCount-1400)/2100));
    strokeWeight(0.1);
    translate(width/2, height/2);
    scale(0.01*(frameCount-1400));
    ellipse(x6, y6, 40, 40);
    pop();


  }
  if(frameCount==2100) {
    noLoop();
}
}

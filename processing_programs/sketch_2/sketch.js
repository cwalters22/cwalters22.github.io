function setup() {
    createCanvas(480, 480);
    background(200);
    ellipse(mouseX, mouseY, 100, 150);
    fill(0, 234, 234)
  }
  
  function draw() {
    variableEllipse(mouseX,mouseY,pmouseX,pmouseY); 
  }
  
  function mousePressed() {
    if (mouseIsPressed) {
    fill(153, 0, 153);
    }
  }
  
  
  function variableEllipse(x,y,px,py) {
    let speed = abs(x-px) +abs(y-py);
    stroke(speed);
    ellipse(x,y,speed,speed)
  } 
  
  
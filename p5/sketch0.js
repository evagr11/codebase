function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    ellipse(mouseX, mouseY, 20);
    rect(width/2, height/2, mouseX)
    triangle(0, height, width/2, 0, width, height)
    line(0, 0, width, height)
    console.log(frameCount%6)
    ellipse(frameCount%width, 0, 100)
  }
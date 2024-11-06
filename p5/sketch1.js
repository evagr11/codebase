function setup() {
    createCanvas(400, 400);
    background(220);
  }
  
  function draw() {
    console.log(sin(frameCount/20)*100)
    const velocidad = 100
    const amplitud = 100
    const posX = width/2
    const posY = height/2
    //ellipse(cos(frameCount/20)*100 + 200, frameCount, 1)
    //ellipse(sin(frameCount/20)*100 + 200, frameCount, 1)
    ellipse(noise(frameCount/velocidad)*amplitud + posX, frameCount, 1)
    ellipse(frameCount, noise(frameCount/velocidad)*amplitud + posY, 1)
  }
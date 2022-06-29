const dots = [];
const border = 20;
const howMany = 100;
const distance = 0.8;

function setup() {
  createCanvas(800, 800);
  let layerList = [];
  
  for(let j = 0; j < howMany; j++){
    layerList.push(random((j + 1) / (howMany / distance)))
  }
  
  for(let i = 0; i < howMany; i++){
    dots.push(new Dot(layerList[i]));
  }
}

function draw() {
  background(10);
  noStroke();
  
  fill(255, 164, 15, 100);
  ellipse(width/2 -80, height/2 + 80, 230, 230);
  fill(255, 164, 15, 100);
  ellipse(width/2 -90, height/2 + 90, 230, 230);
  
  fill(255, 164, 15, 100);
  ellipse(width/2 + 80, height/2 - 80, 230, 230);
  fill(255, 164, 15, 100);
  ellipse(width/2 + 90, height/2 - 90, 230, 230);
  
  fill(10);
  ellipse(width/2 -100, height/2 + 100, 230, 230);
  fill(10);
  ellipse(width/2 + 100, height/2 - 100, 230, 230);
  
  //fill(255, 164, 15, 100);
  //ellipse(width/2, height/2, 380, 380);
  
  fill(253, 204, 144, 220);
  ellipse(width/2, height/2, 60, 60);
  fill(10, 10, 10, 250);
  ellipse(width/2, height/2, 50, 50);
  
  fill(149, 236, 240, 220);
  ellipse(width/2 -28, height/2 + 28, 50, 50);
  ellipse(width/2 + 28, height/2 - 28, 50, 50);
  fill(255, 209, 20, 220);
  ellipse(width/2 -25, height/2 + 25, 50, 50);
  ellipse(width/2 + 25, height/2 - 25, 50, 50);
  
  fill(10);
  ellipse(width/2 -32, height/2 + 32, 45, 45);
  ellipse(width/2 + 32, height/2 - 32, 45, 45);
  
  fill(184, 31, 0, 40);
  
  translate(width/2,height/2)
  rotate(PI/4)
  
  ellipse(0, 40, 130, 60);
  ellipse(0, -40, 130, 60);
  
  fill(151, 223, 247, 60);
  
  rotate(-PI/4)
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  
  fill(255, 100, 20, 60);
  rotate(PI/(5/8))
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  
  //180
  
  fill(151, 223, 247, 60);
  
  rotate(1.8)
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  
  fill(255, 100, 20, 60);
  rotate(PI/(5/8))
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  rotate(2*PI/24)
  ellipse(0, -180, 10, 80);
  
  rotate(1.77)
  translate(-width/2,-height/2)
  
  fill(158, 245, 235, 230);
  ellipse(width/2, height/2, 30, 30);
  fill(220);
  ellipse(width/2, height/2, 20, 20);
  fill(255);
  ellipse(width/2, height/2, 10, 10);
  
  
  //World Famous "Hubble Cross Hatch Lines"
  fill(255, 255, 255, 200);
  ellipse(width/2, height/2, 150, 3);
  ellipse(width/2, height/2, 3, 150);
  
  
  for (const dot of dots) {
    dot.draw();
  }
}


function star(layer) {
  //creates a new star
}

class Dot {
  constructor(layer) {
    this.layer = layer;
    this.x = random(-border, width + border);
    this.y = random(-border, height + border);

    this.r = random(200,220);
    this.g = random(200,220);
    this.b = random(200,220);
  }

  draw() {
    let deltaX = 0;
    let deltaY = 0;

    if(mouseX != 0 && mouseY != 0){
      deltaX = -this.layer *
        map(mouseX - width / 2, 0, width, 0, 5);
      deltaY = -this.layer *
        map(mouseY - height / 2, 0, height, 0, 5);
    }

    this.x += deltaX;
    this.y += deltaY;

    if (this.x < -border) {
      this.x = width + random(border);
      this.y = random(0, height);
    } else if (this.x > width + border) {
      this.x = 0 - random(border);
      this.y = random(0, height);
    }

    if (this.y < -border) {
      this.y = height + random(border);
      this.x = random(0, width);
    } else if (this.y > height + border) {
      this.y = 0 - random(border);
      this.x = random(0, width);
    }

    fill(this.r, this.g, this.b);
    circle(this.x, this.y, (this.layer * 20));
  }
}
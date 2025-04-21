let clickedPath = [];
let resizedPath = [];
let smoothedLetter = [];

let selectedPoint = 9999;
let editing = false;

let shiftX = 320;
let shiftY = 20;


let imgShiftX = -1484
let imgShiftY = -1100
let imgScale = 9.1;

let showSampleImage = true;
 
let sample;

function preload(){
  sample = loadImage('sample.jpg');
}

function setup() {
  createCanvas(1000,600);
  colorMode(HSB, 360, 100, 100,100);

}

function draw() {
  background(0,0,95);
  
  
  push();
  scale(imgScale);
  translate(imgShiftX, imgShiftY)
  if (showSampleImage) image(sample,0,0);
  pop();
  
  noStroke();
  fill(0,0,95,70);
  rect(0,0,shiftX,height);
  rect(shiftX, 0, width-shiftX, shiftY);
  rect(shiftX, height -120, width-shiftX, 120);
  rect(shiftX+320, shiftY, 400, 500);
  
  
  push();
  translate(shiftX, shiftY)
  
  strokeWeight(1);
  stroke(0,0,0);
  noFill();
  rect(0,0,shiftX,500);
  
  
  drawLine(letterToCanvas(0, 17).y, "zero");
  drawLine(letterToCanvas(0, 24).y, "base");
  drawLine(letterToCanvas(0, 9).y, "a height");
  drawLine(letterToCanvas(0, 0).y, "cap height");
  drawLine(letterToCanvas(0, 36).y, "desc height");
  
  push();
  noStroke();
  fill(0,0,0)
  
  if (editing){
    push();
    fill(100,30,100);
    rect(443, 85, 195, 23);
    pop();
    text("p: Toggle editing points: EDITING", 450, 100);
    text("0 - 1: Select specific point", 450, 130);
    text("<- ->: Move along path", 450, 160);
  }
  else {
    push();
    fill(0,30,100);
    rect(443, 85, 195, 23);
    pop();
    text("p: Toggle editing points: PLACING", 450, 100);
    text("0 - 1: Remove specific point", 450, 130);
  }
  
  
  text("Backspace: Remove last point", 450, 210);
  text("Space: Clear", 450, 230);
  text("Enter: Log path", 450, 250);
  
  text("i: show/hide sample image", 450, 320);
  text("wasd: move image", 450, 340);
  text("re: zoom image in/out", 450, 360);
  pop();
  
  
  
  fill(0,100,100);
  
  push()
  translate(-shiftX+110, 0);
  let l = smoothPath(letterB, 5);
  showLetter(l, "path", true);
  pop();

  
  let s = smoothPath(clickedPath, 5);
  showLetter(s, "path", false);
  
  showLetter(clickedPath, "dots", true);
  
  noLoop();
  
  pop();
  
  
}

///////////////
///////////////
///////////////
///////////////
///////////////


function mouseDragged(){
  if (editing){
    clickedPath[selectedPoint] = canvasToLetter(mouseX-shiftX, mouseY-shiftY);
  }
  
  draw();
}



function mousePressed(){
  if (!editing){
    if (mouseX-shiftX < 300 && mouseX-shiftX > 0 && mouseY > 0 && mouseY-shiftY< 660){
      let p = canvasToLetter(mouseX-shiftX, mouseY-shiftY);
      clickedPath.push(p)
    }
  }

  draw();
}


function keyPressed(){
  // 0-9
  if (keyCode > 47 && keyCode < 59){
    
    let num = key;
    
    if (editing) selectedPoint = num;
    else clickedPath.splice(num, 1);
  }
  
  // backspace
  if (keyCode == 8) clickedPath.pop();
  
  // enter
  if (keyCode == 13) logPath();
  
  // space 
  if (keyCode == 32) {
    clickedPath = [];
  }

  
  if (key == 'p') {
    editing = !editing;
    if (!editing) selectedPoint = 9999;
    if (editing) selectedPoint = 0;
  }

  // left/right
  if (keyCode == 39) selectedPoint++;
  if (keyCode == 37) selectedPoint--;
  
  

  let shiftAmt = 3;
  if (key == 'd') imgShiftX += shiftAmt; 
  if (key == 'a') imgShiftX -= shiftAmt;
  if (key == 's') imgShiftY += shiftAmt; 
  if (key == 'w') imgShiftY -= shiftAmt;
  
  if (key == 'r') imgScale++;
  if (key == 'e') imgScale--;
  
  if (key == 'i') showSampleImage = !showSampleImage;
  


  draw();
}




function logPath(){
  let str = "";
  
  str += "[0, ";
  
  let i = 0;
  for(let p of clickedPath){
    str+= "{x:" + nf(p.x, 0,1) + ",y:" + nf(p.y,0,1) + "}"
    
    if (i < clickedPath.length-1) str+= ","
    i++;
  }
  
  str += ", 0],";
  
  console.log(str)
  
  console.log("imgShiftX: " +  imgShiftX  + 
  " imgShiftY: " +  imgShiftY + 
  " scale: " +  imgScale);
}

function letterToCanvas(x, y){
  let np= {
    x: map(x, 0, 36, 0, 500),
    y: map(y, 0, 36, 0, 500)
  }

  return np
}

function canvasToLetter(x, y){
  return {
    x: map(x, 0, 500, 0, 36),
    y: map(y, 0, 500, 0, 36)
  }
}

function showLetter(path, style, label){

  let newPath = [];
  for(let p of path){
    let np = letterToCanvas(p.x, p.y);
    newPath.push(np)
  }
 if(style == "path") drawPathAsStroke(newPath, 100, 10)
 if (style == "dots") drawPathAsDots(newPath, label);  

}


function drawLine(y, label){
  push();
  line(0, y, 350, y);
  noStroke();
  fill(0,0,0);
  text(label, 355, y+3);
  pop();
}

function drawPathAsStroke(path, opacity, weight){
  noFill()
  stroke(150,60,60, opacity);
  strokeWeight(weight);
  beginShape();
  for(let p of path){
    vertex(p.x, p.y)
  }
  endShape();
}


function drawPathAsDots(path, label){
  noStroke();
  fill(0,100,100);
  let i = 0;
  for(let p of path){
    
    if (label) {
      push();
      fill(0,0,100,50);
      
      if (i == selectedPoint){
        push();
        stroke(100,100,100);
        strokeWeight(1)
      }
      
      
      ellipse(p.x + 10, p.y+3, 15)
      
      if (i == selectedPoint) pop();
      fill(0,0,0);
      textAlign(CENTER, CENTER)
      text(i, p.x + 10, p.y + 3)
      pop();
    }
    
    if (i == selectedPoint) {
      push();
      fill(100,100,100);
      stroke(0,0,0);
      strokeWeight(0.6)
      ellipse(p.x, p.y, 10)
      pop();
    }
    else{
      push();
      fill(0,0,100);
      stroke(0,0,0);
      strokeWeight(0.6)
      ellipse(p.x, p.y, 5)
      pop();
    }
    
    i++;
  }

}


function smoothPath(path, loops){
  let rcns = [];
  rcns[0] = [];

  for(let p of path){
    rcns[0].push({...p})
  }

  for(let l = 1; l < loops; l++){
    rcns[l] = [];
    let pl = l - 1;

    for(let i = 0; i < rcns[pl].length; i++){
      let j = i-1;
      let k = i+1;
      if (j < 0) j = rcns[pl].length-1;
      if (k > rcns[pl].length-1) k = 0;

      if (i ==0) rcns[l].push(rcns[pl][i])
      else if (i == rcns[pl].length-1) rcns[l].push(rcns[pl][i]);
      else{
        rcns[l].push(lerpVector(rcns[pl][j], rcns[pl][i]))
        rcns[l].push(lerpVector(rcns[pl][k], rcns[pl][i]))
      }

    }
  }

  return rcns[rcns.length-1];
}

function lerpVector(p0, p1, amt = 0.75){
  let pos = {
    x: lerp(p0.x, p1.x, amt),
    y: lerp(p0.y, p1.y, amt),
  }

  return pos;
}
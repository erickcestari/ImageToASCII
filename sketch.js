const density = "Ñ@#W$9876543210?!abc;:+=-,._ "

let img;

function preload(){
  img = loadImage("mini_link.png");
}

function setup() {
  createCanvas(800, 400);
  //Text
  img.loadPixels()
  for(let j = 0; j < img.height; j++){
    let row = ''
    for(let i = 0; i <img.width; i++){
      const pixelIndex = (i + j * img.width) * 4
      const r = img.pixels[pixelIndex + 0]
      const g = img.pixels[pixelIndex + 1]
      const b = img.pixels[pixelIndex + 2]
      const avg = (r + g + b) / 3
      const len = density.length
      const charIndex = floor(map(avg,0,255,len,0))
      
      const c = density.charAt(charIndex);
      if(c == ' ') row+= '&nbsp;'
      else row += c
      
    }
    createDiv(row)
  }
}

function draw() {
  background(0);
  image(img, 400,0,width/2,height)
  
  let w = width / img.width / 2
  let h = height / img.height
  img.loadPixels()
  for(let i = 0; i <img.width; i++){
    for(let j = 0; j < img.height; j++){
      const pixelIndex = (i + j * img.width) * 4
      const r = img.pixels[pixelIndex + 0]
      const g = img.pixels[pixelIndex + 1]
      const b = img.pixels[pixelIndex + 2]
      const avg = (r + g + b) / 3
      
      noStroke()
      fill(r,g,b)
      //square(i * w, j * h, w)
      
      const len = density.length
      const charIndex = floor(map(avg,0,255,len,0))
      textSize(w)
      textAlign(CENTER, CENTER)
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5)
      
    }
  }
  
  
  
  
}
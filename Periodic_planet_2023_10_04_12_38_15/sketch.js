let selectedNumber;

function setup() {
  createCanvas(400, 600);
  textSize(32);
  textAlign(CENTER, CENTER);

  // Create a button

  let button = createButton('能花多少钱吃饭呢');
  
  button.position(width / 2 - 50, height / 1.8);
  
  button.mousePressed(generateRandomNumber);
  
}

function draw() {
  background(255,192,55);
  fill(0);
  text('今日随机金额: ' + selectedNumber, width / 2, height / 2);
}

function generateRandomNumber() {
  selectedNumber = int(random(31)); // Randomly select a number between 0 and 30
}

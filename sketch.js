let font1;
let s = 'Strings are text';

let userInput;
let button;
let poem = [];

function preload() {
  font1 = loadFont('SuperBasic.ttf');
}

function setup() {
  createCanvas(400, 580);
  textFont(font1);
  userInput = createInput();
  userInput.position(40, 100);
  button = createButton('add to poem');
  button.position(userInput.x, userInput.y + 21);
  button.mousePressed(newLine);
}

function draw() {
  background(220);
  writePoem();
}

function newLine() {
  userLine = userInput.value();
  userInput.value('');
  poem.push(userLine);

  let words = RiTa.tokenize(userLine);
  response = '';
  for (x = 0; x < words.length; x++){
  
    if (x == (words.length -1) ){
        let rhymes = RiTa.rhymesSync(words[x]);
        if (rhymes.length >0) {
          let changedWord = random(rhymes); 
    response += changedWord;  
        }
        else {
          response += rhymes;
        }
        
        
    } else if (RiTa.isVerb(words[x])){
      let randomVerb = RiTa.randomWord({ pos: "nn"});
      response += randomVerb;
    }
    else {
      response += words[x];
    }
    response += ' ';
  }

  poem.push(response);

  //if (userLine === '') {
   // return;
  //}
/*
  let words = RiTa.tokenize(userLine);
  let r = floor(random(0, words.length));
  let rhymes = RiTa.rhymes(words[r]);

  if (rhymes.length > 0) {
    let changedWord = random(rhymes);
    words[r] = changedWord;
  }

  userLine = RiTa.untokenize(words);
  */
  // poem.push(userLine);
}

function writePoem() {
  for (let x = 0; x < poem.length; x++) {
    text(poem[x], 40, 180 + x * 20);
  }
}
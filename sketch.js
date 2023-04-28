//Paula Carrascal WCC2 final project


var sustantivos = ["love", "stop", "moment", "happiness", "things", "life", "everything", "present", "moment", "much", "take", "time", "hand", "feeling", "part",
"head", "memory", "remains", "something", "matter", "concept", "meaning",
"place", "humans", "mistakes", "able", "forgive", "thing", "end", "wonder", "loving", "way",
"one", "heart", "wrapped", "down", "face", "wound", "thought", "head", "hope", "again",
"end", "good", "world", "what ifs", "exist"]; // 0-46
let randomVal = sustantivos[Math.floor(Math.random() * sustantivos.length)];
let adjetivos = ["bad", "thankful", "eternal", "concious", "more", "enough", "forever", "extinct",
"same", "better", "long", "true", "first", "there"]; // 0-14
let randomVal2 = adjetivos[Math.floor(Math.random() * adjetivos.length)];
var adverbio = ["together", "sooner", "else", "anymore", "already", "only", "surely",
"not", "how", "just", "about", "yet", "still"]; // 0-12
let randomVal3 = adverbio[Math.floor(Math.random() * adverbio.length)];
var pronombres = ["I", "you", "we", "me", "it", "those", "yourself", "someone", "yours",
"us", "what", "each other", "one", "your", "anyone", "who", "my"]; // 0-16
let randomVal4 = pronombres[Math.floor(Math.random() * pronombres.length)];
var verbos = ["hurts", "loving", "will", "I'm", "lived", "shared", "taught", "reminded", "needed",
"learn", "wanted", "be", "beauty","has", "ending", "have", "being", "can", "wish", "known", "appreciate",
"regret", "enjoyed", "kept", "promise", "could", "hurt", "gets", "choose", "disappoint", "talk", "keep", "need",
"understand", "make", "possibly", "died", "stopped", "existing", "were", "waiting", "had", "felt", "has", "comes",
"made", "know", "saw", "suffering", "knew", "was", "denying", "told", "suffer", "wrinkles", "thinking", 
 "think", "keep", "run", "healed", "buried", "did", "felt", "becoming", "killed"]; // 0-64
 let randomVal5 = verbos[Math.floor(Math.random() * verbos.length)];
 var auxiliares = ["doesn't", "can't", "don't", "does", "couldn't", "no", "do not", "hasn't", "wasn't",
"would"]; // 0-9
let randomVal6 = auxiliares[Math.floor(Math.random() * auxiliares.length)];
var conectores = ["but", "it", "although", "this", "for", "the", "that", "and", "as", "to", "in", "is", "to",
"of", "from", "Sometimes", "with", "too", "out of", "either way", "once", "why", "from", "a", "that's",
"sometimes"]; // 0-25
let randomVal7 = conectores[Math.floor(Math.random() * conectores.length)];
var transitional = ["as well", "an", "also"]; // 0-2
let randomVal8 = transitional[Math.floor(Math.random() * transitional.length)];
var determiner = ["mean", "my", "much", "both", "our", "means", "each", "it's", "never"]; // 0-8
let randomVal9 = determiner[Math.floor(Math.random() * determiner.length)];

let poem = "I love you. I love you but it hurts bad loving you, although this doesnt mean I will stop loving you. Im thankful for the moments we lived together, the happiness that we shared, the things you taught me and the things I taught you as well, it reminded me those things that I also needed to learn. We wanted to be eternal but the beauty in life is that everything has an ending and that you have to be conscious of being present in the moment and take as much as you can from it. Sometimes I wish I have known this sooner and appreciate more \nthe time with you. Either way I cant regret it, I enjoyed enough and kept my promise of being for you forever as much as I could but sometimes things hurt too much and everything gets out of hand. Sometimes you have to choose yourself and disappoint that \nsomeone else. We dont talk anymore but I keep this feeling of love for you and it hurts, it hurts but I need to understand that you dont make part of my life as well as I dont make part of yours and possibly both of us have already changed and the versions \nwe knew about ourselves are already extinct. We died, we stopped existing and in our head only the memory of what once were remains. What does love mean to you? It surely means something is not the same for you and me and something better is waiting \nfor us and that is why we couldnt be. Either way it doesnt matter that the concept had the same meaning for both of us, each of us felt and gave it to each other, one has to understand that no one comes from the same place. As humans, we made mistakes and \nwere able to understand it and forgive each other. The only thing that I do not know how to forgive is that you saw me suffering for a long time for something that I knew was true but you kept denying, only for it to be true in the end. And I wonder, was that your \nway of loving me? Was that the love you felt for me? You once told me not to let anyone make me suffer but the first one who made me suffer was you. My heart wrinkles of just thinking about it and thats why I dont think, I keep my mind wrapped in the present. \nBut sometimes tears run down my face, the wound hasnt healed yet and the thought of what we were and what you did is buried in my head, it doest matter if I dont think. The hope I felt of becoming again with you is killed, I had to end it, it wasnt good for me. \nBut in the world of the what ifs its still there, is just that I know that that world would never exist. I love you. I love you but it hurts bad loving you, although this doesn’t mean I will stop loving you. I’m thankful for the moments we lived together, the happiness that";
let poem2 = "I love you. I love you but it hurts bad loving you, although this doesnt mean I will stop loving you. Im thankful for the moments we lived together, the happiness that we shared, the things you taught me and the things I taught you as well, it reminded me those things that I also needed to learn. We wanted to be eternal but the beauty in life is that everything has an ending and that you have to be conscious of being present in the moment and take as much as you can from it. Sometimes I wish I have known this sooner and appreciate more \nthe time with you. Either way I cant regret it, I enjoyed enough and kept my promise of being for you forever as much as I could but sometimes things hurt too much and everything gets out of hand. Sometimes you have to choose yourself and disappoint that \nsomeone else. We dont talk anymore but I keep this feeling of love for you and it hurts, it hurts but I need to understand that you dont make part of my life as well as I dont make part of yours and possibly both of us have already changed and the versions \nwe knew about ourselves are already extinct. We died, we stopped existing and in our head only the memory of what once were remains. What does love mean to you? It surely means something is not the same for you and me and something better is waiting \nfor us and that is why we couldnt be. Either way it doesnt matter that the concept had the same meaning for both of us, each of us felt and gave it to each other, one has to understand that no one comes from the same place. As humans, we made mistakes and \nwere able to understand it and forgive each other. The only thing that I do not know how to forgive is that you saw me suffering for a long time for something that I knew was true but you kept denying, only for it to be true in the end. And I wonder, was that your \nway of loving me? Was that the love you felt for me? You once told me not to let anyone make me suffer but the first one who made me suffer was you. My heart wrinkles of just thinking about it and thats why I dont think";

var index = 0;

let pronombre;
let auxiliar;
let verbo;
let verbo1;
let adjetivo;
let sustantivo;
let sustantivo1;
let adverbios;
let conector;


let startX;
let startY;
let endX;
let endY;

let aniStartX;
let aniStartY;
let aniEndX;
let aniEndY;

let r;
let g;
let b;

let extraCanvas;


function setup() {
  createCanvas(windowWidth, windowHeight);

  extraCanvas = createGraphics(windowWidth, windowHeight);
  
  startX = random(width);
  startY = random(height);
  endX = random(width);
  endY = random(height);

  const range = 5;
  aniStartX = random(-range, range);
  aniStartY = random(-range, range);
  aniEndX = random(-range, range);
  aniEndY = random(-range, range);

  startX = random(width);
  startY = random(height);
  endX = random(width);
  endY = random(height);

  r = random(255);
  g = random(255);
  b = random(255);

  extraCanvas.noFill();
// extraCanvas.clear();
//frameRate(1);
}

function draw() { 

 // BACKGROUND DRAWING

extraCanvas.stroke(r,g,b, 100);
extraCanvas.line(startX, startY, endX, endY);

//pick a random color

r += random(-5, 5);
g += random(-5, 5);
b += random(-5, 5);

r = constrain(r, 0, 255);
g = constrain(g, 0, 255);
b = constrain(b, 0, 255);

// move line
startX += aniStartX;
startY += aniStartY;
endX += aniEndX;
endY += aniEndY;


if(startX < 0 || startX > width){
  aniStartX *= 1;
}

if(startY < 0 || startY > height){
  aniStartY *= -1;
}

if(endX < 0 || endX > width){
  aniEndX *= -1;
}

if(endY < 0 || endY > height){
  aniEndY *= -1;
}

background(0);
image(extraCanvas, 0, 0, width,height);

if(frameCount % 80 == 0) {

  pronombre = pronombres[Math.floor(Math.random() * pronombres.length)]
  auxiliar = auxiliares[Math.floor(Math.random() * auxiliares.length)]
  verbo = verbos[Math.floor(Math.random() * verbos.length)]
  verbo1 = verbos[Math.floor(Math.random() * verbos.length)]
  adjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)]
  sustantivo = sustantivos[Math.floor(Math.random() * sustantivos.length)]
  sustantivo1 = sustantivos[Math.floor(Math.random() * sustantivos.length)]
  adverbios = adverbio[Math.floor(Math.random() * adverbio.length)]
  conector = conectores[Math.floor(Math.random() * conectores.length)]
 }

//TEXT
//RANDOMIZING THE SENTENCE STRUCTURE INTO A NEW POEM
 textSize(70);
 fill(130);
 text(pronombre, windowWidth/2, windowHeight/2 -400 );
 text(auxiliar, windowWidth/2, windowHeight/2 -300 );
 text(verbo, windowWidth/2, windowHeight/2 -200);
 text(adjetivo, windowWidth/2, windowHeight/2 -100);
 text(sustantivo, windowWidth/2, windowHeight/2 +100);
 text(adverbios, windowWidth/2, windowHeight/2);
 text(auxiliar, windowWidth/2, windowHeight/2 + 200);
 text(sustantivo1, windowWidth/2, windowHeight/2 +300);
 text(conector, windowWidth/2, windowHeight/2 +400);
 text(verbo1, windowWidth/2, windowHeight/2 +500);

 //POEM 1 UP & DOWN

 push();
 translate(10,40);
 for (var i = 0; i <=640; i += windowHeight/3.){
  textSize(40);
  text(poem, 0, i);
 }
pop();
push();
translate(10,1720);
for (var i = 0; i <=640; i += windowHeight/3.){
 textSize(40);
 text(poem, 0, i);
}
pop();

//POEM2 LEFT & RIGHT

for (var i = 0; i <=640; i += windowHeight/3.){
textSize(40);
textWrap(CHAR);
text(poem2, 0, windowHeight/4.7, 1300);
 }

 for (var i = 0; i <=640; i += windowHeight/3.){
  textSize(40);
  textWrap(CHAR);
  text(poem2, 3450, windowHeight/4.7, 1300);
   }
}




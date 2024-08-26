let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2 ;

let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

let xRaquete = 5;
let yRaquete = 150;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;
let colidiu = false;
let meusPontos = 0;
let pontosDoOponente = 0;

//Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
 circle(xBolinha, yBolinha, diametro); 
  
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda(){
  
  if (xBolinha + raio> width || xBolinha - raio< 0){
    velocidadexBolinha *= -1;
    
  }
  if (yBolinha + raio> height || yBolinha - raio< 0){
    velocidadeyBolinha *= -1;
  }
   
}

function mostraRaquete(x,y){
   rect(x, y, RaqueteComprimento, RaqueteAltura);
 
  
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + RaqueteComprimento && yBolinha - raio < yRaquete + RaqueteAltura && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
  }
  
}

function   verificaColisaoRaquete(x, y){
  colidiu =        collideRectCircle(x,y,RaqueteComprimento,RaqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadexBolinha *= -1;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - RaqueteComprimento /2 -30;
  yRaqueteOponente += velocidadeYOponente
  
}

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
    fill(255)
  text(meusPontos, 170, 26);
      fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
    fill(255)
  text(pontosDoOponente, 470, 26)

}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
   pontosDoOponente += 1; 
  }  
}
  











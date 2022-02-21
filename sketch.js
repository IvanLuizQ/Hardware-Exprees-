var tl, op,x
// condição= 1 normal
// condição= 2 estudante
// condição= 3 idoso
condicao=1
gobc=0
jog= 0
l=40
a=80
l1=540
a1=380
pass= 0
money=0
money2= 0
vida=3
fase=1
tl=0
op=0
fala="Oi, bom dia!"
cont=0
troco=1
nivel=1
function preload() {
  busbc = loadImage('assets/jogo/busbc.jpg')
  bus = loadImage('assets/menu/bus.gif')
  conf01 = loadImage('assets/menu/conf01.png')
  conf02 = loadImage('assets/menu/conf02.png')
  inf01 = loadImage('assets/menu/inf01.png')
  inf02 = loadImage('assets/menu/inf02.png')
  play01 = loadImage('assets/menu/play01.png')
  play02 = loadImage('assets/menu/play02.png')
  fonte = loadFont('assets/fontes/machine.ttf')
  onibus = loadImage('assets/jogo/IntOnibus.jpg')
  reais2 = loadImage('assets/jogo/2reais.png')
  reais5 = loadImage('assets/jogo/5reais.png')
  reais10 = loadImage('assets/jogo/10reais.png')
  moeda1 = loadImage('assets/jogo/1real.png')
  moeda50 = loadImage('assets/jogo/50centavos.png')
  moeda25 = loadImage('assets/jogo/25centavos.png')
  foto= loadImage('assets/menu/foto.jpg')
  core = loadImage('assets/jogo/Core.png')
  per1 = loadImage('assets/jogo/Per1.png')
  per2 = loadImage('assets/jogo/Per2.png')
  per3 = loadImage('assets/jogo/Per3.png')
  per4 = loadImage('assets/jogo/Per4.png')
  per5 = loadImage('assets/jogo/Per5.png')
  per6 = loadImage('assets/jogo/Per6.png')
  per7 = loadImage('assets/jogo/Per7.png')
  per8 = loadImage('assets/jogo/Per8.png')
  per9 = loadImage('assets/jogo/Per9.png')
  per10 = loadImage('assets/jogo/Per10.png')
}
function setup() {
  createCanvas(640, 480);
  frameRate(30)
}
function draw() {
  if(tl==0){
    menu()
  }
  if(tl==1){
    jogo()
  }
}
function menu() {
  background(bus)
  cont=0
  if(jog==1){
    jog=0
  }
  if(fase==11){
   fase=1
    jog=0
  }
  noErase()
  fill(41)
  image(conf01, 10, 15, 50,50)
  image(inf02, 70,15, 50, 50)
  image(play01, 270, 390, 80, 80)
  if(mouseX > 270 && mouseX < 270+80 && mouseY > 390 && mouseY < 390+80 && tl == 0){
    image(play02, 270, 390, 80, 80)
    op=1
    if (mouseIsPressed) {
   tl=op
  } 

}
  if(mouseX > 10 && mouseX < 10+50 && mouseY > 15 && mouseY < 15+50 && tl == 0){
    image(conf02, 10, 15, 50, 50)
}
  if(mouseX > 70 && mouseX < 70+50 && mouseY > 15 && mouseY < 15+50 && tl ==0){
    image(inf01, 70, 15, 50, 50)
}
  textFont(fonte)
  textSize(55)
  noStroke()
  text("Hardware Exprees", 70, 160)
  if(op == 2){
    fill(245)
    textFont('Arial')
    erase(200)
    rect(50,50,550,350)
    noErase()
    fill(0,150)
    if(nivel==1){
      fill(0)
      rect(210,180,260,40,20)
    }
    if(nivel==2){
      fill(0)
      rect(210,230,260,40,20)
    }
    if(nivel==3){
      fill(0)
      rect(210,280,260,40,20)
    }
    fill(0, 150)
    rect(210,180,260,40,20)
    rect(210,230,260,40, 20)
    rect(210,280,260,40,20)
    rect(480,60,100,40,20)
      if(mouseX > 480 && mouseX < 480+100 && mouseY > 60 && mouseY < 60+40 && tl ==0){   
       fill(0)
      rect(480,60,100,40,20)
      if(mouseIsPressed){
        op=0
      }
}
    fill(245)
    textSize(20)
    text("Fechar", 500, 85)
    textSize(30)
    fill(51)
    text("CONFIGURAÇÕES",220,90)
    text("Nivel", 300, 150)
    fill(245)
      if(mouseX > 210 && mouseX < 210+260 && mouseY > 180 && mouseY < 180+40 && tl ==0){   
       fill(0)
       rect(210,180,260,40, 20)
      if(mouseIsPressed){
        nivel=1
      }
}
    if(mouseX > 210 && mouseX < 210+260 && mouseY > 230 && mouseY < 230+40 && tl ==0){   
       fill(0)
       rect(210,230,260,40, 20)
      if(mouseIsPressed){
        nivel=2
      }
     }
    if(mouseX > 210 && mouseX < 210+260 && mouseY > 280 && mouseY < 280+40 && tl ==0){   
       fill(0)
       rect(210,280,260,40, 20)
      if(mouseIsPressed){
        nivel=3
      }
     }
    fill(245)
    text("Facil", 300, 210)
    text("Medio", 300, 260)
    text("Dificil", 300, 310)
}
  if(op == 3){
    fill(245)
    textFont('Arial')
    erase(200)
    rect(50,50,550,350)
    noErase()
    fill(0,150)
    rect(200,330,260,40, 20)
    rect(480,60,100,40,20)
      if(mouseX > 480 && mouseX < 480+100 && mouseY > 60 && mouseY < 60+40 && tl ==0){   
       fill(0)
      rect(480,60,100,40,20)
      if(mouseIsPressed){
        op=0
      }
}
     if(mouseX > 200 && mouseX < 260+200 && mouseY > 330 && mouseY < 330+40 && tl ==0){   
       fill(0)
      rect(200,330,260,40, 20)
      if(mouseIsPressed){
        op=4
      }
}
    fill(245)
    textSize(20)
    text("Fechar", 500, 85)
    textSize(30)
    fill(51)
    text("INFORMAÇÕES",230,90)
    textSize(16)
    text("  Em Hardware Exprees, o estudante entra na pele de um cobrador de"+"\n"+" Onibus, tendo assim que interagir com pessoas para seguir avançando"+"\n"+" no jogo. O objetivo é simples, atender todos os passageiros e passar"+"\n"+" seus trocos corretamente."+"\n"+" Mas cuidado alguns passageiros podem ser diferentes de outros.", 80, 160)
    fill(245)
    textSize(35)
    text("Creditos", 260, 360)
    }
  if(op == 4){
    fill(245)
    textFont('Arial')
    erase(200)
    rect(50,50,550,350)
    noErase()
    fill(0,150)
    rect(200,350,260,40, 20)
    if(mouseX > 200 && mouseX < 200+260 && mouseY > 350 && mouseY < 350+40 && tl ==0 && op !=3){
      fill(0)
    rect(200,350,260,40, 20)
      if(mouseIsPressed){
        op=3
      }
}
    fill(245)
    stroke(0)
    textSize(30)
    text("Voltar", 287, 380)
    fill(0)
    textSize(25)
    text("ALUNO IDEALIZADOR",70,90)
    textSize(16)
    text("Ivan Luiz Quirino Da Silva",70,300)
    text("Turma: 05D ",70,320)
    text("Matricula: 20200075840",70,340)
    image(foto,70,100,180,180)
  }
}
function mouseClicked(){
  if(mouseX > 30 && mouseX < 30+80 && mouseY > 430 && mouseY < 430+40 && tl == 1){
   money2=money2+2
}
  if(mouseX > 130 && mouseX < 130+80 && mouseY > 430 && mouseY < 430+40 && tl == 1){
    money2=money2+5
}
  if(mouseX > 230 && mouseX < 230+80 && mouseY > 430 && mouseY < 430+40 && tl ==1){
   money2=money2+10
}
  if(mouseX > 30 && mouseX < 30+40 && mouseY > 365 && mouseY < 365+40 && tl==1){
   money2=money2+0.25
}
  if(mouseX > 95 && mouseX < 95+50 && mouseY > 360 && mouseY < 360+50 && tl==1){
   money2=money2+0.50
}
  if(mouseX > 167 && mouseX < 167+55 && mouseY > 358 && mouseY < 358+55 && tl ==1){
   money2=money2+1
}
  if(mouseX > 470 && mouseX < 470+40 && mouseY > 375 && mouseY < 375+40 && tl == 1){
    cont=0
    cont=cont+1
    jog=1
     if(troco==money3){
       fala="Muito obrigado!"
    }else{
      if(money3==0){
        fala= "Cade meu troco?"
        if(nivel>1 && vida != 0){
          vida=vida-1
        }
      }else{
        fala="Você errou meu troco!"
        if(nivel>1 && vida != 0){
          vida=vida-1
        }
      }
    }
  }
  if(mouseX > 520 && mouseX < 520+100 && mouseY > 375 && mouseY < 375+40 && tl ==1){
    money2=0
}
  if(mouseX > 5 && mouseX < 5+50 && mouseY > 10 && mouseY < 10+50 && tl == 1){
    if(gobc==0){
    gobc= 1
    }else{
      gobc=0
    }
  }
if(mouseX > 200 && mouseX < 200+260 && mouseY > 330 && mouseY < 330+40 && tl == 1 && gobc == 1){
  tl=0
}
  if(mouseX > 10 && mouseX < 10+50 && mouseY > 15 && mouseY < 15+50 && tl == 0){
    if(op != 2){
      op=2
    }else{
      op=0
    }
}
  if(mouseX > 70 && mouseX < 70+50 && mouseY > 15 && mouseY < 15+50 && tl ==0){
    if(op != 3){
      op=3
    }else{
      op=0
    }
  }
  if(tl == 1 && cont>30){
    jog=1
  }
}
function jogo(){
  console.log(jog)
  cont=cont+1
  sec=parseInt(cont/30)
  money3=money2.toFixed(2)
  if(money3==troco && sec== 4){
    fala= "Oi, bom dia"
    fase=fase+1
    cont=0
    cont=cont+1
    jog=0
    money3=0
    troco=1
  }
  if(sec>8 && fase<11 || jog == 1){
  textFont('Arial')
  background(onibus)
// Controle de valores    
  if(fase == 1 && jog == 0){
    condicao=1
    pass= 7.50
    money=20 
    money2=0
    
  }
  if(fase == 2 && jog == 0){
    pass= 4.50
    condicao=2
    money=10
    money2=0
  }
  if(fase == 3 && jog == 0){
    pass= 5.50
    money=10
    money2=0
    condicao=2
  }
   if(fase == 4 && jog == 0){
    pass= 10.50
    money=20
    condicao=1
    money2=0
  }
   if(fase == 5 && jog == 0){
    pass= 2
    money=2
    condicao=2
    money2=0
  }
   if(fase == 6 && jog == 0){
    pass= 8.50
    money=10
    condicao=1
    money2=0
  }
   if(fase == 7 && jog == 0){
    pass= 6.50
    money=15
    condicao=3
    money2=0
  }
   if(fase == 8 && jog == 0){
    pass= 1.50
    money=2
    condicao=1
    money2=0
  }
   if(fase == 9 && jog == 0){
    pass= 7.50
    money=8
    condicao=3
    money2=0
  }
   if(fase == 10 && jog == 0){
    pass= 4.50
    money=10
    condicao=2
    money2=0
  }
  if(nivel==3){
    if(condicao == 1){
      troco=money-pass
    }
    if(condicao==2){
      troco=money-(pass/2)
    }
    if(condicao == 3){
      troco=money
    }
}else{
  troco=money-pass
} 
// Controle de personagens e falas
  if(fase == 1 ){
    image(per1, l, a, l1, a1)
    rect(420,180,210,90,20,15,10,5)
    text(fala,430,230)
    if(sec>9){
      fala="Te dei "+money+" reais!"
    }
  }
  if(fase == 2){
    image(per2, l, a, l1, a1)
    rect(450,180,180,90,20,15,10,5)
    text(fala,460,230)
    if(sec>9){
      fala="Te dei "+money+" reais!"
    }
  }
  if(fase == 3){
    image(per3, l, a, l1, a1)
    rect(450,180,180,90,20,15,10,5)
    text(fala,460,230)
    if(sec>9){
      fala="Te dei "+money+" reais!"
    }
  }
  if(fase == 4){
    image(per4, l, a, l1, a1)
    rect(450,180,180,90,20,15,10,5)
    text(fala,460,230)
    if(sec>9){
      fala="Te dei "+money+" reais!"
    }
  }
  if(fase == 5){
    image(per5, l, a, l1, a1)
    rect(450,180,180,90,20,15,10,5)
    text(fala,460,230)
    if(sec>9){
      fala="Te dei "+money+" reais!"
    }
  }
  if(fase == 6){
    image(per6, l, a, l1, a1)
    rect(450,180,180,90,20,15,10,5)
    text(fala,460,230)
    if(sec>9){
      fala="Te dei "+money+" reais!"
    }
  }
  if(fase == 7){
    image(per7, l, a, l1, a1)
    rect(450,180,180,90,20,15,10,5)
    text(fala,460,230)
    if(sec>9){
      fala="Te dei "+money+" reais!"
    }
  }
  if(fase == 8){
    image(per8, l, a, l1, a1)
    rect(450,180,180,90,20,15,10,5)
    text(fala,460,230)
    if(sec>9){
      fala="Te dei "+money+" reais!"
    }
  }
  if(fase == 9){
    image(per9, l, a, l1, a1)
    rect(450,180,180,90,20,15,10,5)
    text(fala,460,230)
    if(sec>9){
      fala="Te dei "+money+" reais!"
    }
    
  }
  if(fase == 10){
    image(per10, l, a, l1, a1)
    rect(450,180,180,90,20,15,10,5)
    text(fala,460,230)
    if(sec>9){
      fala="Te dei "+money+" reais!"
    }
  }
// Formatação da fase
  fill(0, 150)
  rect(50, 50 , 550, 50,20) 
  rect(5,410,630,70,20)
  fill(255, 204, 0)
  rect(170, 57, 100, 35, 20)
  rect(5, 350, 240, 70, 20)
  rect(455, 420, 170, 50 , 20)
  if(nivel==3){
  fill(0, 150)
  rect(50, 95, 250, 50, 20)
  fill(255, 204, 0)
  rect(160, 100, 120, 40, 20)
  fill(245)
  stroke(51)
  text("CONDIÇÃO:",55,130)
  if(condicao==1){
    textSize(20)
    stroke(51)
    fill(245)
    text("Normal",190, 125)
  }
    if(condicao==2){
    textSize(20)
    stroke(51)
    fill(245)
    text("Estudante",175, 125)
  }
    if(condicao==3){
    textSize(20)
    stroke(51)
    fill(245)
    text("idoso",190, 125)
  }
  }
  noErase()
  stroke(51)
  textSize(18)
  fill(245)
  text("PASSAGEM:", 65 , 80)
  text("FASE"+"\n"+"   "+fase, 300 , 70)
  text("  TROCO"+"\n"+"PASSADO:",370, 440)
  textSize(20)
  text("R$ "+pass.toFixed(2),180,80)
  text("R$ "+money3, 480, 450)
  image(reais2, -50, 360, 240,180)
  image(reais5,50,360,240,180)
  image(reais10,150,360,240,180)
  image(moeda25,-70, 295, 240, 180)
  image(moeda50, -10, 285, 260, 200)
  image(moeda1, 75, 295 ,240, 180)
  fill(0,128,0)
  circle(490,395,40)
  fill(255,0,0)
  rect(520,375,100,40,20)
  fill(41)
  text("Limpar",540,400)
  fill(245)
  image(conf01, 5, 10, 50,50)
// Sistema de niveis e vida
  if(nivel>1){
    text("VIDAS:", 400 , 80)
  }
  if(vida==3 && nivel>1){
    image(core, 465, 60, 30, 30)
    image(core, 495, 60, 30, 30)
    image(core, 525, 60, 30, 30)
  }else{
    if(vida==2 && nivel>1){
    image(core, 465, 60, 30, 30)
    image(core, 495, 60, 30, 30)
    }else{
      if(vida ==1 && nivel>1){
    image(core, 465, 60, 30, 30)
      }
    }
    if(vida==0){
  background(busbc)
  textFont(fonte)
  textSize(80)
  fill(0, 150)
  noStroke()
  rect(40, 130, 580, 200, 20)
  fill(245)
  text("Fim De Jogo"+"\n"+"Voce perdeu!",60,200)
    if(sec>5){
      fase=1
      vida=3
      tl=0
    }
  }
}
// Outros sistemas    
  if(mouseX > 5 && mouseX < 5+50 && mouseY > 10 && mouseY < 10+50 && tl == 1){
    image(conf02, 5, 10, 50, 50)
}
  if(gobc == 1){
    fill(245)
    erase(200)
    rect(50,50,550,350)
    noErase()
    fill(0,150)
    rect(200,330,260,40, 20)
    textSize(30)
    fill(51)
    text("CONFIGURAÇÕES",220,90)
    fill(245)
    text("sair para o menu", 220, 360)
    }
}else{
 if(sec<8 && fase<11){
  background(busbc)
   if(fase == 1 && jog == 0 && sec<5){
     textFont('Arial')
     textSize(25)
     fill(0, 150)
     noStroke()
     rect(20,185,615,150,20)
     stroke(0)
     fill(245)
  text("Voĉe é um cobrador de onibus, passe todos os trocos"+ "\n"+"corretamente para avançar de fase e vencer o jogo."+"\n"+"\n"+"Boa Sorte!", 30, 220)
   }else{
  textFont(fonte)
  textSize(80)
  fill(0, 150)
  noStroke()
  rect(180, 130, 240,200, 20)
  fill(245)
  text("Fase"+"\n"+"    "+fase,200,200)
   }
}
  if(fase==11){
    background(busbc)
  textFont(fonte)
  textSize(80)
  fill(0, 150)
  noStroke()
  rect(80, 180, 530, 100, 20)
  fill(245)
  text("Fim De Jogo",100,250)
    if(sec>5){
      tl=0
    }
  }
}
}


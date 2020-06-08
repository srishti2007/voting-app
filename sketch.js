var canvas;
var database;
var name1, email, age, gender, continuebutton;
var y1, y2, y3, y4;
var n1, n2, n3, n4;
var male, female;
var sumbit;
var q1, q2, q3, q4;

function setup(){

  canvas = createCanvas(850, 550);

  database = firebase.database();

  name1 = createInput('name');
  name1.position(150, 65);

  age = createInput('age');
  age.position(150, 85);

  gender = createInput('gender');
  gender.position(150, 105);

  email = createInput('email Id');
  email.position(150, 125);
  
   male = createRadio();
   male.option('male');
   male.position(190, 105);  

   female = createRadio();
   female.option('female');
   female.position(240, 105);       

    y1 = createRadio();
    y1.option('yes');
    y1.position(172, 263);

    
    y2 = createRadio();
    y2.option('yes');
    y2.position(172, 345);

       
    y3 = createRadio();
    y3.option('yes');
    y3.position(172, 427);
   
    y4 = createRadio();
    y4.option('yes');
    y4.position(172, 510);

    n1 = createRadio();
    n1.option('no');
    n1.position(222, 263);

    
    n2 = createRadio();
    n2.option('no');
    n2.position(222, 345);

       
    n3 = createRadio();
    n3.option('no');
    n3.position(222, 427);
   
    n4 = createRadio();
    n4.option('no');
    n4.position(222, 510);

    q1 = createElement('h3');
    q1.html(" Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
    q1.position(10, 200);
    
    q2 = createElement('h3');
    q2.html(" Q2. Would you be willing to contribute a small amount every month for such a program?");
    q2.position(10, 280);

    q2 = createElement('h3');
    q2.html(" Q3. Do you think electronics should be allowed in school?");
    q2.position(10, 360);

    q2 = createElement('h3');
    q2.html(" Q4. Do you think lunch breaks should be longer?");
    q2.position(10, 440);

    sumbit = createButton('sumbit');
    sumbit.position(180,550);
    sumbit.mousePressed(clearAll);

    var player1Ref = database.ref('player1');
    player1Ref.on('value').set({
      player1: [name1, email,age]
    });

    var playerCount = database.ref('playerCount').set({
      playerCount : playerCount += 1
    });
}

function draw(){
  
  background(215, 17, 255);
  
}    

function clearAll(){
  name1.hide();
  email.hide();
  age.hide();
  gender.hide();
  continuebutton.hide();
  q1.hide();
  q2.hide();
  q3.hide();
  q4.hide();
  n1.hide();
  n2.hide();
  n3.hide();
  n4.hide();
  y1.hide();
  y2.hide();
  y3.hide();
  y4.hide();
  male.hide();
  female.hide();
}
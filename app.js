'use strict'

var allBusSmallPic =[];
var bussmallpic = document.getElementById('bussmallpic');
var bussmallpic0 = document.getElementById('bussmallpic0');
var bussmallpic1 = document.getElementById('bussmallpic1');
var list = document.getElementById('options');
var totalClick = 0;
var i=0;

function Product(name) {
    this.filepath= `bussmallpic/${name}`;
    this.name= name;
    this.view = 0;
    allBusSmallPic.push(this);
}

new Product('bag.jpg');
new Product('banana.jpg');
new Product('bathroom.jpg');
new Product('boots.jpg');
new Product('breakfast.jpg');
new Product('bubblegum.jpg');
new Product('chair.jpg');
new Product('cthulhu.jpg');
new Product('dog-duck.jpg');
new Product('dragon.jpg');
new Product('pen.jpg');
new Product('pet-sweep.jpg');
new Product('scissors.jpg');
new Product('shark.jpg');
new Product('sweep.png');
new Product('tauntaun.jpg');
new Product('unicorn.jpg');
new Product('usb.gif');
new Product('water-can.jpg');
new Product('wine-glass.jpg');

var imagestags= [bussmallpic, bussmallpic0, bussmallpic1];
var preRandomNumber =[];

function showRandomPic(){
    var randomNumbers =[];

    for (i = 0; i < 3; i++) {
        var random = Math.floor(Math.random() * allBusSmallPic.length);
        imagestags[i].src = allBusSmallPic[random].filepath;
        imagestags[i].alt = allBusSmallPic[random].name;
        imagestags[i].title = allBusSmallPic[random].name;
        allBusSmallPic[random].views++;
    
        if (random === randomNumbers[0] || random === randomNumbers[1] || random === randomNumbers[2]) {
          i--;
        } else if (random === preRandomNumber[0] || random === preRandomNumber[1] || random === preRandomNumber[2]) {
         
          i--;
        } else {
          randomNumbers.push(random);
        }
      }
      preRandomNumber = randomNumbers.slice(0);
      console.log(preRandomNumber);
    }
showRandomPic();


list.addEventListener('click', handleClick);


function handleClick(event){
    console.log(event.target.alt);
    totalClick++;
    for(var i; i < allBusSmallPic.length; i++){
      if(event.target.alt = allBusSmallPic[i].name){
          console.log('was clicked', event.target.alt);
          allBusSmallPic[i].click++
      }
    }
    if(totalClick === 25){
        list.removeEventListener('click', handleClick);
        return;
    }
    showRandomPic();
}
    showRandomPic();

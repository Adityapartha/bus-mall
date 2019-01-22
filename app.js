'use strict'

var allBusSmallPic =[];
var bussmallpic = document.getElementById('bussmallpic');
var bussmallpic0 = document.getElementById('bussmallpic0');
var bussmallpic1 = document.getElementById('bussmallpic1');
var list = document.getElementById('options');

function BusSmallPic(name) {
    this.filepath= `bussmallpic/${name}`;
    this.name= name;
    this.view = 0;
    allBusSmallPic.push(this);
}

new BusSmallPic('bag.jpg');
new BusSmallPic('banana.jpg');
new BusSmallPic('bathroom.jpg');
new BusSmallPic('boots.jpg');
new BusSmallPic('breakfast.jpg');
new BusSmallPic('bubblegum.jpg');
new BusSmallPic('chair.jpg');
new BusSmallPic('cthulhu.jpg');
new BusSmallPic('dog-duck.jpg');
new BusSmallPic('dragon.jpg');
new BusSmallPic('pen.jpg');
new BusSmallPic('pet-sweep.jpg');
new BusSmallPic('scissors.jpg');
new BusSmallPic('shark.jpg');
new BusSmallPic('sweep.png');
new BusSmallPic('tauntaun.jpg');
new BusSmallPic('unicorn.jpg');
new BusSmallPic('usb.gif');
new BusSmallPic('water-can.jpg');
new BusSmallPic('wine-glass.jpg');

// function showRandomBusPic(){
//     var random = Math.floor(Math.random() * allBusSmallPic.length);
//     bussmallpic.src = allBusSmallPic[random].filepath;
//     bussmallpic.alt = allBusSmallPic[random].name;
//     bussmallpic.title = allBusSmallPic[random].name;
//     allBusSmallPic[random].view++;
 
var imagestags= [bussmallpic, bussmallpic0, bussmallpic1];

var num1 = Math.floor(Math.random() * allBusSmallPic.length);
var num2 = Math.floor(Math.random() * allBusSmallPic.length);
var num3 = Math.floor(Math.random() * allBusSmallPic.length);

function showRandomBusPic(){
    num1 = Math.floor(Math.random() * allBusSmallPic.length);

    imagestags[0].src = allBusSmallPic[num1].filepath;
    imagestags[0].alt = allBusSmallPic[num1].name;
    imagestags[0].title = allBusSmallPic[num1].name;
    allBusSmallPic[num1].view++;
    
    
    while(num2 === num1){
        num2 = Math.floor(Math.random() * allBusSmallPic.length);
    };
    imagestags[1].src = allBusSmallPic[num2].filepath;
    imagestags[1].alt = allBusSmallPic[num2].name;
    imagestags[1].title = allBusSmallPic[num2].name;
    allBusSmallPic[num2].view++;
   
        
    while( num3 === num1 || num3 === num2){
        num3 = Math.floor(Math.random() * allBusSmallPic.length);
    };
    imagestags[2].src = allBusSmallPic[num3].filepath;
    imagestags[2].alt = allBusSmallPic[num3].name;
    imagestags[2].title = allBusSmallPic[num3].name;
    allBusSmallPic[num3].view++;
    
}

list.addEventListener('click', handleClick);
showRandomBusPic()

function handleClick(event){
    console.log(event.target);
    showRandomBusPic();
}

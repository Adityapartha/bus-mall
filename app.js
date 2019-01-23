
'use strict'

var allBusSmallPic =[];
var bussmallpic = document.getElementById('bussmallpic');
var bussmallpic0 = document.getElementById('bussmallpic0');
var bussmallpic1 = document.getElementById('bussmallpic1');
var list = document.getElementById('options');
var totalClick = 0;
var i=0;
var myChart;

createChart();


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


var votes = [];
var title = [];


var imagestags= [bussmallpic, bussmallpic0, bussmallpic1];
var preRandomNumber =[];

function showRandomPic(){
    var randomNumbers =[];

    for (i = 0; i < 3; i++) {
        var random = Math.floor(Math.random() * allBusSmallPic.length);
        imagestags[i].src = allBusSmallPic[random].filepath;
        imagestags[i].alt = allBusSmallPic[random].name;
        imagestags[i].title = allBusSmallPic[random].name;
        allBusSmallPic[random].view++;
    
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
    console.log(totalClick);
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

function handlesClick(event) {
    for( var i = 0; i < 25; i++){
        if(event.target.alt === allBusSmallPic[i].name){
            allBusSmallPic[i].view++;
        }
    }
}
totalClick++;
if(totalClick === 25){
    option.removeEventListener('click', handleClick);
    console.log('hy');
    updateChartArray();
    
}
showRandomPic();

createChart();





function updateChartArray(){
    
    // console.log('hi');
    for (var i =0; i< allBusSmallPic.length; i++){
        title[i]  = allBusSmallPic[i].name;
        votes[i] = allBusSmallPic[i].view;
    }
}

function tallyVotes(thisPic) {
       for(var i =0; i < allBusSmallPic.length; i++){
           if(thisPic === allBusSmallPic[i].click){
               allBusSmallPic[i].click++;
               updateChartArray();
   }
       }
   }
//    var data = {
//        labels: title,
//        datasets:[{
//            data: votes,
//        }]
//    }




function createChart(){

var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['bag', 'banana', 'bathroom', 'boots', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'usb', 'water-can'],
        datasets: [{
            label: 'title',
            data: votes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

    showRandomPic();



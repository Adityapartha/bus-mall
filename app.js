'use strict';
if(localStorage.allBusSmallPicLoc){
    console.log('stored data');
    var allBusSmallPic = JSON.parse(localStorage.allBusSmallPicLoc);
}else{
   var allBusSmallPic =[];
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
}

var bussmallpic = document.getElementById('bussmallpic');
var bussmallpic0 = document.getElementById('bussmallpic0');
var bussmallpic1 = document.getElementById('bussmallpic1');
var list = document.getElementById('options');
var totalClick = 0;
var votes = [];
var imagestags= [bussmallpic, bussmallpic0, bussmallpic1];
var preRandomNumber =[];


function Product(name) {
    this.filepath= `bussmallpic/${name}`;
    this.name= name;
    this.view = 0;
    this.click = 0;
    allBusSmallPic.push(this);
}



var render =JSON.parse( localStorage.getItem ('ProductStringified'));

if(render === null ){ 
    showRandomPic();
}else{
    allBusSmallPic = render;
    showRandomPic();
}


var preRandomNumber =[];

function showRandomPic(){
    var randomNumbers =[];

    for (var i = 0; i < imagestags.length; i++) {
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
    }


list.addEventListener('click', handleClick);
function handleClick(event){
    totalClick++;
    // console.log(totalClick);
    for(var i = 0; i < allBusSmallPic.length; i++){
      if(event.target.alt === allBusSmallPic[i].name){
          console.log('was clicked', event.target.alt);
          allBusSmallPic[i].click++
      }
      localStorage.allBusSmallPicLoc = JSON.stringify(allBusSmallPic);

    }
    if(totalClick === 25){
        list.removeEventListener('click', handleClick);
        updateChartArray();
    var ctx = document.getElementById('myChart')
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['bag','banana', 'bathroom','boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
            datasets: [{
                label: 'Total votes',
                data: votes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
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
    localStorage.setItem ('ProductStringified', JSON.stringify(allBusSmallPic));
    return;
}

    showRandomPic();
}


function updateChartArray(){
    
    for (var i =0; i< allBusSmallPic.length; i++){
      votes[i] = allBusSmallPic[i].click;
    }
}


  



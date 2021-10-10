const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const body = document.body;

let intId = null;
let isActive = false;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  
startButton.addEventListener('click', onStartButtonClick);

 
function onStartButtonClick(){
    if(isActive){return};
    isActive = true;
intId = setInterval(() => {
  let randomColor = colors[randomIntegerFromInterval(0, colors.length-1)];

  body.style.backgroundColor = randomColor;

  stopButton.addEventListener('click', onStopButtonClick)
}, 1000);
  }

  function onStopButtonClick(event){
   clearInterval(intId);
   isActive = false;
   stopButton.removeEventListener('click', onStopButtonClick)
 }
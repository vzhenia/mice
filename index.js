const buttBack = document.getElementById('back')
buttBack.addEventListener('click', ()=>{back()})

const buttStep = document.getElementById('step')
let clicks = (function(){
  let click = 1;
  return function(){
  	if (click === 2) click = 0;
    return click++;
  }
})();
buttStep.addEventListener('click', ()=>{step()})

function back() {
	const mouse = document.getElementById('mouse');
	mouse.style.left = '10px';
}

function step() {
  const num = clicks();
  const shortLegs = document.getElementById('shortLegs');
  const longLegs = document.getElementById('longLegs');
  if (num % 2 === 1) {
	shortLegs.style.left = '60px';
	longLegs.style.left = '80px';
  }
  else{
  	shortLegs.style.left = '80px';
	longLegs.style.left = '60px';
  }
  shortLegs.style.transitionProperty = 'left';
  shortLegs.style.transitionDuration = "0.7s";
  longLegs.style.transitionProperty = 'left';
  longLegs.style.transitionDuration = "0.7s";
  move();
}

let mouseMove = (function(){
  let mouseMove = 0;
  return function(){
  	const back = document.getElementById('back');
	back.addEventListener('click', ()=> mouseMove=0);
	return mouseMove+=20;
  }
})();

function move() {
  const mouse = document.getElementById('mouse');
  const mousePosition = mouseMove();
  let pos = mousePosition;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos - mousePosition === 20) {
      clearInterval(id);
    } else {
      pos++;
      mouse.style.left = `${pos}px`;
    }
  }
}

const buttPlay = document.getElementById('play')
const buttStop = document.getElementById('stop')

let walk;
buttPlay.addEventListener('click', () => {
	console.log('playing')
	walk = setInterval(() => { step() }, 500)
})

buttStop.addEventListener('click', () => {
	console.log('stopping')
 	clearInterval(walk)
})

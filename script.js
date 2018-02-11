const context = document.querySelector('#canvas').getContext('2d');
// context.fillStyle = '#ffc0cb';
// context.fillRect(0,0, 50, 50); //Draw rectangale
//
//Draw Circle using arc
//context.arc(50,50,20, 0, 0, true);
//Multiple Cirlce
// context.arc(20,120,10,0 , Math.PI*2);
// context.fill();
// context.closePath();

// context.beginPath();

// context.arc(120,20,10,0 , Math.PI*2);
// context.stroke();
// context.strokeStyle = "pink";

// context.closePath();

//PIE
//
//Draw Arc
// context.beginPath();
// context.moveTo(100, 70);
// context.lineTo(100,20);
// context.arcTo(150,20,150,70,50);
// context.lineTo(100,70);
// context.fill();
// context.closePath();

const coords =document.querySelector('.display-coords');
context.fillStyle = 'pink';

context.fillRect(0,0,canvas.width,canvas.height);

const getCoords = (event) => {
  const container = canvas.getBoundingClientRect();
  const x = event.clientX - container.left;
  const y = event.clientY - container.top;
  coords.textContent = `${x},${y}`;
};

canvas.addEventListener('click',getCoords);





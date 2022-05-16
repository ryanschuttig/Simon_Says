const topLeft = document.querySelector('.top-left');
const topRight = document.querySelector('.top-right');
const bottomLeft = document.querySelector('.bottom-left');
const bottomRight = document.querySelector('.bottom-right');

// get random circle
const randomCircle = () => {
  const circles = [topLeft, topRight, bottomLeft, bottomRight];
  return circles[parseInt(Math.random() * circles.length)];
};

// start sequence with a random circle
const sequence = [randomCircle()];
// array to keep track of selected circles
let sequenceClick = [...sequence];

// loops through sequence to flash each circle
const flash = (circle) => {
  return new Promise((resolve) => {
    circle.className += ' select';
    setTimeout(() => {
      circle.className = circle.className.replace(' select', '');
      setTimeout(() => {
        resolve();
      }, 250);
    }, 1000);
  });
};

let canClick = false;

const circleClicked = (circleClicked) => {
  if (!canClick) return;
  const selectedCircle = sequenceClick.shift();
  if (selectedCircle === circleClicked) {
    if (sequenceClick.length === 0) {
      //   start new round
      sequence.push(randomCircle());
      sequenceClick = [...sequence];
      startFlash();
    }
  } else {
    //   end game
    alert('Game Over');
  }
};

const startFlash = async () => {
  canClick = false;
  for (const circle of sequence) {
    await flash(circle);
  }
  canClick = true;
};

startFlash();

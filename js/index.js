const topLeft = document.querySelector('.top-left');
const topRight = document.querySelector('.top-right');
const bottomLeft = document.querySelector('.bottom-left');
const bottomRight = document.querySelector('.bottom-right');

const randomCircle = () => {
  const circles = [topLeft, topRight, bottomLeft, bottomRight];
  return circles[parseInt(Math.random() * circles.length)];
};

const sequence = [
  randomCircle(),
  randomCircle(),
  randomCircle(),
  randomCircle(),
];

const flash = (circle) => {
  return new Promise((resolve, reject) => {
    circle.className += ' select';
    setTimeout(() => {
      circle.className = circle.className.replace(' select', '');
      setTimeout(() => {
        resolve();
      }, 250);
    }, 1000);
  });
};

const main = async () => {
  for (const circle of sequence) {
    await flash(circle);
  }
};

main();

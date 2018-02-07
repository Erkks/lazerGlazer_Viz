let sky = document.querySelector('a-sky');
let pillar = document.querySelector('a-cylinder')
let animationDuration = 15000

// random num generator
function getRandomNumber(x, y) {
  return Math.floor(Math.random() * x + y);
}

// get random hex color
function getRandomColor() {
  let letters = '0123456789abcdef';
  let randomColor = '';
  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}



// set pillar values
pillar.setAttribute('color', `#${getRandomColor()}`);
pillar.setAttribute('open-ended', `true`);
pillar.setAttribute('radius', `1.5`);
pillar.setAttribute('height', `10000`);
pillar.setAttribute('animation__color', `property: color; dir: alternate; dur: ${animationDuration}; easing: easeInOutSine; loop: true; to: #${getRandomColor()}`);

// set sky values
sky.setAttribute('color', `#${getRandomColor()}`);
sky.setAttribute('animation__color', `property: color; dir: alternate; dur: ${animationDuration}; easing: easeInOutSine; loop: true; to: #${getRandomColor()}`);
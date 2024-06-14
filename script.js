const waterRipple = document.getElementById('water-ripple');

// Replace with your desired water ripple characters
const rippleChars = ['~', '-', '\\', '|', '/', '~'];

let rippleX = Math.floor(waterRipple.clientWidth / 2);
let rippleY = Math.floor(waterRipple.clientHeight / 2);
let rippleRadius = 0;
let rippleInterval;

function generateRipple() {
  waterRipple.textContent = '';
  for (let y = 0; y < waterRipple.clientHeight; y++) {
    let row = '';
    for (let x = 0; x < waterRipple.clientWidth; x++) {
      const distance = Math.sqrt(Math.pow(x - rippleX, 2) + Math.pow(y - rippleY, 2));
      if (distance <= rippleRadius) {
        const charIndex = Math.floor(distance / rippleRadius * (rippleChars.length - 1));
        row += rippleChars[charIndex];
      } else {
        row += ' ';
      }
    }
    waterRipple.textContent += row + '\n';
  }
  rippleRadius++;
  if (rippleRadius >= Math.min(waterRipple.clientWidth, waterRipple.clientHeight) / 2) {
    clearInterval(rippleInterval);
  }
}

rippleInterval = setInterval(generateRipple, 50); // Adjust speed as needed

<script>
// ASCII text to animate
const asciiText = "STONKAPE";
// Get the element that will contain the ASCII text
const asciiContainer = document.querySelector('.ascii-animation');

// Function to generate a frame of the animation
function animateAscii(frame) {
  let output = '';
  // Generate each line of the frame
  for (let i = 0; i < asciiText.length; i++) {
    // Calculate the offset for this character
    const offset = Math.sin((frame + i) / 10) * 5;
    // Generate spaces to create the offset
    const spaces = ' '.repeat(Math.abs(offset));
    // Add the character with the offset to the output
    output += spaces + asciiText[i] + '\n';
  }
  // Update the container with the new frame
  asciiContainer.textContent = output;
}

// Start the animation
let frame = 0;
setInterval(() => {
  animateAscii(frame++);
}, 100); // Update every 100ms
</script>

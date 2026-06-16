const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

// Initialize the counter
let count = 1;

// Increment the counter and update the display when the button is clicked
incrementButton.addEventListener('click', function () {
    count += 1; // Increment the counter by 1
    counterDisplay.textContent = count; // Update the counter display
});

// Decrement the counter — prevent negative numbers
decrementButton.addEventListener("click", function () {
    if (count > 1) {
      count -= 1;
      counterDisplay.textContent = count;
    }
  });
  
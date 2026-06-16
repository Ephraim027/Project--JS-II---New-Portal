

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const numberInput = document.getElementById("number");
const checkInInput = document.getElementById("checkin");
const checkOutInput = document.getElementById("checkout");
const requestInput = document.getElementById("textarea");
const paymentButton = document.getElementById("paymentButton"); 
const greetingMessage = document.getElementById("greetingMessage");

// Regex patterns
const namePattern = /^[a-zA-Z\s]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numberPattern = /^\d{11}$/;

// Toast function

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

paymentButton.addEventListener("click", function (event) {
  event.preventDefault();

// Function to check input against a regex pattern
// function isValidInput(value, pattern) {
//   return pattern.test(value);
// }

// Add event listener to payment button
// paymentButton.addEventListener("click", function (event) {
//   event.preventDefault(); // Prevent form from submitting

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const number = numberInput.value.trim();
  const checkIn = checkInInput.value;
  const checkOut = checkOutInput.value;
  const request = requestInput.value.trim();

  // Validations
  if (!isValidInput(username, namePattern)) {
    greetingMessage.textContent = "❌ Please enter a valid name (letters only).";
    greetingMessage.style.color = "red";
    return;
  }

  if (!isValidInput(email, emailPattern)) {
    greetingMessage.textContent = "❌ Please enter a valid email.";
    greetingMessage.style.color = "red";
    return;
  }

  if (!isValidInput(number, numberPattern)) {
    greetingMessage.textContent = "❌ Please enter a 11-digit phone number.";
    greetingMessage.style.color = "red";
    return;
  }

  if (!checkIn || !checkOut) {
    greetingMessage.textContent = "❌ Please select both check-in and check-out dates.";
    greetingMessage.style.color = "red";
    return;
  }

  if (new Date(checkOut) <= new Date(checkIn)) {
    greetingMessage.textContent = "❌ Check-out date must be after check-in date.";
    greetingMessage.style.color = "red";
    return;
  }

  if (request.length > 0 && request.length < 5) {
    greetingMessage.textContent = "❌ Special request must be at least 5 characters.";
    greetingMessage.style.color = "red";
    return;
  }

    if (request.length > 0 && request.length < 5) {
    greetingMessage.textContent = "❌ Special request must be at least 5 characters.";
    greetingMessage.style.color = "red";
    return;
  }

  // Success message
  // greetingMessage.textContent = `✅ Reservation successful, ${username}! Proceed to Payment.`;
  // greetingMessage.style.color = "green";

  showToast("🏖️ Reservation details saved! Redirecting to payment...");

  // Show alert and redirect after delay
  setTimeout(() => {
    // alert("Thank you for your reservation! Proceeding to payment...");
    window.location.href = "BookRoom1.html"; // Replace with your real page
  }, 3000);

  // Optional: Clear form
  usernameInput.value = "";
  emailInput.value = "";
  numberInput.value = "";
  checkInInput.value = "";
  checkOutInput.value = "";
  requestInput.value = "";
});

// Helper function
function isValidInput(value, pattern) {
  return pattern.test(value);
}



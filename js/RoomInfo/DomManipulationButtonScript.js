const addParagraphButton = document.getElementById("addParagraphButton");
const paragraphContainer = document.getElementById("paragraphContainer");

addParagraphButton.addEventListener("click", function (event) {
  // Prevent form from submitting
  event.preventDefault();

  // Check if a paragraph already exists
  if (!paragraphContainer.querySelector("p")) {
    // Create a new paragraph element
    const newParagraph = document.createElement("p");

    // Set its text content
    newParagraph.textContent = "🎉 Congratulations! You get 10% off your stay!";

    // Style the paragraph
    newParagraph.style.color = "green";
    newParagraph.style.fontWeight = "bold";

    // Append the paragraph to the container
    paragraphContainer.appendChild(newParagraph);
  }
});


const resort_popup = document.getElementById("resort_popup");
const popupImg = document.getElementById("popup-img");
const popupCaption = document.getElementById("resortpopup-caption");
const closeBtn = document.getElementById("resortclose-btn");

// Add click event to each image in the gallery
document.querySelectorAll(".resortgallery img").forEach(img => {
    img.addEventListener("click", () => {
        popupImg.src = img.src;
        popupCaption.textContent = img.dataset.caption;
        resort_popup.style.display = "flex";
    });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", () => {
    resort_popup.style.display = "none";
});


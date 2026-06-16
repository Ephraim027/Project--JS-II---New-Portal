const beach_popup = document.getElementById("beach_popup");
const popupImg = document.getElementById("popup-img");
const popupCaption = document.getElementById("beachpopup-caption");
const closeBtn = document.getElementById("beachclose-btn");

// Add click event to each image in the gallery
document.querySelectorAll(".beachgallery img").forEach(img => {
    img.addEventListener("click", () => {
        popupImg.src = img.src;
        popupCaption.textContent = img.dataset.caption;
        beach_popup.style.display = "flex";
    });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", () => {
    beach_popup.style.display = "none";
});


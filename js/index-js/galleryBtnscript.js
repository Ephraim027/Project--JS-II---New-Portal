const galleryBtn = document.getElementById("galleryBtn");
const dropdownContent = document.getElementById("dropdownContent");

galleryBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});
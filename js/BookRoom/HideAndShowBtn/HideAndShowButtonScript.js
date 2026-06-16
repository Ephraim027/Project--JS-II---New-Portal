const menu = document.getElementById('Price');
const menuButton = document.getElementById('PricesButton');


menuButton.addEventListener('click', function () {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }    
});


// document.addEventListener("DOMContentLoaded", function () {
//     const priceList = document.getElementById("Price");
//     const priceButton = document.getElementById("PricesButton");

//     priceButton.addEventListener("click", function (event) {
//         // Get button position
//         const buttonRect = priceButton.getBoundingClientRect();

//         // Position the list aligned with the button
//         priceList.style.position = "absolute";
//         priceList.style.top = `${buttonRect.top + window.scrollY + 35}px`; // Align with button top
//         priceList.style.left = `${buttonRect.left + window.scrollX + -60}px`; // Align with button left
//         priceList.style.display = priceList.style.display === "block" ? "none" : "block";

//         // Prevent immediate closing
//         event.stopPropagation();
//     });

//     // Hide list when clicking outside
//     document.addEventListener("click", function (event) {
//         if (!priceButton.contains(event.target) && !priceList.contains(event.target)) {
//             priceList.style.display = "none";
//         }
//     });
// });





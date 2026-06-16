document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("calculateBtn");

    button.addEventListener("click", function () {
        const principal = parseFloat(document.getElementById("principal").value);
        const years = parseInt(document.getElementById("years").value);
        const rate = 10; // 10% per year

        const resultDiv = document.getElementById("AnnualInterestResult");

        if (isNaN(principal) || isNaN(years)){
            resultDiv.innerText = "Please enter valid numbers.";
            return;  //isNaN means is not a number, return means would not accept letters and symbols
        }  
        
        const totalAmount = principal * (1 + (rate / 100) * years);
        const interest = totalAmount - principal;

        resultDiv.innerHTML = `
            Interest: ₱${interest.toFixed(2)} <br>
            Total Amount after ${years} years: ₱${totalAmount.toFixed(2)}
        `;
    });
});
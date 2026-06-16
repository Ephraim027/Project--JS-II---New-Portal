document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById('calculateBtn');
    calculateBtn.addEventListener('click', function () {
        const amount = parseFloat(document.getElementById('amount').value);
        const years = parseInt(document.getElementById('years').value);
        const interestRate = 0.10; // 10% per year

        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount");
            return;
        }

        const totalInterest = amount * interestRate * years;
        const totalPayment = amount + totalInterest;
        const yearlyPayment = totalPayment / years;
        const monthlyPayment = totalPayment / (years * 12);

        document.getElementById('MonthlyInterestResult').innerHTML = `
            <strong>Results:</strong><br>
            Total Interest : ₱${totalInterest.toFixed(2)}<br>
            Total Payment: ₱${totalPayment.toFixed(2)}<br>
            Yearly Payment: ₱${yearlyPayment.toFixed(2)}<br>
            <span style="color:green;">Monthly Payment: ₱${monthlyPayment.toFixed(2)}</span>
        `;
    });
});

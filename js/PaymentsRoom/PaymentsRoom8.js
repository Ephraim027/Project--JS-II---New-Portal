
const params = new URLSearchParams(window.location.search);

const roomName = params.get('room') || 'N/A';
const days = params.get('days') || '0';
const total = params.get('total') || '0';


// I-display sa HTML
document.getElementById('BookRoom_title').textContent = roomName;
document.getElementById('qty').textContent = days;
document.getElementById('paymentTotal').textContent = `₱ ${total}`;

// Back button
document.getElementById('backBtn').addEventListener('click', function() {
  window.location.href = "BookRoom8.html";
});

// Proceed to Payment
document.getElementById('payBtn').addEventListener('click', function() {
  alert(
    `Proceeding to payment...\n\nRoom: ${roomName}\nDays: ${days}\nTotal: ₱${total}`
  );
});

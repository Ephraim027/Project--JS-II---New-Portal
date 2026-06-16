

document.addEventListener('DOMContentLoaded', () => {

  const alertBookNowButton =
    document.getElementById('alertBookNowButton');
  const confirmModal =
    document.getElementById('confirmModal');
  const confirmOk =
    document.getElementById('confirmOk');
  const confirmCancel =
    document.getElementById('confirmCancel');

  // OPEN MODAL
  alertBookNowButton.addEventListener('click', () => {
    confirmModal.style.display = 'block';
  });

  // OK BUTTON → SEND DATA TO PAYMENT PAGE
  confirmOk.addEventListener('click', () => {

    const roomName =
      document.querySelector('.BookRoom_title').textContent;

    const days =
      document.getElementById('quantity').textContent;

    const total =
      document.getElementById('total').textContent;

    window.location.href =
      `PaymentsRoom10.html?room=${encodeURIComponent(roomName)}&days=${days}&total=${total}`;
  });

  // CANCEL
  confirmCancel.addEventListener('click', () => {
    confirmModal.style.display = 'none';
    alert("Booking canceled.");
  });

});
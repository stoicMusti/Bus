<script>
  // Function to generate QR code
  function generateQRCode() {
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";

  // Make the data very long to force larger QR version
  const longData =
    "nBus-1618-DirectIssue-nBus-1618-" +
    Date.now() +
    "-WestMidlands-Unlimited-Travel-NationalExpress-nBus-Scheme-Validation-Verification-Code-Active";

  new QRCode(qrContainer, {
    text: longData,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
  // Generate QR code initially
  generateQRCode();

  // Refresh QR code every ~3 seconds
  setInterval(generateQRCode, 2900);

  // Expiry timer
  function updateExpiry() {
    const now = new Date();

    const timeStr = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/London',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(now);

    const dateStr = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/London',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(now);

    document.getElementById('expiry-time').textContent =
      `${timeStr} ${dateStr}`;
  }

  updateExpiry();
  setInterval(updateExpiry, 1000);
</script>

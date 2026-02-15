<script>
  // Function to generate QR code
  function generateQRCode() {
    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = ""; // clear old QR code

    // Force version 15 so alignment square appears
    const qr = qrcode(15, 'H');

    qr.addData("nBus-1618-DirectIssue-nBus-1618-" + Date.now());
    qr.make();

    // create image inside your existing container
    qrContainer.innerHTML = qr.createImgTag(4, 0);

    // make image fill container perfectly
    const img = qrContainer.querySelector("img");
    img.style.width = "100%";
    img.style.height = "100%";
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

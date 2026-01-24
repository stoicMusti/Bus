// Generate QR code once
new QRCode(document.getElementById("qrcode"), {
  text: "nBus-1618-Unlimited-WestMidlands-" + Date.now(),
  width: 200,
  height: 200,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});

// Live expiry (current time)
function updateExpiry() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-GB', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const dateStr = now.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  document.getElementById('expiry-time').textContent = `${timeStr} ${dateStr}`;
}

// Update expiry immediately and every second
updateExpiry();
setInterval(updateExpiry, 1000);

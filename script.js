// Generate QR code
new QRCode(document.getElementById("qrcode"), {
  text: "nBus-1618-Unlimited-WestMidlands-" + Date.now(),
  width: 200,
  height: 200,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});

// Live expiry (current time + 24 hours)
function updateExpiry() {
  const now = new Date();
  const expiry = new Date(now.getTime() + 24 * 60 * 60 * 1000); // +24 hours
  const timeStr = expiry.toLocaleTimeString('en-GB', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const dateStr = expiry.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  document.getElementById('live-expiry').textContent = `${timeStr} ${dateStr}`;
}

updateExpiry();                    // Run immediately
setInterval(updateExpiry, 1000);   // Update every second

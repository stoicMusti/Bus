// Function to generate the Aztec Code (the "square in the middle" style)
function generateAztecCode() {
  try {
    // This uses the bwip-js library to render an Aztec barcode onto the canvas
    bwipjs.toCanvas('qrcode', {
      bcid:        'aztec',       // Sets the type to Aztec
      text:        'nBus-1618-DirectIssue-' + Date.now(), 
      scale:       6,             // Adjusts the resolution/size
      height:      50,            // Aspect ratio (Aztec is square)
      width:       50,
      includetext: false,         // Keeps the UI clean by hiding data text
    });
  } catch (e) {
    console.error("Barcode generation error:", e);
  }
}

// Initial generation
generateAztecCode();

// Refresh the code every 3 seconds to keep it "live"
setInterval(generateAztecCode, 3000);

// Live clock logic for the swaying expiry text
function updateExpiry() {
  const now = new Date();

  // Format: HH:MM:SS
  const timeStr = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(now);

  // Format: DD/MM/YYYY
  const dateStr = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(now);

  document.getElementById('expiry-time').textContent = `${timeStr} ${dateStr}`;
}

// Update clock immediately and then every second
updateExpiry();
setInterval(updateExpiry, 1000);

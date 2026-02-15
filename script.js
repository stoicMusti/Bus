// 1. Function to generate the Aztec Code (the "square in the middle")
function generateAztecCode() {
  const canvas = document.getElementById('qrcode');
  if (!canvas) return;

  try {
    // bwipjs renders the Aztec pattern specifically
    bwipjs.toCanvas(canvas, {
      bcid:        'aztec',       // Sets the barcode type to Aztec
      text:        'nBus-1618-DirectIssue-nBus-1618-' + Date.now(),
      scale:       5,             // Adjusts the size of the pixels
      height:      50,            // Aztec codes are square
      width:       50,
      includetext: false,         // Keeps the data text hidden
    });
  } catch (e) {
    console.error("Barcode generation error:", e);
  }
}

// 2. Initial generation and 3-second refresh to keep it "live"
generateAztecCode();
setInterval(generateAztecCode, 3000);

// 3. Clock logic for the swaying expiry timer
function updateExpiry() {
  const now = new Date();

  // Format: HH:MM:SS
  const timeStr = now.toLocaleTimeString('en-GB', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  // Format: DD/MM/YYYY
  const dateStr = now.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  // Update the text in the swaying element
  const expiryElement = document.getElementById('expiry-time');
  if (expiryElement) {
    expiryElement.textContent = `${timeStr} ${dateStr}`;
  }
}

// 4. Run the clock immediately and update it every second
updateExpiry();
setInterval(updateExpiry, 1000);

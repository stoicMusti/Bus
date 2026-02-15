// Function to generate QR code
function generateQRCode() {
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = ""; // clear old QR code

  new QRCode(qrContainer, {
    // ONLY CHANGE: longer text to force alignment square
    text:
      "nBus-1618-DirectIssue-nBus-1618-" +
      Date.now() +
      "-ABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890-" +
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890-" +
      "WESTMIDLANDS-VALIDATION-SECURE-PAYLOAD",

    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}

// Function to update expiry time
function updateExpiry() {
  const now = new Date();

  // expiry 3

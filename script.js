// Generate QR Code
function generateQR() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  const data = `Name: ${name}, Phone: ${phone}`;

  document.getElementById("qr").innerHTML = "";

  new QRCode(document.getElementById("qr"), {
    text: data,
    width: 200,
    height: 200
  });
}



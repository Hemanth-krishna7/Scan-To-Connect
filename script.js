const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const qrBox = document.getElementById("qrBox");

let qr;

phoneInput.addEventListener("input", () => {
  // Remove non-numeric characters
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");

  // Limit to 10 digits
  if (phoneInput.value.length > 10) {
    phoneInput.value = phoneInput.value.slice(0, 10);
  }
});


function updateQR() {
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  if (name === "" && phone === "") {
    qrBox.innerHTML = "";
    return;
  }

  const data = `Name: ${name}\nPhone: ${phone}`;

  qrBox.innerHTML = "";

  qr = new QRCode(qrBox, {
    text: data,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff"
  });
}

// Live experiment behavior
nameInput.addEventListener("input", updateQR);
phoneInput.addEventListener("input", updateQR);

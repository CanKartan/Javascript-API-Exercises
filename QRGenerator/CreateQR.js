

const card = document.querySelector(".card-wrapper");
const QRValue = document.querySelector("#QRValue");
const CreateButton = document.querySelector("#CreateButton");
const QRDiv = document.querySelector(".QR-wrapper");
const DowlandButton = document.querySelector("#DowlandButton");
const ClearButton = document.querySelector("#ClearButton");
let currentQR = null;


addLİsteners();
function addLİsteners() {
    this.CreateButton.addEventListener("click", Create);
    this.DowlandButton.addEventListener("click", DowlandQR);
    this.ClearButton.addEventListener("click", ClearAll);
}
function Create() {
    const qrValue = QRValue.value.trim();
    if (!qrValue) {
        alert("Lütfen Bir URL Ya da Link Giriniz");
        return;
    } else {
        const data = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrValue)}`;
        CreateQR(data);
    }
}
function CreateQR(data) {
    const qr = document.createElement("img");
    qr.setAttribute("src", data);
    qr.className = "CreatedQR"
    QRDiv.innerHTML = "";
    QRDiv.appendChild(qr);
    currentQR = qr;
}
function DowlandQR(qr) {
    if (!currentQR) {
        alert("Lütfen Bir URL Ya da Link Giriniz");
        return;
    } else {
        const link = document.createElement("a");
        link.href = currentQR.src;
        link.download = "QRCode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
function ClearAll() {
    QRValue.value = "";
    QRDiv.innerHTML = "";
}

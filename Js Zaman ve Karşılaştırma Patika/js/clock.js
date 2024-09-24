let userName = prompt("Lütfen adınızı giriniz:");
let myName = document.getElementById("myName");
myName.innerHTML = userName;

// Sayfa yüklendiğinde saati ve günü ekrana yazdır
window.onload = function () {
	showDateTime(); // Zaman ve gün gösterme fonksiyonu
};

// Saati ve günü ekranda sürekli güncelleyen fonksiyon
function showDateTime() {
	let clockElement = document.getElementById("myClock");

	setInterval(function () {
		let currentDate = new Date(); // Anlık tarih ve saati al
		let timeString = currentDate.toLocaleTimeString(); // Saat, dakika ve saniye
		let dayString = currentDate.toLocaleDateString("tr-TR", { weekday: "long" }); // Haftanın günü

		// Saati ve günü myClock alanına yaz
		clockElement.innerText = `${dayString}, ${timeString}`;
	}); // Her saniyede bir güncelle
}

const canadaMap = L.map('canadaMap').setView([43.646626, -79.3815], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(canadaMap);
var marker = L.marker([43.646626, -79.3815]).addTo(canadaMap);

const australiaMap = L.map('australiaMap').setView([-30.3195, 149.7831], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(australiaMap);
var marker = L.marker([-30.3195, 149.7831]).addTo(australiaMap);

const unitedKingdomMap = L.map('unitedKingdomMap').setView([51.7322, -3.8617], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(unitedKingdomMap);
var marker = L.marker([51.7322, -3.8617]).addTo(unitedKingdomMap);
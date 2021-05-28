// Creeër een wereldmap mbv leaflet.js
const mymap = L.map('worldMap').setView([0, 0], 1);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, attribution);
tiles.addTo(mymap);

getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  for (item of data) {
    const root = document.createElement('p');
    const geo = document.createElement('div');
    const date = document.createElement('div');

    geo.textContent = `${item.lat}°, ${item.lon}°`;

    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;

    root.append(name, geo, date);
    document.body.append(root);

    // Voeg een nieuwe marker toe aan de wereld map voor elke data in de database.
    L.marker([item.lat, item.lon]).addTo(mymap);
  }

  console.log(data);
}

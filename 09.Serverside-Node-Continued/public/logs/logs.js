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
  data.sort(custom_sort);

  for (item of data) {
    const root = document.createElement('p');
    const geo = document.createElement('div');
    const date = document.createElement('div');

    geo.textContent = `${item.lat}°, ${item.lon}°`;

    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;

    root.append(name, geo, date);
    document.body.append(root);

    const txt = `This marker was added on: ${dateString}.<br> The weather here at ${item.lat}&deg;, ${item.lon}&deg; has ${item.weather.weather[0].description} with a temperature of 
    ${item.weather.main.temp}&deg; C.<br> The particular matter in the area you're breathing in has pm25: ${item.air.list[0].components.co} co,
     ${item.air.list[0].components.no} no.`;

    // Voeg een nieuwe marker toe aan de wereld map voor elke data in de database.
    const marker = L.marker([item.lat, item.lon]).addTo(mymap);
    marker.bindPopup(txt);
    console.log(item.timestamp);
    console.log(txt);
  }
}

// Sort de array met json objecten om de data van oud naar nieuw te sorteren.
function custom_sort(a, b) {
  return a.timestamp - b.timestamp;
}

//your_array.sort(custom_sort);

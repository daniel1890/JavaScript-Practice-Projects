// Geo locate
let lat, lon;
if ('geolocation' in navigator) {
  console.log('geolocation available');
  navigator.geolocation.getCurrentPosition(async (position) => {
    try {
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      const api_url = `weather/${lat},${lon}`;
      const response = await fetch(api_url);
      const json = await response.json();

      // Vul elk element in de HTML markup met corresponderende js variabelen.
      document.getElementById('latitude').textContent = lat;
      document.getElementById('longitude').textContent = lon;

      // Deze variabelen worden gevuld met data die opgehaald wordt vanuit de server dus deze worden vanuit een externe API opgehaald mbv de latlon van de gebruiker.
      document.getElementById('summary').textContent =
        json.weather.weather[0].description;
      document.getElementById('temperature').textContent =
        json.weather.main.temp;

      document.getElementById('co').textContent =
        json.air.list[0].components.co;
      document.getElementById('no').textContent =
        json.air.list[0].components.no;
    } catch (error) {
      console.error(error);
    }
  });
} else {
  console.log('geolocation unavailable');
}

// Verwerk knop indruk, push data naar de database
const button = document.getElementById('submit');
button.addEventListener('click', async (event) => {
  const data = { lat, lon };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const response = await fetch('/api', options);
  const json = await response.json();
  console.log(json);
});

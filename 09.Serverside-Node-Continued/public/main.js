// Geo locate
let lat, lon;
if ('geolocation' in navigator) {
  console.log('geolocation available');
  navigator.geolocation.getCurrentPosition(async (position) => {
    let lat, lon, weather, air;
    try {
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      // Maak API call naar server, fetch API_url en vul response met hiermee, vul json met response json data.
      const api_url = `weather/${lat},${lon}`;
      const response = await fetch(api_url);
      const json = await response.json();

      // Creeër aparte constantes met json data om makkelijk calls hierna te maken en niet te diep te hoeven te graven in de json.
      const weather = json.weather;
      const air = json.air;

      // Vul elk element in de HTML markup met corresponderende js variabelen.
      document.getElementById('latitude').textContent = lat;
      document.getElementById('longitude').textContent = lon;

      // Deze variabelen worden gevuld met data die opgehaald wordt vanuit de server dus deze worden vanuit een externe API opgehaald mbv de latlon van de gebruiker.
      document.getElementById('summary').textContent =
        weather.weather[0].description;
      document.getElementById('temperature').textContent = weather.main.temp;

      document.getElementById('co').textContent = air.list[0].components.co;
      document.getElementById('no').textContent = air.list[0].components.no;
    } catch (error) {
      console.error(error);
      air = { value: -1 };
    }

    // Stop alle data in 1 variabele, hierna wordt deze data naar de server POSTED.
    const data = { lat, lon, weather, air };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response_db = await fetch('/api', options);
    const json_db = await response_db.json();
    console.log(json_db);
  });
} else {
  console.log('geolocation unavailable');
}

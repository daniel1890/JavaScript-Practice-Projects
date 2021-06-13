// Met het require sleutelwoord stop je makkelijk een bestand of in dit geval een complete map in een constante, hierna kan je de functionaliteit
// van wat je in de parameter ingevuld hebt gebruiken.
const { request, response } = require('express');
const express = require('express');
const Datastore = require('nedb');
const app = express();
require('dotenv').config();
console.log(process.env);

// Nodige modules voor gebruik van Clima cel API
const fetch = require('node-fetch');
const queryString = require('query-string');

app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.post('/api', (request, response) => {
  console.log('I got a request!');
  console.log(request.body);
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});

app.get('/weather/:latlon', async (request, response) => {
  // Gebruik de request parameters waar de latlon waardes ontvangen worden die vanuit de client-side verzonden worden.
  // Split de variabele in een array en stop deze waardes in hun eigen constantes.
  console.log(request.params);
  const latlon = request.params.latlon.split(',');
  console.log(latlon);
  const lat = latlon[0];
  const lon = latlon[1];

  // get your key from app.tomorrow.io/development/keys
  const apikey = process.env.API_KEY;

  // set the Timelines GET endpoint as the target URL
  const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
  const airq_url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

  const weather_response = await fetch(weather_url);
  const airq_response = await fetch(airq_url);

  const weather_data = await weather_response.json();
  const airq_data = await airq_response.json();

  const data = {
    weather: weather_data,
    air: airq_data,
  };

  response.json(data);
});

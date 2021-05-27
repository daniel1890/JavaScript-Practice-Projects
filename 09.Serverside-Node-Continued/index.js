// Met het require sleutelwoord stop je makkelijk een bestand of in dit geval een complete map in een constante, hierna kan je de functionaliteit
// van wat je in de parameter ingevuld hebt gebruiken.
const { request, response } = require('express');
const express = require('express');
const Datastore = require('nedb');
const app = express();

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

app.get('/weather', async (request, response) => {
  // get your key from app.tomorrow.io/development/keys
  const apikey = 'd88962207d637b67cb591d89bb248d8e';

  // pick the location, as a latlong pair
  let location = [51.8056, 5.8282];

  // set the Timelines GET endpoint as the target URL
  //const api_url = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
  const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=51.8056&lon=5.8282&appid=${apikey}`;

  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
});

// Met het require sleutelwoord stop je makkelijk een bestand of in dit geval een complete map in een constante, hierna kan je de functionaliteit
// van wat je in de parameter ingevuld hebt gebruiken.
const express = require('express');
const Datastore = require('nedb');
const app = express();

app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();
database.insert({ name: 'sheefmahn', status: ':)' });

app.post('/api', (request, response) => {
  console.log('I got a request!');
  console.log(request.body);
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json({
    status: 'succes',
    firstname: data.firstname,
    timestamp: timestamp,
    latitude: data.lat,
    longitude: data.lon,
  });
});

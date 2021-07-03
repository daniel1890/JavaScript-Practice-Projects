# Serverside Werken Met Node.JS

## Informatie

Dit project is een vervolg van 08.Serverside-Node, in dit project is het de bedoeling om een Single Page App te bouwen. Wanneer de gebruiker de site binnenkomt wordt er een knop weergeven, wanneer deze knop ingedrukt wordt dan wordt mbv een API call de locatie van de gebruiker opgehaald, hierna wordt de locatie van de gebruiker op een wereldmap weergeven. Mbv de openweather API wordt informatie opgehaald over de locatie van de gebruiker.

### Deel 1

Voeg aan de serverside code een route parameter toe aan de GET weather route, hiermee kan je vanuit de clientside parameters toevoegen aan de GET request, in dit geval worden de lattitude en longitude meegestuurd naar de server, de server verwerkt deze parameters en verstuurd ze mee naar de API van openweathermap. 

### Deel 2

Voeg in de HTML markup spans toe om deze te vullen met de data die gecalled wordt vanuit de server, voeg in de js code een link toe tussen de HTML markup en de serverside code, dit is makkelijk te doen met document.getElementById('').textContent.
In mijn geval call ik dezelfde API met 2 verschillende calls voor air quality en voor weather, normaal kan je dit in 1 call doen omdat het van dezelfde API komt alleen wil ik het simuleren hoe het is om 2 verschillende API's te callen en deze informatie samen te stoppen in 1 JSON object in dit geval heet dit object 'data', je kan makkelijk deze data callen vanuit de clientside code met een API call. Vul de response op de API call met fetch, dan maak je makkelijk met const json = response.json() een json object aan en hier haal je makkelijk alle data uit die nodig is.

# Deel 3

Voeg leaflet functionaleit toe van het oudere project, dit is om de lat en long van de gebruiker op te halen en de juiste coördinaten op de wereld map te weergeven.


## API's

- Openweather

## Packages

- Express
- Nodemon
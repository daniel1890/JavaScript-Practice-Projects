# Serverside Werken Met Node.JS

## Informatie

In dit project is het de bedoeling om voor het eerst met Node serverside te gaan programmeren. Ik ga de Data Selfie App nabouwen, dit is een tutorialproject geschreven door
Joey K. Lee.

### Deel 1

Creeër folder en creeër nodige bestanden, voeg package.json toe door naar de node command line te gaan en 'node init' in te vullen.
Voeg hierna Express toe, dit is om het project serverside mee te hosten. Voeg statische content toe aan index.js, later wordt hier dynamische content aan toegevoegd.
Het verschil tussen dynamische en statische content: Statische content is altijd hetzelfde, het maakt niet uit wat de I/O is, de geleverde content blijft altijd gelijk;
Dynamische content verandert wél wanneer de I/O aangepast wordt, de content die geleverd wordt hangt dus af van wat voor requests de gebruiker maakt.

### Deel 2

In de index.js file wordt de Express server geïnstantiëerd, deze file wordt server-side uitgevoerd m.b.v. Node, dit betekent dat de index.js file als programma op een server gedraaid wordt en dat de gebruiker hier nooit direct te maken mee heeft.
Gebruik de Geolocation Web API om een API call te maken in de index.html file.
Voeg aan index.html een fetch call toe, in deze fetch call stop de naam van de URL en de options, in de options stop je alle nodige parameters die ingevuld moeten worden, dus of het een POST of GET call is, welke data bewaard moet worden.
Dan in de index.js moet functionaliteit aan Express toegevoegd worden om JSON te kunnen verwerken, ook moet POST functionaliteit toegevoegd worden om van de client-side data te posten naar de server.
Creeër een button in de HTML markup en voeg een Event Listener hieraan toe, wanneer deze knop ingedrukt wordt dan wordt de Geolocation data van de client naar de server verstuurd via een Post call die met fetch gemaakt wordt.

### Deel 3

Voeg NedDB toe met npm, dit is een licht-gewicht database client waarmee je makkelijk data op een persistent manier op kunt slaan, dit is wel een lightweight client dus dit is alleen bruikbaar voor kleinere projecten.
Zet de nodige code in index.js om NedB te gebruiken, met wat simpele code creeër je al heel snel een simpele database waarin je server alle data opslaat, NedB maakt een .db file aan en hierin wordt alle data persistently in opgeslagen als json.
Voeg een input box in waarin de gebruiker zijn naam in kan voeren, dit gaat gewoon via HTML markup, met JS voeg je een Event Listener toe aan de knop, wanneer de knop ingedrukt wordt wordt de text in de input opgeslagen als data en verwerkt naar een JSON bestand samen met de lattitude en longitude.

### Deel 4

Maak een nieuwe HTML pagina aan en noem die all.html, in deze pagina wordt alle data vertoond die verkregen wordt via de index.html pagina. Via een fetch call in de all.html pagina maak je makkelijk een Get call naar de server. Via node zet je alle data van de database in een constante, hierna kan je makkelijk met de find functie de database doorzoeken, wanneer je geen sleutelwoord in het find veld invoerd dan wordt alle data opgehaald. Zo gemakkelijk is het dus om via een html pagina een Get call te maken naar een server die met Node verbonden is.

## Packages

- Express

# Bootstrap Quiz Project

## Informatie

Dit is een simpele quiz gemaakt met HTML, Bootstrap en JavaScript. Dit is vooral een oefening in het gebruik van simpele DOM manipulatie maar ook voor het oefenen van bootstrap functionaliteit.

## Stappenplan

1. Creeër een HTML en JS bestand. In de html markup voeg een verwijzing naar de bootstrap CDN toe om gebruik van bootstrap te maken. Voeg de nodige bootstrap classes toe aan de html markup om een kitty quiz met 4 vragen te hebben, geef elke unieke vraag een eigen naam (q1, q2) en een eigen value ('A', 'B'), hierdoor store je in memory een unieke vraag met daaraan gebonden een waarde, deze kunnen later gebruikt worden om met JS code de score te berekenen van de gegeven input. Voeg een knop toe onderaan de form en geef deze de value submit.
2. In de JS code maak een const aan en stop hierin de quiz-form, dit doe je met querySelector(**KLASSE NAAM**), querySelector zoekt van boven naar onder op de pagina naar het eerste object met de id="**KLASSE NAAM**". Voeg aan de form een eventListener toe, deze zal wachten op een input in de knop en dan zal deze de interne code uitvoeren.
3. Voeg onder het top gedeelte in de html markup een sectie toe voor de score van de gebruiker, met de bootstrap klasse d-none kan je de score in eerste instantie niet op het scherm tekenen. Voeg hierna aan de JS code het resultaat gedeelte toe als const met querySelector, met js code kunnen we de naam van de html id aanpassen, hiermee kunnen we togglen tussen wel/niet d-none in de id, hierdoor wordt het element makkelijk (on)zichtbaar.
4. Add een timer, deze gebruikt de functie setInterval, in deze functie wordt een callback functie gemaakt, met querySelector wordt de span in de resultaat markup gekozen, de timer loopt van 0 tot de score van de gebruiker en dan stopt de timer, de animatie duurt 10 milisecondes.

## Plugins

- Bootstrap (CDN)

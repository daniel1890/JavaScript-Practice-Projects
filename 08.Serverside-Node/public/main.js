function setup() {
  let lat, lon;
  const button = document.getElementById('submit');
  button.addEventListener('click', async (event) => {
    video.loadPixels();

    const firstname = document.getElementById('fname').value;
    const image64 = video.canvas.toDataURL();
    const data = { firstname, lat, lon, image64 };
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

  if ('geolocation' in navigator) {
    console.log('geolocation available');
    /** Voordat de ES6 syntax geïntroduceerd werd, werden callback functies op deze manier geschreven:
     *  navigator.geolocation.getCurrentPosition(function (position) {
     *  console.log(position.coords.latitude);
     *  console.log(position.coords.longitude);
     *  });
     * In ES6 kunnen callback functies op een makkelijkere manier als een arrow functie geschreven worden
     */
    navigator.geolocation.getCurrentPosition(async (position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log(position);

      document.getElementById('latitude').textContent = lat;
      document.getElementById('longitude').textContent = lon;
    });
  } else {
    console.log('geolocation unavailable');
  }

  noCanvas();
  const video = createCapture(VIDEO);
}

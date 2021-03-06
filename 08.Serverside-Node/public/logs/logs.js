getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  for (item of data) {
    const root = document.createElement('p');
    const name = document.createElement('div');
    const geo = document.createElement('div');
    const date = document.createElement('div');

    name.textContent = `name: ${item.firstname}`;
    geo.textContent = `${item.lat}°, ${item.lon}°`;

    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;

    root.append(name, geo, date);
    document.body.append(root);
  }

  console.log(data);
}

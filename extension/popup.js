// popup.js
let map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const socket = new WebSocket('ws://127.0.0.1:5000');

socket.onmessage = function (event) {
  const data = JSON.parse(event.data);
  document.getElementById('userCount').innerText = data.total_users;

  data.users.forEach(user => {
    L.marker([user.lat, user.lon]).addTo(map)
      .bindPopup(`User from ${user.city}, ${user.country}`);
  });
};

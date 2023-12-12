async function getLocation() {
  if (navigator.geolocation) {
    localStorage.removeItem("userLat");
    localStorage.removeItem("userLon");
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

// const x = document.getElementById("demo");

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

navigator.geolocation.getCurrentPosition(readPosition);

function readPosition(position) {
  let girlLat = String(position.coords.latitude).slice(0, -3);
  let girlLon = String(position.coords.longitude).slice(0, -3);

  localStorage.setItem("userLat", girlLat);
  localStorage.setItem("userLon", girlLon);
}

console.log(localStorage.getItem("userLat"));
// async function latPosition(position) {
//   const deli = position.coords.latitude;
//   console.log(deli);
// }

// navigator.geolocation.getCurrentPosition(latPosition);

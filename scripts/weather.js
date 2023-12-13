function startWeather() {
  const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${localStorage.getItem(
    "userLat"
  )}&lon=${localStorage.getItem(
    "userLon"
  )}&appid=9e972cb2fc69ed1c08d9704b40ffe53e&units=imperial`;

  document.getElementById("boxFoggie").style.display = "none";
  document.getElementById("activeFoggie").style.display = "flex";

  // console.log(localStorage.getItem("userLat"));
  // console.log(localStorage.getItem("userLon"));
  async function apiFetch() {
    try {
      const response = await fetch(requestURL);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
      0
    )}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    currentHumi.innerHTML = `<strong>${weatherData.main.humidity.toFixed(
      0
    )}</strong>`;

    let foggieTemp = weatherData.main.temp.toFixed(0);
    let foggieHumi = weatherData.main.humidity.toFixed(0) * 1 + 20;

    localStorage.setItem("foggieTemp", foggieTemp);
    localStorage.setItem("foggieHumi", foggieHumi);

    console.log(`ft ${foggieTemp}`);
    console.log(`fh ${foggieHumi}`);

    let foggieFeels = foggieTemp * (foggieHumi / 100);

    console.log(`foggie feels like it's ${foggieFeels}`);
    if (foggieFeels > 50) {
      if (foggieFeels > 85) {
        console.log("it's hot");
        document.getElementById("foggieSprite").src =
          "images/sprites/foggiehot.gif";
      } else {
        console.log("it's just right");
        document.getElementById("foggieSprite").src =
          "images/sprites/foggiehappy.gif";
      }
    } else {
      console.log("it's cold");
      document.getElementById("foggieSprite").src =
        "images/sprites/foggiecold.gif";
    }

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
  }

  apiFetch();

  // select HTML elements in the document
  const currentTemp = document.querySelector("#current-temp");
  const weatherIcon = document.querySelector("#weather-icon");
  const captionDesc = document.querySelector("#figcaption");
  const currentHumi = document.querySelector("#humidity");
}

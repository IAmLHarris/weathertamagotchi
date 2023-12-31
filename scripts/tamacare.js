const foggieTemp = localStorage.getItem("foggieTemp");
const foggieHumi = localStorage.getItem("foggieHumi");

function foggieChecker(foggieTemp, foggieHumi) {
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
}

function foggieLamp(temp, humi) {
  let lampTemp = temp * 1 + 20;
  localStorage.setItem("foggieTemp", lampTemp);
  console.log(`lamp func ${localStorage.getItem("foggieTemp")}`);
  foggieChecker(lampTemp, humi);
}

function foggieFan(temp, humi) {
  let fanTemp = temp * 1 - 15;
  localStorage.setItem("foggieTemp", fanTemp);
  console.log(`fan func ${localStorage.getItem("foggieTemp")}`);
  foggieChecker(fanTemp, humi);
}

function foggieWater(temp, humi) {
  let waterHumi = humi * 1 + 30;

  if (waterHumi >= 100) {
    waterHumi = 100;
  } else {
  }
  localStorage.setItem("foggieHumi", waterHumi);
  console.log(`watr func ${localStorage.getItem("foggieHumi")}`);
  foggieChecker(temp, waterHumi);
}

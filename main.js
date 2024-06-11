import filtrarPersonajes from "./filterInfo.js";

const URL = "https://www.dragonball-api.com/api";

async function getInfo() {
    const res = await fetch(URL);
    const data = await res.json();
    filtrarPersonajes(data);
  }
  getInfo();
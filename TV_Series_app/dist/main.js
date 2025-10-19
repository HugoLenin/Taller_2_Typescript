import { series } from "./data.js";
const seriesTbody = document.getElementById("series-table");
const averageElm = document.getElementById("average");
const cardDetail = document.getElementById("serie-detail");
const cardImage = document.getElementById("serie-image");
const cardTitle = document.getElementById("serie-title");
const cardDescription = document.getElementById("serie-description");
const cardUrl = document.getElementById("serie-url");
renderSeriesInTable(series);
averageElm.innerHTML = `Seasons average: <b>${getAverageSeasons(series).toFixed(0)}</b>`;
function renderSeriesInTable(seriesList) {
    console.log("Renderizando series:", seriesList);
    seriesList.forEach((serie) => {
        const trElement = document.createElement("tr");
        trElement.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="#" class="serie-link" data-id="${serie.id}">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        trElement.addEventListener("click", () => showSerieDetail(serie));
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(seriesList) {
    const totalSeasons = seriesList.reduce((acc, serie) => acc + serie.seasons, 0);
    return totalSeasons / seriesList.length;
}
function showSerieDetail(serie) {
    cardImage.src = serie.image;
    cardTitle.textContent = serie.name;
    cardDescription.textContent = serie.description;
    cardUrl.href = serie.url;
    cardUrl.textContent = serie.url;
    cardDetail.style.display = "block";
}

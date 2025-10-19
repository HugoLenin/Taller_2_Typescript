import { series } from "./data.js";
import { Serie } from "./serie.js";

const seriesTbody: HTMLElement = document.getElementById("series-table")!;
const averageElm: HTMLElement = document.getElementById("average")!;
const cardDetail: HTMLElement = document.getElementById("serie-detail")!;
const cardImage: HTMLImageElement = document.getElementById("serie-image") as HTMLImageElement;
const cardTitle: HTMLElement = document.getElementById("serie-title")!;
const cardDescription: HTMLElement = document.getElementById("serie-description")!;
const cardUrl: HTMLAnchorElement = document.getElementById("serie-url") as HTMLAnchorElement;

renderSeriesInTable(series);
averageElm.innerHTML = `Seasons average: <b>${getAverageSeasons(series).toFixed(0)}</b>`;

function renderSeriesInTable(seriesList: Serie[]): void {
  console.log("Renderizando series:", seriesList);
  seriesList.forEach((serie: Serie) => {
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

function getAverageSeasons(seriesList: Serie[]): number {
  const totalSeasons = seriesList.reduce((acc, serie) => acc + serie.seasons, 0);
  return totalSeasons / seriesList.length;
}

function showSerieDetail(serie: Serie): void {
  cardImage.src = serie.image;
  cardTitle.textContent = serie.name;
  cardDescription.textContent = serie.description;
  cardUrl.href = serie.url;
  cardUrl.textContent = serie.url;

  cardDetail.style.display = "block";
}

import "./style.css";

// sender forespørsel til adressen, metoden get også skaljeg ha json struktur
const fetchDataFromServer = async () => {
  const response = await fetch("http://localhost:3999/json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();

  console.log(result);

  // henter id, hvis ikke finnes returneres den
  const id = document.getElementById("json");
  if (!id) return;
  // id.innerHTML = result;
  for (const projects of result) {
    const element = document.createElement("p"); // lager en paragraf
    element.textContent = projects.title; // lager tittel
    id.appendChild(element); // appender til json html
  }
};

fetchDataFromServer();
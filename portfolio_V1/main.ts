import "./style.css";

<<<<<<< HEAD
// sender forespørsel til adressen, metoden get også skaljeg ha json struktur
const fetchDataFromServer = async () => {
  const response = await fetch("http://localhost:3999/project", {
=======
const fetchDataFromServer = async () => {
  const response = await fetch("http://localhost:3999", {
>>>>>>> d2072c5ebeec8a7052f00c76c404b0c9ecac653d
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
<<<<<<< HEAD
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
=======
  const result = await response.json()

  console.log(result)

  // henter id, hvis ikke finnes returneres den
  const id = document.getElementById("json")
  if (!id) return;
  // id.innerHTML = result;
  for (const projects of result) {
    const element = document.createElement("p")
    element.textContent = projects.title
    id.appendChild(element)
  }
}

fetchDataFromServer()
>>>>>>> d2072c5ebeec8a7052f00c76c404b0c9ecac653d

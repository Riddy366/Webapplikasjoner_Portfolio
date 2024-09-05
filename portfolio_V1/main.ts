import "./style.css";

const fetchDataFromServer = async () => {
  const response = await fetch("http://localhost:3999", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
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
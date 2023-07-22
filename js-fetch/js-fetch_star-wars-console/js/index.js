console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch("https://swapi.dev/api/people");
  console.log("Response", response);
  const data = await response.json();
  console.log("Data", data);

  data.results.forEach((element) => {
    console.log("Name", element.name);
  });
  console.log("R2-D2 eye color:", data.results[2].eye_color);
}

fetchData();

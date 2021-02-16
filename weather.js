async function getData(location) {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=dee9342929355286f7f022bb65617466", {mode: 'cors'});
    const w_data = await response.json();
    console.log(w_data.name);
    console.log(w_data.sys.country);
    console.log(w_data.main);
    arr = [w_data.name, w_data.sys.country, w_data.main];
    return arr;
}

function createForm() {
    const formDiv = document.createElement("div");
    formDiv.id = "formDiv";

    const searchBar = document.createElement("input");
    searchBar.id = "searchBar";
    formDiv.appendChild(searchBar);

    const searchButton = document.createElement("button");
    searchButton.type = "button";
    searchButton.id = "searchButton";
    searchButton.innerText = "Submit";
    searchButton.addEventListener("click", addLocation);
    formDiv.appendChild(searchButton);

    return formDiv;
}

function calcs() {
    let temp_K = arr[2].temp;
    let temp_C = temp_K - 273;
    let temp_F = (temp_C * (9/5)) + 32;
}

function createDisplay() {
    const displayDiv = document.createElement("div");
    displayDiv.id = "displayDiv";

    return displayDiv;
}

function addLocation() {
    let searchLocation = searchBar.value;
    getData(searchLocation);
    searchBar.value = "";
}

function pageLoad() {
    const content = document.getElementById("content");

    const weather_form = createForm();
    content.appendChild(weather_form);
}

pageLoad();
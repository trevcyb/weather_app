async function getData(location) {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=dee9342929355286f7f022bb65617466", {mode: 'cors'});
    const w_data = await response.json();
    console.log(w_data);
    processData(w_data);
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

function processData(data) {
    let temp_C = Math.round(data.main.temp - 273);
    let temp_F = Math.round((temp_C * (9/5)) + 32);

    document.getElementById("tempCel").innerText = "Current Temperature: " + temp_C + "\xB0" + "C";
    document.getElementById("tempFar").innerText = "Current Temperature: " + temp_F + "\xB0" + "F";

    let maxtemp_C = Math.round(data.main.temp_max - 273);
    let maxtemp_F = Math.round((maxtemp_C * (9/5)) + 32);

    document.getElementById("maxtempCel").innerText = "Max Temperature: " + maxtemp_C + "\xB0" + "C";
    document.getElementById("maxtempFar").innerText = "Max Temperature: " + maxtemp_F + "\xB0" + "F";

    let mintemp_C = Math.round(data.main.temp_min - 273);
    let mintemp_F = Math.round((mintemp_C * (9/5)) + 32);

    document.getElementById("mintempCel").innerText = "Min Temperature: " + mintemp_C + "\xB0" + "C";
    document.getElementById("mintempFar").innerText = "Min Temperature: " + mintemp_F + "\xB0" + "F";

    let feelslike_C = Math.round(data.main.feels_like - 273);
    let feelslike_F = Math.round((feelslike_C * (9/5)) + 32);

    document.getElementById("feelslikeCel").innerText = "Feels Like: " + feelslike_C + "\xB0" + "C";
    document.getElementById("feelslikeFar").innerText = "Feels Like: " + feelslike_F + "\xB0" + "F";

    document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
    document.getElementById("pressure").innerText = "Pressure: " + data.main.pressure + " hPa";

    document.getElementById("city").innerText = data.name + ", " + data.sys.country;
}


function createDisplay() {
    const displayDiv = document.createElement("div");
    displayDiv.id = "displayDiv";

    const countryDiv = document.createElement("div");
    countryDiv.id = "countryDiv";
    displayDiv.appendChild(countryDiv);

    const city = document.createElement("h2");
    city.id = "city";
    countryDiv.appendChild(city);

    const tempDiv = document.createElement("div");
    tempDiv.id = "tempDiv";
    displayDiv.appendChild(tempDiv);

    const tempCel = document.createElement("h2");
    tempCel.id = "tempCel";
    tempDiv.appendChild(tempCel);

    const tempFar = document.createElement("h2");
    tempFar.id = "tempFar";
    tempDiv.appendChild(tempFar);

    const maxtempCel = document.createElement("h2");
    maxtempCel.id = "maxtempCel";
    tempDiv.appendChild(maxtempCel);

    const maxtempFar = document.createElement("h2");
    maxtempFar.id = "maxtempFar";
    tempDiv.appendChild(maxtempFar);

    const mintempCel = document.createElement("h2");
    mintempCel.id = "mintempCel";
    tempDiv.appendChild(mintempCel);

    const mintempFar = document.createElement("h2");
    mintempFar.id = "mintempFar";
    tempDiv.appendChild(mintempFar);

    const feelslikeCel = document.createElement("h2");
    feelslikeCel.id = "feelslikeCel";
    tempDiv.appendChild(feelslikeCel);

    const feelslikeFar = document.createElement("h2");
    feelslikeFar.id = "feelslikeFar";
    tempDiv.appendChild(feelslikeFar);

    const humidity = document.createElement("h2");
    humidity.id = "humidity";
    tempDiv.appendChild(humidity);

    const pressure = document.createElement("h2");
    pressure.id = "pressure";
    tempDiv.appendChild(pressure);

    const switchLabel = document.createElement("label");
    switchLabel.classList.add("switch");
    tempDiv.appendChild(switchLabel);

    const switchInput = document.createElement("input");
    switchInput.type = "checkbox";
    switchLabel.appendChild(switchInput);

    const sliderSpan = document.createElement("span");
    sliderSpan.classList.add("slider");
    switchLabel.appendChild(sliderSpan);

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

    const weather_disp = createDisplay();
    content.appendChild(weather_disp);
}

pageLoad();
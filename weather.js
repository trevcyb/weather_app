async function getData(location) {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=dee9342929355286f7f022bb65617466", { mode: 'cors' });
    const w_data = await response.json();
    console.log(w_data);
    processData(w_data);
}

function createForm() {
    const formDiv = document.createElement("div");
    formDiv.id = "formDiv";

    const searchBar = document.createElement("input");
    searchBar.id = "searchBar";
    searchBar.placeholder = "Search a town";
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
    let temp_F = Math.round((temp_C * (9 / 5)) + 32);

    document.getElementById("tempCel").innerText = temp_C + "\xB0" + "C";
    document.getElementById("tempFar").innerText = temp_F + "\xB0" + "F";

    let maxtemp_C = Math.round(data.main.temp_max - 273);
    let maxtemp_F = Math.round((maxtemp_C * (9 / 5)) + 32);

    document.getElementById("maxtempCel").innerText = maxtemp_C + "\xB0" + "C";
    document.getElementById("maxtempFar").innerText = maxtemp_F + "\xB0" + "F";

    let mintemp_C = Math.round(data.main.temp_min - 273);
    let mintemp_F = Math.round((mintemp_C * (9 / 5)) + 32);

    document.getElementById("mintempCel").innerText = mintemp_C + "\xB0" + "C";
    document.getElementById("mintempFar").innerText = mintemp_F + "\xB0" + "F";

    let feelslike_C = Math.round(data.main.feels_like - 273);
    let feelslike_F = Math.round((feelslike_C * (9 / 5)) + 32);

    document.getElementById("feelslikeCel").innerText = feelslike_C + "\xB0" + "C";
    document.getElementById("feelslikeFar").innerText = feelslike_F + "\xB0" + "F";

    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("pressure").innerText = data.main.pressure + " hPa";

    document.getElementById("city").innerText = data.name + ", " + data.sys.country;
}


function createDisplay() {
    const displayDiv = document.createElement("div");
    displayDiv.id = "displayDiv";
    displayDiv.style.display = "none";

    const countryDiv = document.createElement("div");
    countryDiv.id = "countryDiv";
    displayDiv.appendChild(countryDiv);

    const city = document.createElement("h1");
    city.id = "city";
    countryDiv.appendChild(city);

    const tempDiv = document.createElement("div");
    tempDiv.id = "tempDiv";
    displayDiv.appendChild(tempDiv);

    const tempInfo = document.createElement("h4");
    tempInfo.innerText = "Current Temp:"
    tempInfo.classList.add("info");
    tempInfo.id = "tempInfo";
    tempDiv.appendChild(tempInfo);

    const maxtempInfo = document.createElement("h4");
    maxtempInfo.innerText = "Max Temp:";
    maxtempInfo.classList.add("info");
    maxtempInfo.id = "maxtempInfo";
    tempDiv.appendChild(maxtempInfo);

    const mintempInfo = document.createElement("h4");
    mintempInfo.innerText = "Min Temp:";
    mintempInfo.classList.add("info");
    mintempInfo.id = "mintempInfo";
    tempDiv.appendChild(mintempInfo);

    const feelslikeInfo = document.createElement("h4");
    feelslikeInfo.innerText = "Feels Like:";
    feelslikeInfo.classList.add("info");
    feelslikeInfo.id = "feelslikeInfo";
    tempDiv.appendChild(feelslikeInfo);

    const humidityInfo = document.createElement("h4");
    humidityInfo.innerText = "Humidity:";
    humidityInfo.classList.add("info");
    humidityInfo.id = "humidityInfo";
    tempDiv.appendChild(humidityInfo);

    const pressureInfo = document.createElement("h4");
    pressureInfo.innerText = "Pressure:";
    pressureInfo.classList.add("info");
    pressureInfo.id = "pressureInfo";
    tempDiv.appendChild(pressureInfo);

    const tempCel = document.createElement("h2");
    tempCel.id = "tempCel";
    tempCel.classList.add = "winfo";
    tempDiv.appendChild(tempCel);

    const tempFar = document.createElement("h2");
    tempFar.id = "tempFar";
    tempFar.classList.add = "winfo";
    tempFar.style.display = "none";
    tempDiv.appendChild(tempFar);

    const maxtempCel = document.createElement("h2");
    maxtempCel.id = "maxtempCel";
    maxtempCel.classList.add = "winfo";
    tempDiv.appendChild(maxtempCel);

    const maxtempFar = document.createElement("h2");
    maxtempFar.id = "maxtempFar";
    maxtempFar.classList.add = "winfo";
    maxtempFar.style.display = "none";
    tempDiv.appendChild(maxtempFar);

    const mintempCel = document.createElement("h2");
    mintempCel.id = "mintempCel";
    mintempCel.classList.add = "winfo";
    tempDiv.appendChild(mintempCel);

    const mintempFar = document.createElement("h2");
    mintempFar.id = "mintempFar";
    mintempFar.classList.add = "winfo";
    mintempFar.style.display = "none";
    tempDiv.appendChild(mintempFar);

    const feelslikeCel = document.createElement("h2");
    feelslikeCel.id = "feelslikeCel";
    feelslikeCel.classList.add = "winfo";
    tempDiv.appendChild(feelslikeCel);

    const feelslikeFar = document.createElement("h2");
    feelslikeFar.id = "feelslikeFar";
    feelslikeFar.classList.add = "winfo";
    feelslikeFar.style.display = "none";
    tempDiv.appendChild(feelslikeFar);

    const humidity = document.createElement("h2");
    humidity.id = "humidity";
    humidity.classList.add = "winfo";
    tempDiv.appendChild(humidity);

    const pressure = document.createElement("h2");
    pressure.id = "pressure";
    pressure.classList.add = "winfo";
    tempDiv.appendChild(pressure);

    const switchLabel = document.createElement("label");
    switchLabel.classList.add("switch");
    switchLabel.id = "switchLabel";
    switchLabel.style.display = "none";
    countryDiv.appendChild(switchLabel);

    const switchInput = document.createElement("input");
    switchInput.type = "checkbox";
    switchInput.addEventListener("change", () => {
        if (switchInput.checked) {
            tempCel.style.display = "none";
            maxtempCel.style.display = "none";
            mintempCel.style.display = "none";
            feelslikeCel.style.display = "none";
            tempFar.style.display = "block";
            maxtempFar.style.display = "block";
            mintempFar.style.display = "block";
            feelslikeFar.style.display = "block";
        } else {
            tempCel.style.display = "block";
            maxtempCel.style.display = "block";
            mintempCel.style.display = "block";
            feelslikeCel.style.display = "block";
            tempFar.style.display = "none";
            maxtempFar.style.display = "none";
            mintempFar.style.display = "none";
            feelslikeFar.style.display = "none";
        }
    })

    switchLabel.appendChild(switchInput);

    const sliderSpan = document.createElement("span");
    sliderSpan.classList.add("slider");
    switchLabel.appendChild(sliderSpan);

    const switchone = document.createElement("h5");
    switchone.innerText = "C";
    switchone.classList.add("templabel");
    switchone.id = "switchone";
    countryDiv.appendChild(switchone);

    const switchtwo = document.createElement("h5");
    switchtwo.innerText = "F";
    switchtwo.classList.add("templabel");
    switchtwo.id = "switchtwo";
    countryDiv.appendChild(switchtwo);

    return displayDiv;
}

function addLocation() {
    let searchLocation = searchBar.value;
    getData(searchLocation);
    searchBar.value = "";
    document.getElementById("switchLabel").style.display = "inline-block";
    document.getElementById("displayDiv").style.display = "block";
}

function pageLoad() {
    const content = document.getElementById("content");

    const weather_form = createForm();
    content.appendChild(weather_form);

    const weather_disp = createDisplay();
    content.appendChild(weather_disp);
}

pageLoad();
const apiKey = "51a923efa91b9e92988f01a4b731a911"; // Replace with your OpenWeatherMap API key

// Function to fetch weather data
async function getWeather() {
  const city = document.getElementById("city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      displayWeather(data);
    } else {
      alert("City not found!");
    }
  } catch (error) {
    console.error("Error fetching weather data", error);
    alert("Error fetching weather data. Please try again.");
  }
}

// Function to display weather data
function displayWeather(data) {
  document.getElementById("city-name").textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
  document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById("wind-speed").textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

const apiKey = "5554eedb6b85deb51fd1db50e7cd1e6b"; 

document.getElementById("searchBtn").addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (city === "") {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("weatherResult").innerHTML = `<p>City not found ❌</p>`;
      } else {
        const weatherHTML = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <p>🌡️ Temperature: ${data.main.temp} °C</p>
          <p>🌤️ Condition: ${data.weather[0].main}</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
        `;
        document.getElementById("weatherResult").innerHTML = weatherHTML;
      }
    })
    .catch(() => {
      document.getElementById("weatherResult").innerHTML = `<p>Something went wrong. Try again!</p>`;
    });
}

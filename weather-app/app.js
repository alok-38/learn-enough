// Functional Programming Concepts
const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const formatWeatherData = (data) => {
    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
    };
  };
  
  // Object and Prototype
  function WeatherApp() {}
  
  WeatherApp.prototype.displayWeather = function (weatherData) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <h2>Weather in ${weatherData.city}</h2>
      <p>Temperature: ${weatherData.temperature}°C</p>
      <p>Description: ${weatherData.description}</p>
    `;
  };
  
  // Interactivity
  const searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', async () => {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value.trim();
    if (city) {
      const apiKey = 'fa00ba01b20702e72cc8eb3e082bbbca'; // Replace with your API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const weatherData = await fetchData(apiUrl);
      if (weatherData) {
        const formattedWeatherData = formatWeatherData(weatherData);
        const weatherApp = new WeatherApp();
        weatherApp.displayWeather(formattedWeatherData);
      }
    }
  });
  
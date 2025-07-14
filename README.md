# Weather App

A simple web application that allows users to get real-time weather information for any city using the [OpenWeatherMap API](https://openweathermap.org/api).

## Features

- Search weather by city name
- Displays:
  - City and country
  - Current temperature (°C)
  - Weather description
  - Humidity
  - Wind speed
- Clean, responsive UI


## Getting Started

### Prerequisites

- A modern web browser
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. **Clone this repository or download the files.**

2. **Obtain an OpenWeatherMap API Key:**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Go to your account and generate an API key.

3. **Set Your API Key:**
   - In `app.js`, replace the value of `apiKey` with your OpenWeatherMap API key:
     ```js
     const apiKey = "YOUR_API_KEY_HERE";
     ```

4. **Run the App:**
   - Open `index.html` in your browser.

## File Structure

```
.
├── index.html      # Main HTML file
├── style.css       # Stylesheet
└── app.js          # JavaScript logic
```

## Usage

1. Enter the name of a city in the input field.
2. Click the "Get Weather" button.
3. Weather information will be displayed below.

## Notes

- Make sure your API key is valid and has not exceeded its usage limits.
- If you receive a "City not found!" alert, check the spelling of the city name.

## License

This project is open-sourced under the [MIT License](LICENSE).

---

**Built with ❤️ using HTML, CSS, and JavaScript**

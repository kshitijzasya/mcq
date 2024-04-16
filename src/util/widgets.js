const API_KEY = process.env.NEXT_APP_WEATHER_API ?? "f4716b73b76a3bec3cf8163b5f3bed77"
const Weather_key = process.env.NEXT_APP_WEATHER_KEY ?? "5ed38abe729f4dfe896115127241404"

const API =  {
    weather: {
        fetchWeatherApi: async function(lat, long) {
            const result = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`)
            return result
        },
        fetchFreeWeather: async function(lat, long) {
            return await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        },
        fetchWeatherApi2: async function(lat, long) {
            const result = await fetch(`http://api.weatherapi.com/v1/current.json?q=${lat},${long}&key=${Weather_key}`);
            let json = await result.json();
            return json;
        }
    },
    news: {
        api_key: process.env.NEXT_APP_NEWS_API ?? "2968a72780ba4772b7fbb9fc1f92bc12",
        fetchNews: async function() {
            const result = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.api_key}`);
            return await result.json()
        }
    }
}

export default API
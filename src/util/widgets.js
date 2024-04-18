const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API ?? "f4716b73b76a3bec3cf8163b5f3bed77"
const Weather_key = process.env.NEXT_PUBLIC_WEATHER_KEY ?? "5ed38abe729f4dfe896115127241404"
const SHARE_NEWS_API_KEY = process.env.NEXT_PUBLIC_SHARE_NEWS_KEY

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
            const result = await fetch(`https://api.weatherapi.com/v1/current.json?q=${lat},${long}&key=${Weather_key}`);
            let json = await result.json();
            return json;
        }
    },
    news: {
        fetchShareNews: async function() {
            let data = [];
            try {
                const result = await fetch(`https://share-market-news-api-india.p.rapidapi.com/marketNews`, {
                    headers: {
                        'X-RapidAPI-Key': SHARE_NEWS_API_KEY,
                        'X-RapidAPI-Host': 'share-market-news-api-india.p.rapidapi.com'
                    }
                });
                if (result.status === 200){
                    data =  await result.json()
                } else {
                    let error = new Error(result.statusText)
                    error.code = result.status
                    throw error
                }
                return {
                    code: 200,
                    data
                }
            } catch (error) {
                if (error.code === 500) {
                    return this.fetchShareNews()
                }
                return {
                    code: 400,
                    data: []
                }
            }
        }
    }
}

export default API
const url = "https://quizapi.io/api/v1/questions?apiKey=lyOl93g4fN1ns2v6fwuikuzOruLsP77g2pqgF0M4";

const api = function (type) {

    return {
        get:async function(){
            const res = await fetch(url+"&limit=5&category=Code&difficulty=easy&tag=Laravel");
            return await res.json()
        }
    }[type]()
}

export default api;
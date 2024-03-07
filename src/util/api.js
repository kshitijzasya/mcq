const url = "https://quizapi.io/api/v1/";

const prepareUrl = (type, query = '') => `${url}${type}?apiKey=lyOl93g4fN1ns2v6fwuikuzOruLsP77g2pqgF0M4&${query}`

const api = function (type, ...params) {

    return {
        get:async function(){
            const res = await fetch(prepareUrl('questions', 'limit=5&category=Code&difficulty=easy&tag=Laravel'));
            return await res.json()
        },
        custom: async function(){
            const res = await fetch(prepareUrl(params[0], params[1]))
            return await res.json()
        }
    }[type]()
}

export default api;
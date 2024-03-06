import api from "@/util/api"

const apiInterface = {
    questions: function() {
        return new Promise(function(resolve, reject) {
                api('get')
                    .then(res => resolve(res))
                    .catch(err => resolve([]))
        })
    },
    tags: function() {
        return {}
    }
}

export default apiInterface
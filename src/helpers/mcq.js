import api from "@/util/api"

const apiInterface = {
    questions: function(query = "") {
        return new Promise(function(resolve, reject) {
            (
                query.length ? api('custom', 'questions', query): api('get')
            )
                    .then(res => resolve(res))
                    .catch(err => reject([]))
        })
    },
    tags: function() {
        return new Promise(function(resolve, reject) {
            api('custom', 'tags','')
                .then(tags => resolve(tags))
                .catch(err => resolve([]))
        })
    },
    categories: function() {
        return new Promise(function(resolve, reject) {
            api('custom', 'categories', '')
                .then(tags => resolve(tags))
                .catch(err => resolve([]))
        })
    }
}

export default apiInterface
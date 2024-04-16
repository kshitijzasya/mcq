
const storage = {
    refreshKeysIndex: 'items_to_refresh',
    get: function(key) { 
        return JSON.parse(localStorage.getItem(key))
    },
    has: function(key) {
        return localStorage.getItem(key) !== null;
    },
    add: function(key, data) {
        let keys = JSON.parse(localStorage.getItem(this.refreshKeysIndex));
        keys = (keys === null ? [] : keys);
        if (!keys.includes(key)) {
            localStorage.setItem(this.refreshKeysIndex, JSON.stringify([...keys, key]))
        }
         localStorage.setItem(key, JSON.stringify(data))
        return this;
    },
    update: function(key, data) {
        this.add(key, data)
        return this
    },
    delete: function(key) {
        localStorage.removeItem(key)
        return this
    },
    refresh: function(key, duration, callback) {
        console.log('refresh called')
        //Set a timer or expiry data and time to remove the localstorage keys
    }
}

export default storage
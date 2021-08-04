const localDb = {
    getItem(key) {
        const value = localStorage.getItem(key);

        if (value) {
            return JSON.parse(value);
        }

        return null;
    },

    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    removeItem(key) {
        localStorage.removeItem(key);
    },
};

export default localDb;
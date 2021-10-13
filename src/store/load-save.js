export const load = (key) => {
    try {
        const jsonString = localStorage.getItem(key);
        return jsonString ? JSON.parse(jsonString) : [];
    } 
    catch (err) {
        console.log(`Unable to restore from ${key}: `, err);
        save(key, [])
        return [];
    }
};

export const save = (key, state) => {
    try {
        localStorage.setItem(key, JSON.stringify(state));
        return true;
    } 
    catch (err) {
        console.log(`Unable to save into ${key}: `, err);
        return false;
    }
};

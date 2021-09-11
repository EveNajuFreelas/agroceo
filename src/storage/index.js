export const saveObject = async (key, object) => {
    console.log('Storage DATA *******************************************');
    console.log(key, object);
    const jsonValue = JSON.stringify(object);
    saveValue(key, jsonValue);
};

export const saveValue = async (key, value) => {
    await localStorage.setItem(key, value);
};

export const getValue = async (key) => {
    return localStorage.getItem(key);
};

export const getObject = async (key) => {
    const jsonValue = await getValue(key);
    if (!jsonValue) return null;
    return JSON.parse(jsonValue);
};

export const clear = async (key) => {
    await localStorage.removeItem(key);
};

/**
 * 
 * @param {object} object 
 */
export const setLocalStorage = (object) => {
  for (const property in object) {
    localStorage.setItem(property, object[property]);
  }
}


/**
 * 
 * @param {object} object 
 */
export const getItemFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}
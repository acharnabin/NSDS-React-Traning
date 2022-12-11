export const saveInLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key) => {
  console.log(key);
  return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key) => {
  return localStorage.removeItem(key);
};

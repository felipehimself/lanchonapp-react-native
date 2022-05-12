const uniqueID = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export { uniqueID, capitalize };

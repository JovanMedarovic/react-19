export const updateName = (ms, name, withMessage = true) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return withMessage ? resolve(`Name updated: ${name}`) : resolve(name);
    }, ms);
  });
};

export const getData = (ms = 5000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([10, 20, 30]), ms);
  });
};

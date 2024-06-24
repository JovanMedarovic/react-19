export const updateName = (ms, name) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Name updated: ${name}`), ms);
  });
};
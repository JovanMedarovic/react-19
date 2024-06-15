export const superSlowMethod = (a: number, b: number) => {
  let result = 0;
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      result += i * j;
    }
  }
  return result;
}
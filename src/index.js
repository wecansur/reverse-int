module.exports = function reverse (n) {
  const number = n < 0 ? String(n * -1) : String(n);
  let result = ''

  for (let i = 0; i < number.length; i++) {
    result = `${number[i]}${result}`;
  }
  return Number(result);
}

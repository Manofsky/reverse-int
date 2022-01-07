module.exports = function reverse(num) {
  let reversed = 0;
  while (num) {
    if (num < 0) {
      num = Math.abs(num);
    }
    reversed = reversed * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  console.log(reversed)
  return reversed
}

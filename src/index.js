module.exports = function reverse(n) {
  if (n < 0) {
    n = -n
  }
  let numbersList = String(n).split("")
  let reversedNumber = ""
  for (i = numbersList.length - 1; i >= 0; i--) {
    reversedNumber += numbersList[i];
  }
  return reversedNumber
}

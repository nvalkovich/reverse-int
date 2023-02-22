module.exports = function reverse (num) {
 const positiveNum = Math.abs(num)
 const reverted = [...positiveNum.toString()].reverse();
 return +reverted.join('');
}

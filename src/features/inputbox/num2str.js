/**
 * Given a number return a 2 decimal string
 */

module.exports = function(num) {
    if (!num) {
        num = '0';
    } else {
        num = Math.round(num * 100) / 100;
    }
    num = num + '';
    if (num.indexOf('.') === -1) {
        num += '.00';
    } else if (num.length - (num.indexOf('.') + 1) === 1) {
        num += '0';
    }
    return num;
};
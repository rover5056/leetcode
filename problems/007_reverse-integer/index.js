/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    var flag = 0;
    if (x < 0) {
        flag = 1
        x = (x * -1)
    }
    x = x.toString()
    var arr = x.split('')
    arr = arr.reverse();

    x = arr.join('')
    if (flag) {
        x *= -1
    }
    if (Number(x) < Math.pow(2, 31) * (-1) || Number(x) > Math.pow(2, 31)) {
        return 0
    }
    return Number(x)
};
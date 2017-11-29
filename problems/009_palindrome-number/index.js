/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if (x < 0) {
        return false
    }
    x = Math.abs(x).toString();

    for (var i = 0, j = x.length - 1; i < x.length / 2; i++, j--) {
        if (x[i] == x[j]) {
            continue
        } else {
            return false
        }
    }
    return true

};
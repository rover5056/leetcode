/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var num = 0;
    if (s.length == 1) {
        return 1
    }
    for (var i = 0; i < s.length; i++) {
        var bar = '';
        for (var j = i; j < s.length; j++) {

            if (bar.indexOf(s[j]) < 0) {
                bar += s[j]
                num = bar.length > num ? bar.length : num
            } else {

                break
            }
        }
    }

    return num
};
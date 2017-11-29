var longestPalindrome = function(s) {
    var max_len = 0;
    var len = s.length;
    var str = '',
        max_str = '';

    if (len == 1) {
        return s
    }
    if (len == 2 && s[0] == s[1]) {
        return s
    }

    for (var i = 1; i < len; i++) {
        str = s[i];
        for (var j = 1; j <= i; j++) {
            if (s[i - j] == s[i + j]) {
                str = s.substring(i - j, i + j + 1)
                if (j * 2 + 1 >= max_len) {
                    max_str = str
                    max_len = j * 2 + 1
                }

                // max_len = j * 2 + 1 < max_len ? max_len : j * 2 + 1
            } else {
                break
            }
        }

    }


    for (var i = 1; i < len; i++) {
        str = s[i];
        for (var j = 1; j <= i; j++) {
            if (s[i - j] == s[i + j - 1]) {
                str = s.substring(i - j, i + j)
                if (j * 2 + 1 > max_len) {
                    max_str = str
                    max_len = j * 2 + 1
                }


            } else {
                break
            }
        }

    }
    return max_str ? max_str : s[0]
};
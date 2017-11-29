var myAtoi = function(str) {
    var foo = '';
    var flag = 1;
    var index = true;

    if (str.indexOf('+') > -1 && str.indexOf('-') > -1) {
        return 0
    }

    for (var i = 0; i < str.length; i++) {



        if (index && str[i] == ' ') {

            continue
        }
        if (index && (str[i] == '-' || str[i] == '+')) {
            if (str[i] == '-') {
                flag = -1
            }
            index = false;

            continue
        }



        if (str[i].match(/^\d$/g)) {
            index = false;
            foo += str[i]
        } else {
            break
        }
    }

    if (!Number(foo)) {
        return 0
    }



    foo *= flag

    if (Number(foo) < -2147483648) {
        return -2147483648
    }

    if (Number(foo) > 2147483647) {
        return 2147483647
    }

    return foo



};
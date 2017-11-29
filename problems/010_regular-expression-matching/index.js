function isMatch(s, p) {
    /**
     * f[i][j]: if s[0..i-1] matches p[0..j-1]
     * if p[j - 1] != '*'
     *      f[i][j] = f[i - 1][j - 1] && s[i - 1] == p[j - 1]
     * if p[j - 1] == '*', denote p[j - 2] with x
     *      f[i][j] is true iff any of the following is true
     *      1) "x*" repeats 0 time and matches empty: f[i][j - 2]
     *      2) "x*" repeats >= 1 times and matches "x*x": s[i - 1] == x && f[i - 1][j]
     * '.' matches any single character
     */
    var m = s.length,
        n = p.length;
    // vector<vector<bool>> f(m + 1, vector<bool>(n + 1, false));

    var f = []
    for (var k = 0; k <= m; k++) {

        f[k] = Array.from({ length: n }, (v, i) => 0);;


    }

    f[0][0] = true;
    for (var i = 1; i <= m; i++) {
        f[i][0] = false;
    }

    // p[0.., j - 3, j - 2, j - 1] matches empty iff p[j - 1] is '*' and p[0..j - 3] matches empty
    for (var j = 1; j <= n; j++) {
        f[0][j] = j > 1 && '*' == p[j - 1] && f[0][j - 2];
    }


    for (var i = 1; i <= m; i++)
        for (var j = 1; j <= n; j++)
            if (p[j - 1] != '*')
                f[i][j] = f[i - 1][j - 1] && (s[i - 1] == p[j - 1] || '.' == p[j - 1]);
            else
            // p[0] cannot be '*' so no need to check "j > 1" here
                f[i][j] = f[i][j - 2] || (s[i - 1] == p[j - 2] || '.' == p[j - 2]) && f[i - 1][j];

    return f[m][n];
}
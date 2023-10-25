var kthGrammar = function(n, k) {
    if (n === 1) {
        return 0;
    }

    const parent = kthGrammar(n - 1, Math.ceil(k / 2));
    const isOdd = k % 2 === 1;

    if (parent === 1) {
        return isOdd ? 1 : 0;
    } else {
        return isOdd ? 0 : 1;
    }
};

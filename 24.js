const isPowerOfFour = num => {
    if (num === 0) return false;
    else if (num === 1) return true;
    if (!Number.isInteger(num / 4)) return false;
    return isPowerOfFour(num / 4);
};

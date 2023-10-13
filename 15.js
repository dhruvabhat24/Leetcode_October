/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // Paso #1
    const size = cost.length;
    if (size === 0) return 0;
    if (size === 1) return cost[0];

    // Paso #2
    let primerEscalonPrevio = cost[0];
    let segundoEscalonPrevio = cost[1];
    let total = 0;

    // Paso #3
    for (let i = 2; i < size; i++) {
      total = cost[i] + Math.min(primerEscalonPrevio, segundoEscalonPrevio);
      // Paso #4
      primerEscalonPrevio = segundoEscalonPrevio;
      segundoEscalonPrevio = total;
    }

    // Paso #5
    total = Math.min(primerEscalonPrevio, segundoEscalonPrevio);

    return total;
};

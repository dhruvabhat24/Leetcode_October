/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1];

    for (let i = 0; i < rowIndex; i++) {
        row = row.map((val, index) => (row[index - 1] || 0) + (row[index] || 0));
        row.push(1);
    }

    return row;    
};

var sortByBits = function (arr) {
    let onesCountsMap = new Map();
	
    for (let val of arr) {
        let valToBinary = val.toString(2)
        let count = 0
        for (let i = 0; i < valToBinary.length; i++) {
            if (valToBinary[i] === '1') count++
        }
        
        if (!onesCountsMap.has(count)) {
            onesCountsMap.set(count, [val])
        } else {
            onesCountsMap.get(count).push(val)
        }
    }

    if (onesCountsMap.size > 1) {
        let sortedMap = new Map([...onesCountsMap].sort((a, b) => a[0] - b[0]))
		let result = []
		
        for (let [count, container] of sortedMap) {
            if (container.length === 1) {
                result.push(container[0])
            } else {
                result.push(...container.sort((a, b) => a - b))
            }
        }
        return result
    } else {
        let loneArray = Array.from(onesCountsMap.values())[0]
		
        if (loneArray.length > 1) {
            return loneArray.sort((a, b) => a - b)
        } else {
            return loneArray
        }
    }
};

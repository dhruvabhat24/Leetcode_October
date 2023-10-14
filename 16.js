/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function(cost, time) {
    let memo = new Map();
    let ans = knapsack(0,0,0);
    return ans;
    function knapsack(pos,paintedCount,takenTime){
        let output,res1,res2;
        //Instead of considering paintedCount and takenTime as different parts, we are taking their sum as part of the key to reduce the dimentions in memoization 
        let key = pos + "_" + (paintedCount + takenTime);
        
        if(memo.has(key)===true){
            return memo.get(key);
        }
        if((paintedCount+takenTime)>=cost.length){//We have painted enough walls by painter1
            output = 0;
        }else{
            if(pos===cost.length){//We haven't painted enough walls by painter1 and we don't have any more walls now
                output = -1;
            }else{
                //Paint current wall by paitner1
                res1 = knapsack(pos+1,paintedCount+1,takenTime+time[pos]);
                if(res1!==-1){
                    res1+=cost[pos]
                }
                //Don't paint current wall by paitner1
                res2 = knapsack(pos+1,paintedCount,takenTime);
                if(res1===-1 && res2===-1){
                    output = -1;
                }else if(res1===-1){
                    output = res2;
                }else if(res2===-1){
                    output = res1;
                }else{
                    output = Math.min(res1,res2);
                }
            }    
        }
        memo.set(key,output);
        return output;
    }
};

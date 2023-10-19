/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 Time taken to solve problem in 1st attempt : 3:35 3:44 (9 minutes)
 */
var backspaceCompare = function(s, t) {

    function removeSpace (str){
    return str.split('').reduce((acc,item)=>{
            if(item !== '#'){
                acc.push(item);
            }else{
                acc.pop();
            }
            return acc;
        },[]);
    }
    return  removeSpace(s).join('') === removeSpace(t).join(''); 
};

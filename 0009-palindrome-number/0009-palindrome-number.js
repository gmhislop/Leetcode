/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversedStr = ''
    let xStr = x.toString()
    
    for (let i of xStr){
        reversedStr = i + reversedStr 
    }
    return (reversedStr === xStr)
};
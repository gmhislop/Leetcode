/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversedStr = ''
    let xStr = x.toString()
    
    for (let i of xStr){
        reversedStr = i + reversedStr // adds number to empty string than add from left
        console.log(reversedStr) // for checking the resevered string
    }
    return (reversedStr === xStr)
};
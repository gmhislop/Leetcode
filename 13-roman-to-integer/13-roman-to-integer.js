/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    let sum = 0;
    
    for (let i = 0; i< s.length; i++){
        let prev = s[i-1];
        switch(s[i]){
        case "I": sum += 1;
                break;
        case "V":
                sum = prev === "I" ? sum + 3 : sum + 5;
                break;
        case "X":
                sum = prev === "I" ? sum + 8 : sum + 10;
                break;
        case "L":
                sum = prev === "X" ? sum + 30 : sum + 50;
                break;
        case "C":
                sum = prev === "X" ? sum + 80 : sum + 100;
                break;
        case "D":
                sum = prev === "C" ? sum + 300 : sum + 500;
                break;
        case "M":
                sum = prev === "C" ? sum + 800 : sum + 1000;
                break;
        }
        }
        return sum;
    };
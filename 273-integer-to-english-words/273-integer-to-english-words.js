/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    const BILLION = 1000000000;
    const MILLION = 1000000;
    const THOUSAND = 1000;
    const HUNDRED = 100;
    const TWENTY = 20;
    const TEN = 10;

    
    const wordMap = new Map();
    // ones
    wordMap.set(1, 'One');
    wordMap.set(2, 'Two');
    wordMap.set(3, 'Three');
    wordMap.set(4, 'Four');
    wordMap.set(5, 'Five');
    wordMap.set(6, 'Six');
    wordMap.set(7, 'Seven');
    wordMap.set(8, 'Eight');
    wordMap.set(9, 'Nine');
    wordMap.set(10, 'Ten');
    // teens
    wordMap.set(11, 'Eleven');
    wordMap.set(12, 'Twelve');
    wordMap.set(13, 'Thirteen');
    wordMap.set(14, 'Fourteen');
    wordMap.set(15, 'Fifteen');
    wordMap.set(16, 'Sixteen');
    wordMap.set(17, 'Seventeen');
    wordMap.set(18, 'Eighteen');
    wordMap.set(19, 'Nineteen');
    // Tens
    wordMap.set(20, 'Twenty');
    wordMap.set(30, 'Thirty');
    wordMap.set(40, 'Forty');
    wordMap.set(50, 'Fifty');
    wordMap.set(60, 'Sixty');
    wordMap.set(70, 'Seventy');
    wordMap.set(80, 'Eighty');
    wordMap.set(90, 'Ninety');
    
    
    function buildWord(num){
        if(num >= BILLION){
            const num_billions = Math.floor(num / BILLION);
            const rest = num % BILLION;
            return buildWord(num_billions) + ' Billion' + (rest > 0 ? ' ' + buildWord(rest) : '');
        } else if(num >= MILLION){
            const num_millions = Math.floor(num / MILLION);
            const rest = num % MILLION;
            return buildWord(num_millions) + ' Million' + (rest > 0 ? ' ' + buildWord(rest) : '');
        }else if(num >= THOUSAND){
            const num_thousands = Math.floor(num/THOUSAND);
            const rest = num % THOUSAND;
            return buildWord(num_thousands) + ' Thousand' + (rest > 0 ? ' ' + buildWord(rest) : '');
        }else if(num >= HUNDRED){
            const num_hundreds = Math.floor(num/HUNDRED);
            const rest = num % HUNDRED;
            return wordMap.get(num_hundreds) + ' Hundred' + (rest > 0 ? ' ' + buildWord(rest) : '');
        }else if(num >= TWENTY){
            const num_tens = Math.floor(num/TEN) * TEN;
            const rest = num % TEN;
            return wordMap.get(num_tens) + (rest > 0 ? ' ' + buildWord(rest) : '');
        }else{
            return wordMap.get(num);
        }
    }
    
    return num === 0 ? 'Zero' : buildWord(num);
   
};
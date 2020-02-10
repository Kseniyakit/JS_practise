function letterToNum(num){
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
                'ninety'];
  
    var numString = num.toString();
  
    if (num < 0) throw new Error('Negative numbers are not supported.');
  
    if (num === 0) return 'zero';
  
    //the case of 1 - 20
    if (num < 20) {
      return ones[num];
    }
  
    if (numString.length === 2) {
      return tens[numString[0]] + ' ' + ones[numString[1]];
    }
  
    //100 
    if (numString.length == 3) {
      if (numString[1] === '0' && numString[2] === '0')
        return ones[numString[0]] + ' hundred';
      else
        return ones[numString[0]] + ' hundred and ' + tens[numString[1]] + ' '+ ones[numString[2]];
    }
  //1000
   if (numString.length === 4) {
      let end = +(numString[1] + numString[2] + numString[3]);
      if (end === 0) return ones[numString[0]] + ' thousand';
      if (end < 100) return ones[numString[0]] + ' thousand and ' + tens[numString[2]] + ' '+ ones[numString[3]];
      return ones[numString[0]] + ' thousand ' + tens[numString[1]] + ' hundred' + tens[numString[2]] + ' '+ ones[numString[3]];
    } 

    //10 000
    if (numString.length === 5) {
       
let begin = +(numString[0] + numString[1]);
let last = +(numString[2] + numString[3] + numString[4]);
if ((begin < 20) && (last == 0)) return ones[begin] + ' thousands';
if ((begin === 20) && (last == 0)) return  'twenty thousands';
        if ((begin> 20) && (last == 0)) return tens[numString[0]] + ones[numString[1]] + ' thousands';
        if ((begin < 20) && (last < 100)) return ones[numString[0]] + ones[numString[1]] + ' thousands and '+ tens[numString[3]] + ' '+ ones[numString[4]];
        return tens[numString[0]] + ones[numString[1]] + ' thousand ' + ones[numString[2]] + ' hundred ' + tens[numString[3]] + ' '+ ones[numString[4]];
      } 
  }
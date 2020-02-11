const array = [2, 78, 56, 45];

function getOddNumbers(arr){
    let oddNumbers = [];
    for( let i = 0; i<= arr.length; i++){
        if( (i%2)-1===0){
            oddNumbers.push(arr[i]);
        }
    }
    let sum = 0;
    for (let i = 0; i < oddNumbers.length; i++){
       
        sum += oddNumbers[i];
       
    }
    console.log (sum);

}
console.log(getOddNumbers(array));
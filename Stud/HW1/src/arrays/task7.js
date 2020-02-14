const array = [2, 79, 56, 45];

function getOddNumbers(arr){
    let count = 0;
    for( let i = 0; i<= arr.length; i++){
        
        if( (i%2)-1===0){
            count ++;
        }
       
    }
    console.log(count);
}
getOddNumbers(array);
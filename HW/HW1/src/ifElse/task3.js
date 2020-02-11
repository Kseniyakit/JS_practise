let arr = [-1,4,5];
function arraySum(array){
    let sum = 0;
    for (let i=0; i<array.length; i++){
        if (array[i]>0){
            sum+= array[i];
        }
    }
    console.log(sum)
}
arraySum(arr);
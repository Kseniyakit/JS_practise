const array = [2, 78, 56, 45];

function getMaxValue(arr){
    let min = arr[0]; 
    for (let i = 0; i < arr.length; i++) { 
        if (min > arr[i]) min = arr[i]; 
    }
    return min;
}

getMaxValue(array);
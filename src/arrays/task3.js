const array = [22, 78, 2, 45];

function getMaxValue(arr){
    let min = arr[0]; 
    for (let i = 0; i < arr.length; i++) { 
        if (min > arr[i]) min = arr[i]; 
    }
    return arr.indexOf(min);
}

getMaxValue(array);
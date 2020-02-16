const array = [2, 78, 56, 45];

function getMinValue(arr) {
    if (!Array.isArray(arr) || (arr === null) || (arr === undefined) || (isNaN(Array.isArray(arr)))) {
        return null;
    }

    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}



getMinValue(array);

window.getMinValue = getMinValue;
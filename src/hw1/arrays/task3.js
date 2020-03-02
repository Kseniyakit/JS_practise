/* const array = [22, 78, 2, 45]; */

function getIndexValue(arr) {
    if (!Array.isArray(arr) || (arr === null) || (arr === undefined) || (isNaN(Array.isArray(arr)))) {
        return null;
    }
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return arr.indexOf(min);
}

getIndexValue(array);
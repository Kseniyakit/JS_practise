/* const array = [2, 78, 56, 45]; */

function getMaxValue(arr) {
    if (!Array.isArray(arr) || (arr === null) || (arr === undefined)) {
        return null;
    }
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
    }
    return max;
}

getMaxValue(array);

window.getMaxValue = getMaxValue;
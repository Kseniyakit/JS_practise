/* const array = [2, 79, 56, 45]; */
const insertionSort = arr => {
    if (!Array.isArray(arr) || (arr === null) || (arr === undefined) || (isNaN(Array.isArray(arr)))) {
        return null;
    }
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
};
/* insertionSort(array); */
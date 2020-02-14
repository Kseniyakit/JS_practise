/* const array = [2, 79, 56, 45]; */

function getOddCount(arr) {
    if (!Array.isArray(arr) || (arr === null) || (arr === undefined) || (arr === undefined)) {
        return null;
    }
    let count = 0;
    for (let i = 0; i <= arr.length; i++) {

        if ((i % 2) - 1 === 0) {
            count++;
        }

    }
    return count;
}
getOddCount(array);
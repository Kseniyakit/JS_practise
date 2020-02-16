/* const array = [2, 78, 56, 45]; */

function getOddNumbers(arr) {
    let oddNumbers = [];
    if (!Array.isArray(arr) || (arr === null) || (arr === undefined) || (isNaN(Array.isArray(arr)))) {
        return null;
    }
    for (let i = 0; i <= arr.length; i++) {
        if ((i % 2) - 1 === 0) {
            oddNumbers.push(arr[i]);
        }
        /* console.log(oddNumbers); */
    }
    let sum = 0;
    for (let i = 0; i < oddNumbers.length; i++) {

        sum += oddNumbers[i];

    }
    return sum;

}
/* console.log(getOddNumbers(array)); */
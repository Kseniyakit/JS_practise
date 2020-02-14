/* const a = 3;
const b = 5; */
function getMultEven(a, b) {
    if ((a === null) || (a === NaN) || (a === undefined) || (b === null) || (b === NaN) || (b === undefined)) {
        return null;
    }
    let result = 0;
    if (a % 2 == 0) {
        return result = a * b;
    } else return result = a + b;
}
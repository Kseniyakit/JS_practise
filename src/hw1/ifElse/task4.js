/* const a = 3;
const b = 10;
const c = 7; */
function mathMax(a,b,c){
    if ((a=== null) || (isNaN(a)) || (a === undefined) || (b === null) || (isNaN(b)) || (b === undefined) || (c === null) || (isNaN(c)) || (c === undefined)) {
        return null;
    }
    result = Math.max(a*b*c, a+b+c) + 3;
    return result;
    
}

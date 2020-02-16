/* const array = [2, 78, 56, 45]; */

/* function arrayReversed(arr) {
    if (!Array.isArray(arr) || (arr === null) || (arr === undefined) || (isNaN(Array.isArray(arr)))) {
        return null;
    }
    return arr.reverse();

}; */
let a = [1, 2, 3];
function arrayReversed (arr){
    if (!Array.isArray(arr) || (arr === null) || (arr === undefined) || (isNaN(Array.isArray(arr)))) {
        return null;
    }
       let array = [];
   
       for( let i = arr.length; i--; ){
   
           array.push( arr[i] );
   
       };
  
       return array;
   
    };
    
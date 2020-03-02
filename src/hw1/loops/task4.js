function factorial(n) {
  if ((n=== null) || isNaN(n)|| (n === "")|| (n === undefined) ) {
    return null;
}
  if (n < 0) {
    return " Число меньше нуля";
}
if (!Number.isInteger(n)) {
  return " Число не целочисленное";
}
    let num = 1;
    while(n) {
      num *=n--;
      
    }
    return num;
   }
/*    console.log( factorial(5) ); */
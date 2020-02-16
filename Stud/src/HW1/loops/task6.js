

function reverse (n) {
  if ((n=== null) || isNaN(n)|| (n === "")|| (n === undefined) ) {
    return null;
}
if (!Number.isInteger(n)) {
  return " Число не целочисленное";
}
  let reversed = 0;
 
  while (n != 0) {
   reversed *= 10;
   reversed += n % 10;
   n -= n % 10;
   n /= 10;
  }
 
  return reversed;
 }

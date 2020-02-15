function isPrime(n) {
  if ((n=== null) || isNaN(n) || (n === "")|| (n === undefined) ) {
    return null;
}
  else if (n < 2){
    return 'Число должно быть больше 1';
  } else if (n === 2) {
    return 'Простое число';
  } else if (!Number.isInteger(n)){
    return " Число не целочисленное";
  }

  let i = 2;
  const limit = Math.sqrt(n);
  
  while (i < limit){
    if (n % i === 0) {
      return 'Составное число';
    }
    i +=1;
  }

    return 'Простое число';

}

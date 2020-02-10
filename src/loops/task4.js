function factorial(n) {
    let num = 1;
    while(n) {
      num *=n--;
      
    }
    return num;
   }
   console.log( factorial(5) );
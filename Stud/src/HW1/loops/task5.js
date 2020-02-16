function getSumNum(n){
    if ((n=== null) || isNaN(n)|| (n === "")|| (n === undefined) ) {
        return null;
    }
    if (n < 0) {
        return " Число меньше нуля";
    }
    if (!Number.isInteger(n)) {
      return " Число не целочисленное";
    }
sum = 0;
for (let i =0; i<=n; i++){
sum += i;
}
return sum;
}
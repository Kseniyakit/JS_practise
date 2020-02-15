function getMathSqrt(num){
    if ((num=== null) || isNaN(num)|| (num === "")|| (num === undefined) ) {
        return null;
    }
    if (num < 0) {
        return " Число меньше нуля";
    }
    if (!Number.isInteger(num)) {
        return " Число не целочисленное";
    }
for (let i = 0; i<10; i++ ){
    if (num === i) {
        return Math.round(Math.sqrt(num));
    } 
}
    return "Число не натуральное";

}
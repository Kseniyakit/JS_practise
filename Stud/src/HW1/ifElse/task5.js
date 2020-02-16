
 function getMark(mark){ 
    if ((mark=== null) || (isNaN(mark)) || (mark === undefined)) {
        return null;
    }
    if (0<mark && mark<19){
        return 'F';
    }
    if (20<mark && mark<39){
        return 'E';
    }
    if (40<mark && mark<59){
        return 'D';
    }
    if (60<mark && mark<74){
        return 'C';
    }
    if (75<mark && mark<89){
        return 'B';
    }
    if (90<mark && mark<100){
        return 'A';
    }
     }
    
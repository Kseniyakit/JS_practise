function findLength(x1, x2, y1, y2) {
    if ((x1 === null) || (isNaN(x1)) || (x1 === undefined) || (x1 === "") || (x2 === null) || (isNaN(x2)) || (x2 === undefined) || (x2 === "") || (y1 === null) || (isNaN(y1)) || (y1 === undefined) || (y1 === "") || (y2 === null) || (isNaN(y2)) || (y2 === undefined) || (y2 === "")){ 
        return null;
    }
    const length = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    const length1 = length.toFixed(0);
    return length1;
}
/* findLength(2,4,2,4); */
function findLength(x1, x2, y1, y2) {
    if ((x1 === null) || (x1 === NaN) || (x1 === undefined) || (x1 === "") || (x2 === null) || (x2 === NaN) || (x2 === undefined) || (x2 === "") || (y1 === null) || (y1 === NaN) || (y1 === undefined) || (y1 === "") || (y2 === null) || (y2 === NaN) || (y2 === undefined) || (y2 === "")) {
        return null;
    }
    const length = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    const length1 = length.toFixed(0);
    return length1;
}
/* findLength(2,4,2,4); */
let AList = function(array) {
    this.defaultArray = array;
    this.arr = [];
    this.init();

};

AList.prototype.init = function() {

    let i = 0;
    while (this.defaultArray[i]) {
        this.arr[i] = this.defaultArray[i];
        i++;
    }
    return this.arr;
};

AList.prototype.size = function() {
    let i = 0;
    while (this.arr[i]) {
        i++;
    }
    return i;
};

AList.prototype.addStart = function(element) {
    let el = [element];

    for (let i = 0; i < this.size(); i++) {



        el[i + 1] = this.arr[i];

    }

    this.arr = el;

    return this.arr;
};

AList.prototype.addEnd = function(element) {
    this.arr[this.size()] = element;
    return this.arr;
};

AList.prototype.delStart = function() {
    let copyArray = [];
    let firstNum = this.arr[0];
    for (let i = 1; i < this.size(); i++) {
        copyArray[i - 1] = this.arr[i];

    }
    this.arr = copyArray;
    /*  return this.arr; */
    return firstNum;
};

AList.prototype.delEnd = function() {
    let copyArray = [];
    let endNum = this.arr[this.size() - 1];
    for (let i = 0; i < this.size() - 1; i++) {
        copyArray[i] = this.arr[i];
    }
    this.arr = copyArray;
    return endNum;
    /* return this.arr; */
};

AList.prototype.delPosition = function(index) {
    let copyArray = [];
    let indexNum = this.arr[index];
    let j = 0;
    for (let i = 0; i < this.size(); i++) {
        if (i === index) {
            i - index;
        } else {
            copyArray[j] = this.arr[i];
            j++;
        }
    }
    this.arr = copyArray;
    return indexNum;
    /* return this.arr; */
};

AList.prototype.get = function(index) {
    for (let i = 0; i < this.size(); i++) {
        if (i == index) {
            return this.arr[i];
        }

    }

};

AList.prototype.set = function(index, element) {
    let copyArray = [];
    let j = 0;
    for (let i = 0; i < this.size() + 1; i++) {
        if (i === index) {
            copyArray[i] = element;
        } else {
            copyArray[i] = this.arr[j];
            j++;
        }
    }
    this.arr = copyArray;
    return this.arr;
};

AList.prototype.toString = function() {
    let toString = "";
    for (let i = 0; i < this.size(); i++) {
        if (this.arr) {
            toString += ' ' + this.arr[i];
        }
    }
    return toString;
};
AList.prototype.clear = function() {
    let i = 0;
    while (this.defaultArray[i]) {
        this.arr[i] = this.defaultArray[i];
        i++;
    }
    return this.arr;

};
AList.prototype.min = function() {
    if (!Array.isArray(this.arr) || (this.arr === null) || (this.arr === undefined) || (isNaN(Array.isArray(this.arr)))) {
        return null;
    }

    let min = this.arr[0];

    for (let i = 0; i < this.size(); i++) {
        if (min > this.arr[i]) min = this.arr[i];
    }
    return min;
}
AList.prototype.max = function() {
    if (!Array.isArray(this.arr) || (this.arr === null) || (this.arr === undefined) || (isNaN(Array.isArray(this.arr)))) {
        return null;
    }

    let max = this.arr[0];

    for (let i = 0; i < this.size(); i++) {
        if (max < this.arr[i]) max = this.arr[i];
    }
    return max;
}
AList.prototype.sort = function() {
    var n = this.size();
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (this.arr[j + 1] < this.arr[j]) {
                let t = this.arr[j + 1];
                this.arr[j + 1] = this.arr[j];
                this.arr[j] = t;
            }
        }
    }
    return this.arr;
}
AList.prototype.maxIndex = function() {
    if (!Array.isArray(this.arr) || (this.arr === null) || (this.arr === undefined) || (isNaN(Array.isArray(this.arr)))) {
        return null;
    }

    let index;

    let max = this.arr[0];

    for (let i = 0; i < this.size(); i++) {
        if (max <= this.arr[i]) {
            max = this.arr[i];
            index = i;
        }
    }

    return index;
}
AList.prototype.minIndex = function() {
    if (!Array.isArray(this.arr) || (this.arr === null) || (this.arr === undefined) || (isNaN(Array.isArray(this.arr)))) {
        return null;
    }

    let index;

    let min = this.arr[0];

    for (let i = 0; i < this.size(); i++) {
        if (min >= this.arr[i]) {
            min = this.arr[i];
            index = i;
        }
    }

    return index;
}
AList.prototype.reverse = function() {

    let arr1 = [];
    let count = this.size();

    for (let i = 0; i < this.size(); i++) {

        arr1[i] = this.arr[count - 1];
        count--;
    };
    this.arr = arr1;
    return this.arr;
}
AList.prototype.halfreverse = function() {
    let left = null;
    let right = null;
    let length = this.size();
    for (left = 0; left < this.size() / 2; left += 1) {
        right = length - 1 - left;
        var temporary = this.arr[left];
        this.arr[left] = this.arr[right];
        this.arr[right] = temporary;
    }
    return this.arr;
}


let aList = new AList([5, 2, 9, 4]);

/* console.log(aList.defaultArray);
console.log(aList.init());
console.log(aList.size());

console.log(aList.addStart(4));
console.log(aList.size());

console.log(aList.addEnd(6));
console.log(aList.size());

console.log(aList.delStart());
console.log(aList.arr);
console.log(aList.size());

console.log(aList.delEnd());
console.log(aList.arr);
console.log(aList.size());

console.log(aList.delPosition(2));
console.log(aList.arr);
console.log(aList.size());

console.log(aList.get(2));

console.log(aList.set(2, 20));
aList.init();
console.log(aList.toString());
console.log(aList.clear());
console.log(aList.min());
console.log(aList.max());
console.log(aList.sort());
aList.clear();
console.log(aList.arr);
console.log(aList.maxIndex());
console.log(aList.minIndex());
console.log(aList.reverse()); */
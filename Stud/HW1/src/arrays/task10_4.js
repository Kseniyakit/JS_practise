//Heap
/* let arr = [1, 3, 9, 56, 560, 506, 45, 13, 28, 22]; */
const heapSort = (arr) => {
    if (!Array.isArray(arr) || (arr === null) || (arr === undefined) || (arr === undefined)) {
        return null;
    }
    createMaxHeap(arr);
    let endIndex = arr.length - 1;
    while (endIndex > 0) {
        swapArr(arr, 0, endIndex);
        heapify(arr, 0, endIndex);
        endIndex--;
    }
    console.log(arr);
}

const createMaxHeap = (arr) => {
    let startIndex = Math.floor(arr.length / 2);
    while (startIndex >= 0) {
        heapify(arr, startIndex, arr.length)
        startIndex--;
    }
}

const heapify = (arr, index, maxIndex) => {
    while (index < maxIndex) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;

        let largestValueIndex = index;
        if (leftChildIndex < maxIndex && arr[leftChildIndex] > arr[largestValueIndex]) {
            largestValueIndex = leftChildIndex;
        }
        if (rightChildIndex < maxIndex && arr[rightChildIndex] > arr[largestValueIndex]) {
            largestValueIndex = rightChildIndex;
        }
        if (index === largestValueIndex) {
            return;
        }
        swapArr(arr, index, largestValueIndex);
        index = largestValueIndex;
    }
}

const swapArr = (arr, indexA, indexB) => {
    let bufferValue = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = bufferValue;
}

/* heapSort(arr) */
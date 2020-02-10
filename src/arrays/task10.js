//Quick
const items = [2, 79, 56, 45];

function swap(items, firstIndex, secondIndex){
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
function partition(items, left, right) {
    let pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

let result = quickSort(items);

console.log(result);

//Merge
const items = [2, 79, 56, 45];
const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let i = j = 0;
    // сравниваем два массива, поочередно сдвигая указатели
    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }
    // обрабатываем последний элемент при разной длине массивов
    // и возвращаем один отсортированный массив
    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
};
const mergeSort = arr => {
    // Проверяем корректность переданных данных
    if (!arr || !arr.length) {
        return null;
    }
    //Если массив содержит один элемент просто возвращаем его
    if (arr.length <= 1) {
        return arr;
    }
    // Находим середину массива и делим его на два
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);
    // Для новых массивов снова вызываем сортировку,
    // сливаем их и возвращаем снова единый массив
    return merge(mergeSort(arrLeft), mergeSort(arrRight));;
};
mergeSort(items);

//Shell
const items = [2, 79, 56, 45];
const ShellSort = arr => {
    const l = arr.length;
    let gap = Math.floor(l / 2);
    while (gap >= 1) {
        for (let i = gap; i < l; i++) {
            const current = arr[i];
            let j = i;
            while (j > 0 && arr[j - gap] > current) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = current;
        }
        gap = Math.floor(gap / 2);
    }
    return arr;
};
ShellSort(items);

//Heap
const array = [2, 79, 56, 45];
let heap_sort = function(array){
	
	/**
	 * deeps down to the children, and check if children is less then parent
	 */
	function sink(array, i, max){
	
		var big_index, child;
    	
    	while( i < max ) {
	        big_index = i;
	        childl = 2 * i + 1;
	       	childr = childl + 1;

	        if (childl < max && array[childl] > array[big_index])
	            big_index = childl;
	        
	        if (childr < max && array[childr] > array[big_index])
	            big_index = childr;
	        
	        if (big_index == i) return;
	        

	        array.swap(i, big_index);
	        i = big_index;
	    }
	}

	/**
	 * build heap from the array
	 */
	function build_heap(array){
		var index = Math.floor((array.length / 2) - 1) ;

		while ( index >= 0 ){
			sink(array, index, array.length);
			index--;
		}
	}

	/**
	 * start soring
	 */
	function heapSort(array){
		build_heap(array);

		var end = array.length - 1;
	    
	    while(end >= 0) {
	        array.swap(0, end);
	        sink(array, 0, end);
	        end -= 1
	    }

	    return array;
	}

	return heapSort(array);
};

heapSort(array);
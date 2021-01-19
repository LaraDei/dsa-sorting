//******************BUBBLE SORT
//Best O(n)
//Average O(n^2)
//Worst O(n^2)
/*Terrible sorting alg!!!!*/

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};

//******************MERGE SORT
/*Merge sort takes a divide and conquer approach to sorting.*/
//Best O(nlog(n))
//Average O(nlog(n))
//Worst O(nlog(n))
function mergeSort(array) {
    //console.log(array)
    if (array.length <= 1) {
      return array;
    }
  
    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
  
    left = mergeSort(left);
    right = mergeSort(right);
    
    return merge(left, right, array);
  }

function merge(left, right, array) {
    //console.log(array)
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

//******************QUICK SORT
/*Quicksort is another sorting algorithm with O(nlog(n)) best and average-case performance, 
although it is O(n^2) in the worst case. Despite this, quicksort is 
more commonly used than merge sort, as it is more cache-efficient and 
can easily be performed in place (i.e., without additional memory allocations).*/
//Best O(nlog(n))
//Average O(nlog(n))
//Worst O(n^2)
function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};
/*The pivot is the final value in the array. You loop through the array, 
swapping values as you go to put them on either side of the pivot point. 
And finally, you put the pivot into the correct place in the array.*/

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

module.exports = mergeSort

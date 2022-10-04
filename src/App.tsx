import React, { useState } from 'react';
import './App.css';

function App() {

  const [arr, setArr] = useState<number[]>([]);

  let arrToBeSorted = [1,5,3,66,7,76,25,11,2,4,6,0]

  function handleClick(){
    quickSort(arrToBeSorted, 0, arrToBeSorted.length - 1)
    setArr(arrToBeSorted)
  }

  return (
    <div className="App">
      <p>{"array to be sorted = " + arrToBeSorted}</p>
      <button onClick={() => handleClick()}>quicksort it bre!</button>
      {arr && <p>{"sorted array = " + arr}</p>}
    </div>
  );
}

// A utility function to swap two elements
function swap(arr: number[], i: number, j:number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/* This function takes "last element" as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partition(arr: number[], low: number, high: number) {
  
  // pivot
  let pivot = arr[high];

  // Index of smaller element and
  // indicates the right position
  // of pivot found so far
  let i = (low - 1);

  for (let j = low; j <= high - 1; j++) {

      // If current element is smaller 
      // than the pivot
      if (arr[j] < pivot) {

          // Increment index of 
          // smaller element
          i++;
          swap(arr, i, j);
      }
  }
  swap(arr, i + 1, high);
  return (i + 1);
}

// arr[] --> Array to be sorted, low --> Starting index, high --> Ending index
function quickSort (arr: number[], low: number, high:number) {
  while (low < high){
    
    // pi is partitioning index, arr[pi] is now at right place
    let pi = partition(arr, low, high);

    // if left part is smaller, then recur for left part and handle right part iteratively
    if(pi - low < high - pi){
      quickSort(arr, low, pi -1);
      low = pi + 1;
    } 
    // else recur for right part
    else { 
      quickSort(arr, pi + 1, high);
      high = pi - 1;
    }
  }
}

export default App;

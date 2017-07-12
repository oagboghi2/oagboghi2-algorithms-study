const arr = [29, 10, 14, 37, 13] ;

//create a swap function for manipulating the array
const swap = (arr, i , j) =>{
  var temp = arr[i];
  arr[i]= arr[j];
  arr[j] = temp;
};




const SelectionSort = (arr) =>{
  //run a loop inside of another loop
  for(var i = 0; i < arr.length; i++){
    var min = i;
    //first loop makes the first element the min variable that you compare others to
    for(var j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
      //the 2nd loop we take the arr[min] and compare it to the elemts of the same array. If j is found to be lower than min, we make that the new min
    }
    if(i !== min){
      swap(arr, i, min);
    }
    // if i doesn't match min, then we call the swap function, and switch their positions in the array.
  }
console.log(arr);
  //we return the array, after the loop has iterated through the entire array
};


SelectionSort(arr);

export default SelectionSort;
